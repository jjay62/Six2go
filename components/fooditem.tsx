import React from 'react'
import { ShoppingCartIcon } from './icons';

interface FoodItemProps {
  id: number;
  title: string;
  desc: string;
  image: string;
  price: string;
  stock: number;
  categories: string[];
}

const FoodItem = ({ id, title, desc, image, price, stock }: FoodItemProps) => {
  return (

    <div className="bg-gray-900 rounded-lg text-white border border-transparent hover:border-gray-600 hover:shadow-lg transition-all duration-200 cursor-pointer overflow-hidden flex flex-col h-[360px] w-full text-center">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4 flex flex-col gap-2 flex-1 overflow-hidden">
        <h2 className="text-lg font-bold text-center truncate ">{title}</h2>
        <p className="text-white/90 text-sm line-clamp-2">{desc}</p>
        <div className="mt-auto flex flex-col gap-2">
          <p className="font-semibold text-center">{price}</p>
          <div className="grid grid-cols-2 gap-2">
          <button disabled={stock <= 0} className={`w-30 h-10 shrink-0 inline-flex items-center justify-center gap-1 rounded-md text-sm font-bold ${stock <= 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} text-white`}>Add to Cart <ShoppingCartIcon /></button>
          <button className="w-30 h-10 shrink-0 bg-blue-900 text-white rounded-md text-sm hover:bg-blue-950">view details</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default FoodItem
