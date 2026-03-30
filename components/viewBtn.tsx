import React from 'react'
import Link from 'next/link'
const viewBtn = ({ menuItemId }: { menuItemId: number }) => {
  return (
    <>
    <button 
    className='rounded-md bg-blue-800 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-950 hover:scale-105'>
    <Link href={`/products/${menuItemId}`}>
        View Details
    </Link>
    </button>
    </>
  )
}

export default viewBtn