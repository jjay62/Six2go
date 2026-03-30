import React from 'react'
import { ShoppingCartIcon } from './icons';
import AddToCartBtn from './addToCartBtn';
import ViewBtn from './viewBtn';
import { addToCart } from '@/app/actions/cart';

interface FoodItemProps {
  id: number;
  title: string;
  desc: string;
  image: string;
  price: number;
  stock: number;
  categories: string[];
  oldprice?: number;
}

const FoodItem = ({ id, title, desc, image, price, stock, oldprice }: FoodItemProps) => {
  return (
<>
    <div className="bg-gray-900 rounded-lg text-white border border-transparent hover:border-gray-600 hover:shadow-lg transition-all duration-200 cursor-pointer overflow-hidden flex flex-col h-[360px] w-full text-center">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4 flex flex-col gap-2 flex-1 overflow-hidden">
        <h2 className="text-lg font-bold text-center truncate ">{title}</h2>
        <p className="text-white/90 text-sm line-clamp-2">{desc}</p>
        <div className="mt-auto flex flex-col gap-2">
          <p className="font-semibold text-center tracking-wide">€{price.toFixed(2)}</p>
          <div className="grid grid-cols-2 gap-2">
          <AddToCartBtn menuItemId={id} disabled={stock <= 0} />
          <ViewBtn menuItemId={id} />
          
          </div>
        </div>
      </div>
    </div>
</>
  )
}

export default FoodItem
