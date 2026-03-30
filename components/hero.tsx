import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <>
<section className="relative min-h-[100vh] flex items-start pt-60 justify-center overflow-hidden">

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h1 className="text-4xl sm:text-7xl font-bold tracking-tight animate-color-shift text-[#2992CF]">
          six2go
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-[#2992CF]">
          Order what you want, when you want. Delivered to you.
        </p>
        <div className="mt-10 flex flex-row gap-4 justify-center items-center flex-wrap">
          <Link href="/menu" className="px-5 py-3 bg-[#2992CF] text-white rounded-md font-bold hover:bg-[#29709E] transition-all duration-200">
          Menu</Link>
        </div>
      </div>
      <video
    className="absolute inset-0 h-full w-full object-cover z-0 bg-black/40"
    autoPlay
    muted
    loop
    playsInline
    src="videos/herovideo.mp4"
  />
    </section>
  
   
    </>
  )
}

export default Hero