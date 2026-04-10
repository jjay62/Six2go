import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import type Stripe from 'stripe'

import { getStripe } from '@/lib/stripe'
import { createAdminClient } from '@/lib/admin'

export async function fulfillCheckoutSession(session: Stripe.Checkout.Session) {
  if (session.status !== 'complete') {
    console.warn(
      'checkout.session.completed: skip fulfillment, session.status=',
      session.status,
      session.id
    )
    return
  }

  if (
    session.payment_status !== 'paid' &&
    session.payment_status !== 'no_payment_required'
  ) {
    console.warn(
      'checkout.session.completed: skip fulfillment (async / unpaid yet). payment_status=',
      session.payment_status,
      session.id
    )
    return
  }

  const userId =
    session.client_reference_id ?? session.metadata?.supabase_user_id
  if (!userId) {
    throw new Error(
      'checkout.session.completed: missing client_reference_id and metadata.supabase_user_id'
    )
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
}

/**
 * Shared Stripe webhook POST handler. Use endpoint **outside** `[locale]`, e.g. `POST /api/stripe-webhook`,
 * so the URL does not depend on language prefixes and is easy to configure in Stripe Dashboard.
 */
export async function handleStripeWebhook(req: Request) {
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
    const secret = process.env.STRIPE_WEBHOOK_SECRET
    if (!secret) {
      console.error('STRIPE_WEBHOOK_SECRET is not set')
      return NextResponse.json(
        { message: 'Server misconfiguration' },
        { status: 500 }
      )
    }
    event = getStripe().webhooks.constructEvent(body, signature, secret)
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    console.log(err)
    return NextResponse.json({ message: `Webhook Error: ${message}` }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    try {
      const session = event.data.object as Stripe.Checkout.Session
      console.log(
        `CheckoutSession completed: ${session.id} status=${session.status} payment_status=${session.payment_status}`
      )
      await fulfillCheckoutSession(session)
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
