import React from 'react'
import Header from '@/components/header';
import Footer from '@/components/footer';
import { supabase } from '@/app/lib/supabase';
import BigAddToCartBtn from '@/components/bigAddToCartBtn';
export default async function ProductDetails ({
  params,
}: {
  params: Promise<{ productId: string }>
}) {
  const productId = (await params).productId;
  const { data: product } = await supabase
    .from('menu_items')
    .select('*')
    .eq('id', productId)
    .single();
  return (
    <>
      <Header />
    <div className="flex flex-col-2 items-center justify-center gap-40">
      <img src={product?.image} alt="" className="h-96 w-lg rounded-lg mt-30" />
      <div className="flex flex-col items-center justify-center mt-28 ">
      <h1 className="text-3xl font-bold mb-2">{product?.title}</h1>
      <p className="text-white/80 mb-8 border-b border-white/20 pb-2 ">Item category: &nbsp; {product?.categories} | reviews: ⭐⭐⭐⭐⭐</p>
      <p className="text-white/80 mb-4">{product?.desc}</p>
      <p className="text-white/90 font-bold text-2xl mb-8">€{product?.price.toFixed(2)} {product?.oldprice ? <span className="text-white/50 line-through">€{product.oldprice.toFixed(2)}</span> : ''}</p>
      <p className="text-white/70 mb-10 ">{product?.stock <= 0 ? 'Out of stock' : `${product?.stock} left in stock`}</p>
      <div>
      <BigAddToCartBtn menuItemId={product?.id} disabled={product?.stock <= 0} />
      </div>
    </div>
    </div>
    <Footer />
    </>
  )
}

