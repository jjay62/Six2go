'use client'
import { Link } from '@/i18n/navigation'
import React from 'react'
import { easeOut, motion } from 'motion/react'
const AboutSmallText = ({ href, title, description, createdBy, learnMore }: { href: string, title: any, description: string, createdBy: string, learnMore: string }) => {
  return (
    <motion.div initial={{ opacity: 0, x: 300 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 2, ease: easeOut }} viewport={{ once: true }}>
    <div className="flex min-w-0 w-full max-w-xl justify-center md:justify-start">
    <div className="w-full rounded-lg border border-gray-700 bg-gray-900 px-12 py-12 text-center text-white md:text-left">
      <h2 className="mb-8 text-2xl font-bold">{title}</h2>
      <p className="mb-6 leading-relaxed text-gray-200">
        {description}
        <br />
        <br />
        {createdBy}
      </p>
      <Link
        href={href}
        className="inline-block rounded-md bg-blue-900 p-3 text-sm text-white transition-all duration-200 hover:scale-105 hover:bg-blue-950"
      >
        {learnMore}
      </Link>
    </div>
    </div>
    </motion.div>
  )
}

export default AboutSmallText