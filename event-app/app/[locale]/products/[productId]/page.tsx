import React from 'react'
import { notFound } from 'next/navigation'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { createClient } from '@/app/[locale]/lib/server'
import BigAddToCartBtn from '@/components/bigAddToCartBtn'
import { getLocale, getTranslations } from 'next-intl/server'

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>
}) {
  const productIdParam = (await params).productId
  const idNum = Number(productIdParam)
  if (!Number.isFinite(idNum)) notFound()

  const supabase = await createClient()
  const { data: product, error } = await supabase
    .from('menu_items')
    .select('*')
    .eq('id', idNum)
    .single()

  if (error || !product) notFound()

  const t = await getTranslations('ProductDetail')
  const price = Number(product.price ?? 0)
  const locale = await getLocale()
  return (
    <>
      <Header />
      <div className="flex items-center justify-center gap-40 mb-24">
        <img
          src={product.image ?? ''}
          alt=""
          className="h-96 w-lg rounded-lg mt-30"
        />
        <div className="flex flex-col items-center justify-center mt-28 ">
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-white/80 mb-8 border-b border-white/20 pb-2 ">
            {t('category')} &nbsp; {product.categories} {t('reviews')}
          </p>
          <p className="text-white/80 mb-4">
            {locale === 'nl' ? (product.desc_nl ?? product.desc) : product.desc}
          </p>
          <p className="text-white/90 font-bold text-2xl mb-8">
            €{price.toFixed(2)}{' '}
            {product.oldprice === 0 ? null :(
              <span className="text-white/50 line-through">
                €{Number(product.oldprice).toFixed(2)} 
              </span>)}
          </p>
          <p className="text-white/70 mb-10 ">
            {product.stock <= 0 ? t('outOfStock') : `${t('leftInStock')}`}
          </p>
          <div>
            <BigAddToCartBtn
              menuItemId={product.id}
              disabled={product.stock <= 0}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
