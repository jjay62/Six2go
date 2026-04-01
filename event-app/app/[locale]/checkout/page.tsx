import React from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { createClient } from '@/app/[locale]/lib/server'
import {
  increase,
  decrease,
  remove,
} from '@/app/[locale]/actions/cart'
import { getLocale } from 'next-intl/server'
import { redirect } from '@/i18n/navigation'
import Link from 'next/link'
import CheckoutButton from '@/components/checkoutbutton'
import { getTranslations } from 'next-intl/server'

export default async function CheckoutPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect({ href: '/login', locale: await getLocale() })
    throw new Error('UNREACHABLE')
  }

  const { data: cartItems, error: cartError } = await supabase
    .from('cart_items')
    .select('id, quantity, menu_item_id, menu_items(id, title, price, image)')
    .eq('user_id', user.id)
    .order('created_at')

  if (cartError) console.error('CART SELECT error:', cartError)

  const totalPrice = cartItems?.reduce((sum, item) => {
    const menuItem = item.menu_items as { price?: number } | null
    return sum + (menuItem?.price ?? 0) * item.quantity
  }, 0) ?? 0

  const t = await getTranslations('Checkout')

  return (
    <>
    <div>
      <Header />
    </div>
    <div className="mx-auto w-full max-w-2xl px-4 py-8">
      <h1 className="mb-8 mt-8 px-4 py-3 text-center text-3xl font-bold text-white">
        {t('title')}
      </h1>

      <div className="mb-8 rounded-lg border border-white/10 bg-gray-900 p-20">
        <h2 className="mb-4 text-lg font-bold text-white">{t('yourCart')}</h2>

        {!cartItems || cartItems.length === 0 ? (
          <p className="text-sm text-white/50">
            {t('emptyCart')}
          </p>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => {
              const menuItem = item.menu_items as {
                title?: string
                price?: number
                image?: string
                id?: string
              } | null

              return (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b border-white/10 pb-4"
                >
                  <div className="flex items-center gap-4">
                    {menuItem?.image && (
                      <img
                        src={menuItem.image}
                        alt={""}
                        className="h-14 w-14 rounded-md object-cover"
                      />
                    )}
                    <div>
                      <p className="font-semibold text-white">
                      <Link href={`/products/${menuItem?.id}`} className="hover:text-blue-500 hover:underline">{menuItem?.title ?? t('itemNotFound')}</Link>
                      </p>
                      <p className="text-sm text-white/50">
                        €{(menuItem?.price ?? 0).toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <form
                      action={async () => {
                        'use server'
                        await decrease(item.id)
                      }}
                    >
                      <button
                        type="submit"
                        className="h-8 w-8 rounded bg-white/10 text-lg text-white transition-colors hover:bg-white/20"
                      >
                        -
                      </button>
                    </form>

                    <span className="w-8 text-center font-semibold text-white">
                      {item.quantity}
                    </span>

                    <form
                      action={async () => {
                        'use server'
                        await increase(item.id)
                      }}
                    >
                      <button
                        type="submit"
                        className="h-8 w-8 rounded bg-white/10 text-lg text-white transition-colors hover:bg-white/20"
                      >
                        +
                      </button>
                    </form>

                    <form
                      action={async () => {
                        'use server'
                        await remove(item.id)
                      }}
                    >
                      <button
                        type="submit"
                        className="ml-2 border border-none rounded-xl p-3 bg-red-950 text-sm text-red-400 transition-colors hover:text-red-300"
                      >
                        {t('remove')}
                      </button>
                    </form>
                  </div>
                </div>
              )
            })}

            <div className="flex justify-between pt-2 mt-4 items-center">
              <span className="font-bold text-white">{t('total')}</span>
              <span className="font-bold text-white">
                €{totalPrice.toFixed(2)}
              </span>
      <div className=" flex justify-center bg-blue-700 p-3 rounded-md text-white font-bold hover:bg-blue-800 transition-colors">
        <CheckoutButton />
      </div>
            </div>
          </div>
        )}
      </div>

      <div className="px-2 py-6">
        <Link
          href="/"
          className="mb-6 inline-block text-sm text-[#2992CF] hover:underline"
        >
          {t('backToHome')}
        </Link>
      </div>
    </div>
    <div>
      <Footer />
    </div>
  </>
  )
}
