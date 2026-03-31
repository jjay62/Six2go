"use client";
import React, { useState } from 'react';
import BtnSM from './btnsm';
import FoodItem from './fooditem';

type Category = 'Our choices' | 'Meal Deals' | 'Burgers' | 'Pizzas' | 'Pastas'| 'Desserts' | 'Drinks';

const categories: Category[] = [
  'Our choices', 'Meal Deals', 'Burgers', 'Pizzas', 'Pastas', 'Desserts', 'Drinks',
];


interface MenuItem {
  id: number;
  title: string;
  desc: string;
  image: string;
  price: number;
  stock: number;
  categories: string[];
}

interface SmallMenuProps {
  items: MenuItem[];
}
const ids = [1, 4, 6, 7, 10, 11, 17, 21]
const SmallMenu = ({ items }: SmallMenuProps) => {
  const [filter, setFilter] = useState<Category>('Our choices');

  const filtered = filter === 'Our choices'
    ? ids.map((id) => items.find((item) => item.id === id)).filter(Boolean) as MenuItem[]
    : items.filter((item) => {
        return item.categories.some((category) => category.toLowerCase() === filter.toLowerCase());
      });

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 justify-center items-center text-center">
      <h2 className="text-2xl font-bold text-white mb-2">Our dishes</h2>
      <p className="text-gray-300 mb-6">
        Explore our favourite dishes, made with love and care.
      </p>

      
      <div className="flex flex-wrap gap-3 mb-12 justify-center items-center text-center">
        {categories.map((category) => (
          <BtnSM
            key={category}
            active={filter === category}
            onClick={() => setFilter(category)}
          >
            {category}
          </BtnSM>
        ))}
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 min-h-[400px] content-start space-y-4">
        {filtered.map((item) => (
          <FoodItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default SmallMenu;
