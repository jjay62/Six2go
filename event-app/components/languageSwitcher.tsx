import { useLocale } from 'next-intl'
import Link from 'next/link'
import React from 'react'

const LanguageSwitcher = () => {
  return (
    <div className="flex flex-row gap-8 mr-8 ml-18">          
    { useLocale() === 'nl' && (
      <>
      <Link href="/en" className="text-white hover:text-blue-500 text-lg hover:underline"><img src="/eng.png" alt="English" className="w-10 h-6" /></Link>
      </>
    )}
    { useLocale() === 'en' && (
      <>
      
      <Link href="/nl" className="text-white hover:text-blue-500 text-lg hover:underline"><img src="/nl.png" alt="Nederlands" className="w-10 h-6" /></Link>
      </>
    )}</div>
  )
}

export default LanguageSwitcher