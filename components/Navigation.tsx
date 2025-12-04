"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-200"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div className="text-2xl font-light text-blue-950" whileHover={{ scale: 1.05 }}>
            Mobilidade RMR
          </motion.div>

          <motion.button className="text-gray-600 hover:text-blue-600 transition" whileHover={{ scale: 1.1 }}>
            ☰
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}
