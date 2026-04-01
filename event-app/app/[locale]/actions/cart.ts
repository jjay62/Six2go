'use server'

import { revalidatePath } from 'next/cache'
import { getLocale } from 'next-intl/server'
import { redirect } from '@/i18n/navigation'
import { createClient } from '@/app/[locale]/lib/server'

function revalidateCartPages() {
  revalidatePath('/' ,'layout')
  revalidatePath('/' ,'page')
}

async function requireUser() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    redirect({ href: '/login', locale: await getLocale() })
    throw new Error('UNREACHABLE')
  }
  return { supabase, user }
}


export async function addToCart(menuItemId: number) {
  const { supabase, user } = await requireUser()

  const { data: existing } = await supabase
    .from('cart_items')
    .select('id, quantity')
    .eq('user_id', user.id)
    .eq('menu_item_id', menuItemId)
    .maybeSingle()

  if (existing) {
    // increase quantity
    await supabase
      .from('cart_items')
      .update({ quantity: existing.quantity + 1 })
      .eq('id', existing.id)
      .eq('user_id', user.id)
  } else {
    // insert new item
    await supabase
      .from('cart_items')
      .insert({
        user_id: user.id,
        menu_item_id: menuItemId,
        quantity: 1
      })
  }

  revalidateCartPages()
}


export async function increase(cartItemId: number) {
  const { supabase, user } = await requireUser()

  const { data: item } = await supabase
    .from('cart_items')
    .select('quantity')
    .eq('id', cartItemId)
    .eq('user_id', user.id)
    .maybeSingle()

  if (!item) return
  await supabase
    .from('cart_items')
    .update({ quantity: item.quantity + 1 })
    .eq('id', cartItemId)
    .eq('user_id', user.id)

  revalidateCartPages()
}


export async function decrease(cartItemId: number) {
  const { supabase, user } = await requireUser()

  const { data: item } = await supabase
    .from('cart_items')
    .select('quantity')
    .eq('id', cartItemId)
    .eq('user_id', user.id)
    .maybeSingle()

  if (!item) return
  if (item.quantity <= 1) {
    await supabase
      .from('cart_items')
      .delete()
      .eq('id', cartItemId)
      .eq('user_id', user.id)
  } else {
    await supabase
      .from('cart_items')
      .update({ quantity: item.quantity - 1 })
      .eq('id', cartItemId)
      .eq('user_id', user.id)
  }

  revalidateCartPages()
}


export async function remove(cartItemId: number) {
  const { supabase, user } = await requireUser()

  await supabase
    .from('cart_items')
    .delete()
    .eq('id', cartItemId)
    .eq('user_id', user.id)

  revalidateCartPages()
}