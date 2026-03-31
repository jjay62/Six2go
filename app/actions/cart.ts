'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/app/lib/server'

function revalidateCartPages() {
  revalidatePath('/checkout')
  revalidatePath('/cart')
}


export async function addToCart(menuItemId: number) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/login')
    


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
  const supabase = await createClient()

  const { data: item } = await supabase
    .from('cart_items')
    .select('quantity')
    .eq('id', cartItemId)
    .maybeSingle()


  if (!item) return
  await supabase
    .from('cart_items')
    .update({ quantity: item.quantity + 1 })
    .eq('id', cartItemId)


  revalidateCartPages()
}


export async function decrease(cartItemId: number) {
  const supabase = await createClient()

  const { data: item } = await supabase
    .from('cart_items')
    .select('quantity')
    .eq('id', cartItemId)
    .maybeSingle()

  if (!item) return
  if (item.quantity <= 1) {
    await supabase
      .from('cart_items')
      .delete()
      .eq('id', cartItemId)
  } else {
    await supabase
      .from('cart_items')
      .update({ quantity: item.quantity - 1 })
      .eq('id', cartItemId)
  }

  revalidateCartPages()
}


export async function remove(cartItemId: number) {
  const supabase = await createClient()

  await supabase
    .from('cart_items')
    .delete()
    .eq('id', cartItemId)

  revalidateCartPages()
}