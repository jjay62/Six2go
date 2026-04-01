import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import type Stripe from 'stripe'

import { stripe } from '@/app/[locale]/lib/stripe'
import { createAdminClient } from '@/app/[locale]/lib/admin'

async function fulfillCheckoutSession(session: Stripe.Checkout.Session) {
  if (session.payment_status !== 'paid') {
    console.warn(
      'checkout.session.completed: skipping fulfillment, payment_status=',
      session.payment_status
    )
    return
  }

  const userId = session.client_reference_id
  if (!userId) {
    throw new Error('checkout.session.completed: missing client_reference_id')
  }

  const admin = createAdminClient()

  const { error: cartError } = await admin
    .from('cart_items')
    .delete()
    .eq('user_id', userId)

  if (cartError) {
    console.error('Failed to clear cart after checkout:', cartError)
    throw cartError
  }

  const row = {
    user_id: userId,
    stripe_checkout_session_id: session.id,
    amount_total: session.amount_total ?? null,
    currency: session.currency ?? null,
    payment_status: session.payment_status,
  }

  const { error: orderError } = await admin.from('orders').upsert(row, {
    onConflict: 'stripe_checkout_session_id',
  })

  if (orderError) {
    console.error(
      'orders upsert failed (add an `orders` table or ignore if not used yet):',
      orderError.message
    )
  }
}

export async function POST(req: Request) {
  let event: Stripe.Event

  try {
    const body = await req.text()
    const signature = (await headers()).get('stripe-signature')
    if (!signature) {
      return NextResponse.json(
        { message: 'Missing stripe-signature header' },
        { status: 400 }
      )
    }
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    console.log(err)
    return NextResponse.json({ message: `Webhook Error: ${message}` }, { status: 400 })
  }

  const permittedEvents = ['checkout.session.completed']

  if (permittedEvents.includes(event.type)) {
    try {
      switch (event.type) {
        case 'checkout.session.completed': {
          const session = event.data.object as Stripe.Checkout.Session
          console.log(`CheckoutSession completed: ${session.id} status=${session.payment_status}`)
          await fulfillCheckoutSession(session)
          break
        }
        default:
          throw new Error(`Unhandled event: ${event.type}`)
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error)
      console.log(error)
      return NextResponse.json(
        { message: `Webhook handler failed: ${message}` },
        { status: 500 }
      )
    }
  }

  return NextResponse.json({ message: 'Received' }, { status: 200 })
}
