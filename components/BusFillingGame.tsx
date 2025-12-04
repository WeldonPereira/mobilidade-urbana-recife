"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function BusFillingGame() {
  const [passengers, setPassengers] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  })

  const maxPassengers = 50

  useEffect(() => {
    if (inView) {
      setIsVisible(true)
    }
  }, [inView])

  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      setPassengers((prev) => {
        if (prev < maxPassengers) {
          return prev + 1
        }
        return prev
      })
    }, 200)

    return () => clearInterval(interval)
  }, [isVisible])

  const addPassenger = () => {
    if (passengers < maxPassengers) {
      setPassengers((prev) => prev + 1)
    }
  }

  const fillPercentage = (passengers / maxPassengers) * 100

  return (
    <div ref={ref} className="max-w-4xl mx-auto space-y-8">
      {/* Bus Visualization */}
      <motion.div
        className="bg-yellow-400 rounded-full px-8 py-12 relative overflow-hidden shadow-2xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isVisible ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        {/* Wheels */}
        <div className="absolute -bottom-4 left-1/4 w-6 h-6 bg-gray-800 rounded-full"></div>
        <div className="absolute -bottom-4 right-1/4 w-6 h-6 bg-gray-800 rounded-full"></div>

        {/* Passengers inside */}
        <div className="grid grid-cols-10 gap-2 mb-6">
          {Array.from({ length: maxPassengers }).map((_, i) => (
            <motion.div
              key={i}
              className={`w-full aspect-square rounded-lg flex items-center justify-center text-lg ${
                i < passengers ? "bg-red-500 text-white" : "bg-gray-200 text-gray-400"
              }`}
              initial={{ scale: 0 }}
              animate={i < passengers ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: i * 0.03 }}
            >
              👤
            </motion.div>
          ))}
        </div>

        {/* Capacity Bar */}
        <div className="w-full bg-gray-200 rounded-full h-4 mb-4 overflow-hidden">
          <motion.div
            className="bg-gradient-to-r from-red-500 to-orange-500 h-full"
            initial={{ width: 0 }}
            animate={{ width: `${fillPercentage}%` }}
            transition={{ duration: 0.3 }}
          ></motion.div>
        </div>

        <div className="text-center text-lg font-bold text-gray-800">
          {passengers}/{maxPassengers} Passageiros ({Math.round(fillPercentage)}%)
        </div>
      </motion.div>

      {/* Full Status Message */}
      {passengers === maxPassengers && (
        <motion.div
          className="bg-red-100 border-l-4 border-red-600 p-6 rounded"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-red-800 font-semibold text-lg">
            ✓ Lotado — Situação diária de milhares de passageiros da RMR
          </p>
          <p className="text-red-700 mt-2">Essa é a realidade que Mirelly e tantos outros enfrentam todos os dias.</p>
        </motion.div>
      )}

      {/* Add Passenger Button */}
      <div className="flex justify-center">
        <motion.button
          onClick={addPassenger}
          disabled={passengers === maxPassengers}
          className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
          whileHover={{ scale: passengers === maxPassengers ? 1 : 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Adicionar Passageiro
        </motion.button>
      </div>
    </div>
  )
}
