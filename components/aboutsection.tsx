import React from 'react'
import Link from 'next/link'
const AboutSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center gap-40">
        <div className="shrink-0 rounded-full overflow-hidden shadow-lg w-90 h-90">
          <img
            src="/pizzacircle.webp"
            alt="Pizza"
            className="w-full h-full object-cover animate-spin-slow"
          />
        </div>
        <div className="flex-1 min-w-0 w-full text-center">
          <div className="bg-gray-900 text-white text-center rounded-lg px-8 py-12 max-w-xl mx-auto border border-gray-700">
            <h2 className="text-2xl font-bold mb-8">About six2go</h2>
            <p className="mb-6 text-gray-200 leading-relaxed">
              six2go's food was dreamed by many but never created until now. We are a small team of food lovers who are passionate about 
              food and we are here to bring you the best food experience you have ever had and will ever have.<br></br><br></br>created by: Jay62
            </p>
            <Link href="/about" className="bg-blue-900 text-white p-3 rounded-md text-sm hover:bg-blue-950">Learn more about us</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
