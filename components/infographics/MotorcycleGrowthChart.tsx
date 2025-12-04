"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const data = [
  { year: 2020, value: 58976 },
  { year: 2021, value: 58976 },
  { year: 2022, value: 58976 },
  { year: 2023, value: 58976 },
  { year: 2024, value: 58976 + 93900 },
  { year: 2025, value: 58976 + 93900 },
]

export default function MotorcycleGrowthChart() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  })

  const maxValue = Math.max(...data.map((d) => d.value))

  return (
    <div ref={ref} className="w-full bg-white p-8 rounded-lg">
      <div className="flex items-end justify-between space-x-2 h-96">
        {data.map((item, i) => (
          <motion.div
            key={item.year}
            className="flex-1 flex flex-col items-center space-y-2"
            initial={{ height: 0 }}
            animate={inView ? { height: "auto" } : {}}
            transition={{ delay: i * 0.15, duration: 0.8 }}
          >
            {/* Bar */}
            <motion.div
              className="w-full bg-gradient-to-t from-orange-500 to-red-500 rounded-t-lg relative group"
              style={{ height: `${(item.value / maxValue) * 300}px` }}
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ delay: i * 0.15 + 0.2, duration: 0.8 }}
              origin="bottom"
            >
              {/* Hover Value */}
              <motion.div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition">
                {item.value.toLocaleString("pt-BR")}
              </motion.div>
            </motion.div>

            {/* Year Label */}
            <motion.p
              className="text-sm font-semibold text-gray-700"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: i * 0.15 + 0.4 }}
            >
              {item.year}
            </motion.p>
          </motion.div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-12 text-center">
        <p className="text-sm text-gray-600">Quantidade de motocicletas emplacadas por ano em Pernambuco</p>
      </div>
    </div>
  )
}
