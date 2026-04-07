'use client'
import React from 'react'
import Atropos from 'atropos/react'
import '@/components/atropos.css'

interface CardProps {
  title: string
  desc: string
  id?: number
  icon?: React.ReactNode
}

const Card = ({ title, desc, id, icon }: CardProps) => {
  return (
<Atropos
  data-atropos-offset="2"
  className="
    atropos-card
    rounded-lg
    transition-all duration-200
    hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]
  "
>
  <div
    className="
      flex flex-col justify-center items-center text-center gap-2
      rounded-lg
      border-2 border-white/20
      px-8 py-10 min-w-[220px] max-w-[260px] aspect-[3/4] min-h-[280px]
      bg-gray-900 text-white cursor-pointer
      transition-all duration-200
      hover:scale-105
      hover:border-blue-500
    "
  >
    {icon && icon}
    <h2>{title}</h2>
    <hr className="w-full border-white/20 my-4" />
    <p>{desc}</p>
  </div>
</Atropos>
  )
}

export default Card