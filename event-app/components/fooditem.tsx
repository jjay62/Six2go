'use client'
import { easeOut, motion } from 'motion/react';
import React from 'react'
import AddToCartBtn from './addToCartBtn'
import ViewBtn from './viewBtn';
import { useLocale } from 'next-intl';
import Link from 'next/link';
interface FoodItemProps {
  id: number
  title: string
  desc: string
  desc_nl?: string | null
  image: string
  price: number
  stock: number
  categories: string[]
  oldprice?: number
}
const FoodItem = ({
  id,
  title,
  desc,
  image,
  price,
  stock,
  oldprice,
  desc_nl,
}: FoodItemProps) => {
  const locale = useLocale()
  const description = locale === 'nl' ? (desc_nl ?? desc) : desc
  return (
<>
  
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0, transition: { duration: 1, ease: easeOut }}} whileHover={{ scale: 1.05, transition: { duration: 0.2 } }} whileTap={{ scale: 0.95, transition: { duration: 0.2 } }} viewport={{ once: true }}>
      <div className="bg-gray-900 rounded-lg text-white border border-transparent hover:border-gray-600 hover:shadow-lg transition-all duration-200 cursor-pointer overflow-hidden flex flex-col h-[360px] w-full text-center">
        <Link href={`/products/${id}`}>
        <img src={image} alt={""} className="w-full h-40 object-cover" />
        </Link>
      <div className="p-4 flex flex-col gap-2 flex-1 overflow-hidden"> 
        <Link href={`/products/${id}`}>
        <h2 className="text-lg font-bold text-center truncate ">{title}</h2>
        </Link>
        <Link href={`/products/${id}`}>
        <p className="min-h-[42px] text-white/90 text-sm line-clamp-2">{description}</p>
        </Link>
        <Link href={`/products/${id}`}>
        <div className="mt-auto flex flex-col gap-2 text-center justify-center items-center">       
          <p className="font-semibold text-center tracking-wide">€{price.toFixed(2)}</p>        
          </div>
          </Link>
          <div className="mt-auto grid grid-cols-2 gap-2 text-center justify-center items-center">
          <AddToCartBtn menuItemId={id} disabled={stock <= 0} />
          <ViewBtn menuItemId={id} />
          </div>
          </div>
          </div> 
  </motion.div>

</>
  )
}

export default FoodItem
