"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface TextSectionProps {
  title: string
  blocks: string[]
  color: "blue" | "red" | "orange"
}

const colorClasses = {
  blue: "border-blue-600 text-blue-950",
  red: "border-red-600 text-red-950",
  orange: "border-orange-600 text-orange-950",
}

export default function TextSection({ title, blocks, color }: TextSectionProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  return (
    <section
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t-4"
      style={{
        borderTopColor: color === "blue" ? "#1A2A6C" : color === "red" ? "#D72638" : "#F46036",
      }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className={`text-4xl sm:text-5xl font-light mb-12 pb-6 border-b-4 ${colorClasses[color]}`}
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h2>

        <div className="space-y-6">
          {blocks.map((block, index) => (
            <motion.p
              key={index}
              className="text-lg leading-relaxed text-gray-800"
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              {block}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  )
}
