import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { createClient } from '@/lib/server'
import { stripe } from '@/lib/stripe'

type MenuItemJoin = { title?: string | null; price?: number | null } | null

export async function POST() {
  try {
    const supabase = await createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2026-03-25.dahlia'
    });
    const { data: cartItems, error } = await supabase
      .from('cart_items')
      .select('id, quantity, menu_items(title, price)')
      .eq('user_id', user.id)

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
    if (!cartItems?.length) {
      return NextResponse.json({ error: 'Cart is empty' }, { status: 400 })
    }

    const line_items = cartItems
      .map((row) => {
        const mi = row.menu_items as MenuItemJoin
        const title = mi?.title ?? 'Item'
        const euros = Number(mi?.price ?? 0)
        const unit_amount = Math.round(euros * 100)

        return {
          price_data: {
            currency: 'eur',
            product_data: { name: String(title) },
            unit_amount,
          },
          quantity: row.quantity,
        }
      })
      .filter((li) => li.price_data.unit_amount > 0)

    if (!line_items.length) {
      return NextResponse.json(
        { error: 'No billable items in cart (prices must be greater than €0)' },
        { status: 400 }
      )
    }

    const headersList = await headers()
    const origin =
      headersList.get('origin') ??
      (process.env.NEXT_PUBLIC_SITE_URL as string | undefined) ??
      'http://localhost:3000'

    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: 'payment',
      success_url: `${origin}/checkout-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout`,
      client_reference_id: user.id,
      metadata: { supabase_user_id: user.id },
      shipping_address_collection: {
        allowed_countries: ['NL']
      }
    })

    if (!session.url) {
      return NextResponse.json(
        { error: 'Stripe did not return a checkout URL' },
        { status: 500 }
      )
    }

    return NextResponse.json({ url: session.url })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Checkout failed'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
