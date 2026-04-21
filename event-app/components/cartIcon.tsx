'use client' 
import Link from "next/link";
import { ShoppingCartIconHeader } from "./icons";
import { motion } from "framer-motion"; // Removed 'scale' from import, it's not needed there
import { useState } from "react";

export function CartIcon({ totalItems }: { totalItems: number }) {
  // Use state so React knows to update when the rotation changes
  const [rotation, setRotation] = useState(0);

  return (
    <Link
      href="/checkout"
      className="relative inline-block rounded-md"
    >
      <motion.div 
        // Logic and Animation on the same element
        onHoverStart={() => {
          const newRotation = Math.floor(Math.random() * 15 - 7.5);
          console.log(newRotation);
          setRotation((newRotation));
        }} 
        onHoverEnd={() => {
          setRotation(0);
        }}
        whileHover={{ 
          rotate: rotation, 
          scale: 1.1, 
          transition: { duration: 0.1 } 
        }} 
        whileTap={{ 
          scale: 0.9, 
          transition: { duration: 0.1 } 
        }}
      >
        <ShoppingCartIconHeader />
      </motion.div>

      {totalItems > 0 && (
        <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
          {totalItems > 99 ? "99+" : totalItems}
        </span>
      )}
    </Link>
  );
}