import { getLocale, getTranslations } from 'next-intl/server'
import { redirect } from '@/i18n/navigation'
import { stripe } from '@/app/[locale]/lib/stripe'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'

export default async function Success({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>
}) {
  const { session_id } = await searchParams

  if (!session_id)
    throw new Error('please provide a valid session_id')

  const {
    status,
  } = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ['line_items', 'payment_intent']
  })

  if (status === 'open') {
    redirect({ href: '/', locale: await getLocale() })
  }

  const t = await getTranslations('CheckoutSuccess')

  if (status === 'complete') {
    return (
      <>
        <Header />
          <div className="flex flex-col items-center justify-center mt-30 mb-40">
            <div className="text-center mb-8">
            <Image src="/logooooo.png" alt="six2go" width={200} height={10} />
            </div>
          <h1 className="text-3xl font-bold mb-6">{t('title')}</h1>
          <p className="text-white/80 mb-8">
          {t('description')}
          </p>

          <div className="text-center mt-4">
          <Link href="/" className="text-sm text-[#2992CF] hover:text-blue-700 hover:underline">
            {t('backToHome')}
          </Link>
        </div>
        </div>
        <Footer />
      </>
    );
  }
}
