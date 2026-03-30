import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>

    <div className='flex justify-center items-center text-bold text-1xl tracking-widest bg-blue-900 py-1.5'>
    <h3 className='scrolling-text'>NOW ALL DESSERTS ARE €6,50</h3>
    
  </div>
<div className="border-b border-white/20 px-6 py-4 text-white ">
  <div className="grid grid-cols-3 items-center max-w-7xl mx-auto">
    <Link href="/" className="flex items-center w-fit" aria-label="logo">
    <p className=" text-4xl font-bold text-[#2992CF] ">six2go</p>
    </Link>
    <nav className="flex gap-10 justify-center">
      <Link href="/" className="text-white hover:text-blue-800 text-lg hover:underline">Home</Link>
      <Link href="/menu" className="text-white hover:text-blue-800 text-lg hover:underline">Menu</Link>
      <Link href="/about" className="text-white hover:text-blue-800 text-lg hover:underline">About</Link>
    </nav>
    <div />
  </div>
</div>
</>
  );
};

export default Header