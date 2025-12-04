"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const stations = [
  {
    time: "5:50",
    location: "Camaragibe",
    description: "Partida de casa",
    icon: "🏠",
  },
  {
    time: "6:10",
    location: "Estação Camaragibe",
    description: "Embarque no metrô",
    icon: "🚇",
  },
  {
    time: "7:20",
    location: "Estação Recife",
    description: "1h10 no metrô espremida",
    icon: "📍",
  },
  {
    time: "7:40",
    location: "Cais de Santa Rita",
    description: "20 min de ônibus lotado",
    icon: "🚌",
  },
  {
    time: "7:45",
    location: "Novo Hotel",
    description: "Chegada ao trabalho",
    icon: "💼",
  },
  {
    time: "12:45",
    location: "Volta para Casa",
    description: "Intervalo para casa",
    icon: "↩️",
  },
  {
    time: "14:15",
    location: "Estação Camaragibe",
    description: "Retorno à faculdade",
    icon: "📚",
  },
  {
    time: "18:30",
    location: "Universidade São Miguel",
    description: "Aulas de Enfermagem",
    icon: "🎓",
  },
  {
    time: "23:00",
    location: "Alberto Maia",
    description: "Chegada em casa",
    icon: "🌙",
  },
]

export default function MetroTimeline() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  return (
    <div ref={ref} className="relative py-12">
      {/* Center Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-red-600 to-orange-600 transform -translate-x-1/2"></div>

      {/* Stations */}
      <div className="space-y-12">
        {stations.map((station, index) => (
          <motion.div
            key={index}
            className={`flex items-center ${index % 2 === 0 ? "flex-row-reverse" : "flex-row"}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            {/* Content */}
            <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
              <motion.div
                className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-blue-600 transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-2xl font-bold text-blue-600 mb-2">{station.time}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{station.location}</h3>
                <p className="text-gray-600">{station.description}</p>
              </motion.div>
            </div>

            {/* Center Node */}
            <div className="w-0 flex justify-center">
              <motion.div
                className="w-16 h-16 rounded-full bg-white border-4 border-blue-600 flex items-center justify-center text-2xl shadow-lg z-10"
                animate={inView ? { scale: [1, 1.2, 1] } : {}}
                transition={{
                  delay: index * 0.1 + 0.3,
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              >
                {station.icon}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
