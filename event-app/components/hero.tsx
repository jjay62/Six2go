import Link from 'next/link'
import React from 'react'
import { getTranslations } from 'next-intl/server'

const Hero = async () => {
  const t = await getTranslations('Hero');

  return (
    <section className="relative h-[100svh] flex items-center justify-center">
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-90"
        autoPlay
        muted
        loop
        playsInline
        src="/videos/herovideo.mp4"
      />
      <div className="absolute inset-0 " />
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-4xl sm:text-7xl font-bold tracking-tight text-blue-500">
          {t('title')}
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-blue-500/90">
          {t('description')}
        </p>

        <div className="mt-10 flex justify-center">
          <Link
            href="/menu"
            className="px-6 py-3 text-white bg-blue-500 rounded-md font-bold hover:bg-blue-700 hover:scale-105 transition-all duration-200"
          >
            {t('menubutton')}
          </Link>
        </div>
      </div>

    </section>
  )
}

export default Hero