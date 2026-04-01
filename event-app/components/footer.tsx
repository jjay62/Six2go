import Link from 'next/link'
import React from 'react'
import { getTranslations } from 'next-intl/server'

const Footer = async () => {
  const t = await getTranslations('Footer')
  return (
    <>
    
    <footer className="border-t border-white/20 px-6 py-8 mt-auto text-white ">
      <div className="max-w-7xl mx-auto flex flex-row flex-wrap gap-6 sm:gap-12 justify-between">
        <section>
          <h3 className="font-semibold text-sm uppercase tracking-wider text-white/80 mb-3">{t('siteMap')}</h3>
          <nav className="flex flex-col gap-2">
            <Link href="/home" className="text-white hover:text-blue-500 hover:underline">{t('home')}</Link>
            <Link href="/menu" className="text-white hover:text-blue-500 hover:underline">{t('menu')}</Link>
            <Link href="/about" className="text-white hover:text-blue-500 hover:underline">{t('about')}</Link>
            <Link href="/login" className="text-white hover:text-blue-500 hover:underline">{t('loginSignup')}</Link>
          </nav>
        </section>
        <section>
          <h3 className="font-semibold text-sm uppercase tracking-wider text-white/80 mb-3">{t('contact')}</h3>
          <div className="flex flex-col gap-1 text-sm">
            <a href="mailto:jayklav62@gmail.com" className="text-white hover:text-blue-600 hover:underline">jayklav62@gmail.com</a>
            <span><a href="tel:+310633376647" className="text-white hover:text-blue-600 hover:underline">(+31) 0633376647</a></span>
          </div>
        </section>
        <section>
          <h3 className="font-semibold text-sm uppercase tracking-wider text-white/80 mb-3">{t('legal')}</h3>
          <Link href="/privacy" className="text-white hover:text-blue-600 hover:underline">{t('privacyPolicy')}</Link>
        </section>
      </div>
    </footer>
    <p className="text-center text-white/60 text-sm">{t('madeBy')}</p>
    </>
  )
}

export default Footer
