import React from 'react'
import { getTranslations } from 'next-intl/server'

export default async function Faqsection() {
  const t = await getTranslations('Faq')
  return (
    <div className="mb-8 justify-center items-center w-5xl mx-auto">
    <h2 className="text-xl font-semibold text-center mb-6">{t('title')}</h2>
    <div className="space-y-4 text-white/90">
      <details className="rounded-lg border border-white/20 bg-gray-900 p-4">
        <summary className="cursor-pointer font-medium">{t('q1')}</summary>
        <p className="mt-2 text-white/70">{t('a1')}</p>
      </details>
      <details className="rounded-lg border border-white/20 bg-gray-900 p-4">
        <summary className="cursor-pointer font-medium">{t('q2')}</summary>
        <p className="mt-2 text-white/70">{t('a2')}</p>
      </details>
      <details className="rounded-lg border border-white/20 bg-gray-900 p-4">
        <summary className="cursor-pointer font-medium">{t('q3')}</summary>
        <p className="mt-2 text-white/70">{t('a3')}</p>
      </details>
      <details className="rounded-lg border border-white/20 bg-gray-900 p-4">
        <summary className="cursor-pointer font-medium">{t('q4')}</summary>
        <p className="mt-2 text-white/70">{t('a4')}</p>
      </details>
      <details className="rounded-lg border border-white/20 bg-gray-900 p-4">
        <summary className="cursor-pointer font-medium">{t('q5')}</summary>
        <p className="mt-2 text-white/70">{t('a5')}</p>
      </details>
    </div>
  </div>
  )
}
