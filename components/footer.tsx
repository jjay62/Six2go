import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
    
    <footer className="border-t border-white/20 px-6 py-8 mt-auto text-white ">
      <div className="max-w-7xl mx-auto flex flex-row flex-wrap gap-6 sm:gap-12 justify-between">
        <section>
          <h3 className="font-semibold text-sm uppercase tracking-wider text-white/80 mb-3">Site Map</h3>
          <nav className="flex flex-col gap-2">
            <Link href="/home" className="text-white hover:text-blue-500 hover:underline">Home</Link>
            <Link href="/menu" className="text-white hover:text-blue-500 hover:underline">menu</Link>
            <Link href="/about" className="text-white hover:text-blue-500 hover:underline">About</Link>
            <Link href="/login" className="text-white hover:text-blue-500 hover:underline">Login / Sign up</Link>
          </nav>
        </section>
        <section>
          <h3 className="font-semibold text-sm uppercase tracking-wider text-white/80 mb-3">Contact</h3>
          <div className="flex flex-col gap-1 text-sm">
            <a href="mailto:jayklav62@gmail.com" className="text-white hover:text-blue-600 hover:underline">jayklav62@gmail.com</a>
            <span><a href="tel:+310633376647" className="text-white hover:text-blue-600 hover:underline">(+31) 0633376647</a></span>
          </div>
        </section>
        <section>
          <h3 className="font-semibold text-sm uppercase tracking-wider text-white/80 mb-3">Legal</h3>
          <Link href="/privacy" className="text-white hover:text-blue-600 hover:underline">Privacy Policy</Link>
        </section>
      </div>
    </footer>
    <p className="text-center text-white/60 text-sm">made by ❤️ jay62.</p>
    </>
  )
}

export default Footer;