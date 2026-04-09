
import Link from 'next/link'
import { createClient } from '@/lib/server'
import { getLocale } from 'next-intl/server'
import { redirect } from '@/i18n/navigation'
import Image from 'next/image'
import { CartIcon } from './cartIcon'
import { getTranslations } from 'next-intl/server'
import LanguageSwitcher from './languageSwitcher'

export async function getTotalItems(userId: string | null) {
  if (!userId) return 0
  const supabase = await createClient()
  const { data: cartItems } = await supabase
    .from('cart_items')
    .select('quantity')
    .eq('user_id', userId)
  return cartItems?.reduce((sum, item) => sum + item.quantity, 0) ?? 0
}

async function signOut() {
  'use server'
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect({ href: '/login', locale: await getLocale() })
}

const Header = async () => {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const totalItems = await getTotalItems(user?.id ?? null)
  const t = await getTranslations('Header')
  return (
    <>
      <div className="flex w-full justify-center items-center text-bold text-1xl tracking-widest bg-blue-900 py-1.5">
        <h3 className="scrolling-text">{t('scrollingText')}</h3>
      </div>
      <div className="w-full border-b border-white/20 px-4 sm:px-6 py-4 text-white">
        <div className="flex flex-col md:grid md:grid-cols-3 w-full items-center gap-4 md:gap-2">
          <Link href="/" className="flex w-fit items-center" aria-label="">
            <Image src="/logooooo.png" alt="six2go" width={120} height={10}/>
          </Link>

          <nav className="flex flex-wrap justify-center gap-4 sm:gap-10 justify-self-center">
            <Link href="/" className="text-white hover:text-blue-500 text-lg hover:underline">
              {t('home')}
            </Link>
            <Link href="/menu" className="text-white hover:text-blue-500 text-lg hover:underline">
              {t('menu')}
            </Link>
            <Link href="/about" className="text-white hover:text-blue-500 text-lg hover:underline">
              {t('about')}
            </Link>
            
          </nav>

          <div className="flex min-w-0 flex-wrap md:flex-nowrap items-center justify-center md:justify-end md:justify-self-end gap-2 sm:gap-3">
            {user ? (
              <>
                <span className="hidden text-sm text-white/60 truncate max-w-[120px] sm:inline md:max-w-[150px]">
                  {user.email}
                </span>
                <form action={signOut}>
                  <button
                    type="submit"
                    className="whitespace-nowrap text-sm bg-blue-800 hover:bg-blue-900 px-3 py-1.5 rounded-md transition-colors hover:scale-105"
                  >
                    {t('signOut')}
                  </button>
                </form>
              </>
            ) : (
              <Link
                href="/login"
                className="whitespace-nowrap text-md bg-blue-800 hover:bg-blue-900 px-4 py-1.5 rounded-md transition-colors font-bold hover:scale-105"
              >
                {t('logIn')}
              </Link>
            )}

            <LanguageSwitcher />
            <CartIcon totalItems={totalItems} />
            <Link
              href="/menu"
              className="font-bold whitespace-nowrap text-sm ml-2 md:ml-10 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition-colors font-medium hover:scale-105"
            >
              {t('orderNow')}
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
