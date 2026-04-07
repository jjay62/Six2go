import React from 'react'
import { getTranslations } from 'next-intl/server'
import PizzaCircle from './pizzacircle'
import AboutSmallText from './aboutsmalltext'
const AboutSection = async () => {
  const t = await getTranslations('AboutSection')
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-12 px-4 py-12 md:flex-row md:items-center md:gap-16">
      <div className="flex shrink-0 justify-center">
        <PizzaCircle />
      </div>
      <AboutSmallText title={t('title')} description={t('description')} createdBy={t('createdBy')} learnMore={t('learnMore')} href="/about" />
    </section>
  )
}

export default AboutSection
