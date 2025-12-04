"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const rideStages = [
  { period: "2022", rides: 20000, label: "20K" },
  { period: "Início 2024", rides: 40000, label: "40K" },
  { period: "Hoje", rides: 50000, label: "50K" },
]

export default function RidesChart() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  })

  return (
    <div ref={ref} className="w-full space-y-8">
      {rideStages.map((stage, i) => (
        <motion.div
          key={i}
          className="flex items-center space-x-4"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: i * 0.2, duration: 0.6 }}
        >
          {/* Bar */}
          <motion.div
            className="flex-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full h-20 relative overflow-hidden flex items-center px-6"
            initial={{ width: 0 }}
            animate={inView ? { width: "100%" } : {}}
            transition={{ delay: i * 0.2 + 0.2, duration: 0.8 }}
          >
            <motion.span
              className="text-white font-bold text-2xl"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: i * 0.2 + 0.6 }}
            >
              {stage.label}
            </motion.span>
          </motion.div>

          {/* Label */}
          <div className="min-w-fit text-right">
            <p className="font-bold text-gray-900">{stage.period}</p>
            <p className="text-sm text-gray-600">{stage.rides.toLocaleString("pt-BR")} corridas/dia</p>
          </div>
        </motion.div>
      ))}

      <motion.div
        className="mt-8 p-6 bg-orange-50 rounded-lg border-l-4 border-orange-500"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
      >
        <p className="text-gray-800 text-sm">
          Crescimento de ~50% em apenas dois anos no estado, impulsionado pela expansão dos serviços de entrega e
          transporte de passageiros.
        </p>
      </motion.div>
    </div>
  )
}
