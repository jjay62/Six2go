import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import React from "react"
import Image from "next/image"
import { getTranslations } from 'next-intl/server'

export default async function NotFoundPage() {
  const t = await getTranslations('NotFound')
  return(
    <>
    <Header />
    <div className="flex flex-col items-center justify-center mt-30 mb-40">
        <Image src="/logooooo.png" alt="six2go" width={200} height={10}/>
        <h1 className="text-3xl font-bold mt-10 mb-4">{t('title')}</h1>
        <p className="text-lg mb-10">{t('description')}</p>
        <Link href="/" className="text-blue-500 hover:text-blue-700 hover:underline">{t('backToHome')}</Link>
    </div>
    <Footer />
    </>
  )
}
