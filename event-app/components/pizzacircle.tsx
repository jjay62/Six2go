'use client'
import { motion, easeOut } from 'motion/react'

const PizzaCircle = () => {
  return (
    <motion.div initial={{ opacity: 0, x: -300 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 2, ease: easeOut }} viewport={{ once: true }}>
    <div className="flex flex-col md:flex-row items-center gap-20">
      <motion.div className="shrink-0 rounded-full overflow-hidden shadow-lg w-90 h-90">
        <motion.img src="/pizzacircle.webp" alt="" className="w-full h-full object-cover animate-spin-slow" />
      </motion.div>
    </div>
    </motion.div>
  )
}

export default PizzaCircle;
