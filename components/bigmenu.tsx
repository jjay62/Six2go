"use client";
import React, { useState } from 'react';
import FoodItem from './fooditem';
import BtnSM from './btnsm';
type Category = 'All' | 'Meal Deals' | 'Burgers' | 'Sides'| 'Pizzas' | 'Pastas'| 'Desserts' | 'Drinks';

const categories: Category[] = [
  'All', 'Meal Deals', 'Burgers', 'Pizzas', 'Sides', 'Pastas', 'Desserts', 'Drinks',
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

interface BigMenuProps {
  items: MenuItem[];
}
const ProductsPerPage = 8;
const BigMenu = ({ items }: BigMenuProps) => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState<Category>('All');
  const filtered = filter === 'All'
    ? items
    : items.filter((item) => {
        const categories = item.categories;
        return categories.some((category) => category.toLowerCase() === filter.toLowerCase());
      });
  const totalPages = Math.ceil(filtered.length / ProductsPerPage);
  const paged = filtered.slice((page - 1) * ProductsPerPage, page * ProductsPerPage);

  return (
    <>
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
            onClick={() => {setFilter(category); setPage(1);}}
          >
            {category}
          </BtnSM>
        ))}
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 min-h-[400px] content-start space-y-4">
        {paged.map((item) => (
          <FoodItem key={item.id} {...item} />
        ))}
      </div>
      {totalPages > 1 && (
  <div className="flex justify-center items-center gap-4 mt-8">
    <button
      onClick={() => setPage((page) => page - 1)}  
      disabled={page <= 1}
      className="px-4 py-2 bg-blue-900 text-white rounded-md
        disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-950"
    >
      Previous
    </button>
    <span>Page {page} of {totalPages}</span>
    <button
      onClick={() => setPage((page) => page + 1)}
      disabled={page >= totalPages}
      className="px-4 py-2 bg-blue-900 text-white rounded-md
        disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-950"
    >
      Next
    </button>
  </div>
)}
    </section>
    </>
  );
};

export default BigMenu;