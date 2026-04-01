import React from 'react'
import { getTranslations } from 'next-intl/server'

const TopChoices = async () => {
  const t = await getTranslations('TopChoices')
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 mt-20 text-center justify-center items-center ">
    <h1 className="text-4xl font-bold mb-16">{t('title')}</h1>
    <p className='mb-10'>{t('description')}</p>
    </div>
  )
}

export default TopChoices
