import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { createClient } from '@/lib/server'
import { getStripe } from '@/lib/stripe'
import { getLocale } from 'next-intl/server'

type MenuItemJoin = { title?: string | null; price?: number | null } | null

export async function POST() {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }


    const { data: cartItems, error } = await supabase
      .from('cart_items')
      .select('id, quantity, menu_items(title, price)')
      .eq('user_id', user.id)

    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    if (!cartItems?.length) return NextResponse.json({ error: 'Cart is empty' }, { status: 400 })

    const line_items = cartItems
      .map((row) => {
        const mi = row.menu_items as MenuItemJoin
        const title = mi?.title ?? 'Item'
        const euros = Number(mi?.price ?? 0)
        return {
          price_data: {
            currency: 'eur',
            product_data: { name: String(title) },
            unit_amount: Math.round(euros * 100),
          },
          quantity: row.quantity,
        }
      })
      .filter((li) => li.price_data.unit_amount > 0)

    const headersList = await headers()

    const origin = headersList.get('origin') ||
                   process.env.NEXT_PUBLIC_SITE_URL ||
                   'https://sixtwogo.vercel.app';

    const session = await getStripe().checkout.sessions.create({
      line_items,
      mode: 'payment',
      locale: (await getLocale()) as 'en' | 'nl',
      success_url: `${origin}/checkout-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout`,
      client_reference_id: user.id,
      metadata: { supabase_user_id: user.id },
      shipping_address_collection: {
        allowed_countries: ['NL']
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: { amount: 0, currency: 'eur' },
            display_name: 'Standard Delivery',
          },
        },
      ],
    })

    return NextResponse.json({ url: session.url })
  } catch {
    return NextResponse.json({ error: 'Checkout failed' }, { status: 500 })
  }
}
