"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const cyclistData = [
  { type: "Ciclistas Mortos", value: "Alto", color: "bg-red-500", icon: "💀" },
  { type: "Feridos Graves", value: "Crescente", color: "bg-orange-500", icon: "🤕" },
  { type: "Subnotificação", value: "Significativa", color: "bg-yellow-500", icon: "📊" },
  { type: "Insegurança Percebida", value: "Muito Alta", color: "bg-red-600", icon: "⚠️" },
]

export default function CyclistsChart() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  })

  return (
    <div ref={ref} className="w-full space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {cyclistData.map((item, i) => (
          <motion.div
            key={i}
            className={`${item.color} text-white rounded-lg p-6`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{item.type}</h3>
            <p className="text-white/90">{item.value}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-600 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <h3 className="text-lg font-bold text-blue-900 mb-4">Realidades do Ciclista</h3>
        <ul className="space-y-3 text-gray-800">
          <li className="flex items-start space-x-3">
            <span className="text-blue-600 font-bold">•</span>
            <span>Desrespeito de motoristas e invasão frequente de ciclofaixas</span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-blue-600 font-bold">•</span>
            <span>Falta de iluminação, sinalização e fiscalização adequadas</span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-blue-600 font-bold">•</span>
            <span>Ciclovias desconectadas que não formam uma rede coesa</span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-blue-600 font-bold">•</span>
            <span>Medo e vulnerabilidade especialmente em horários noturnos</span>
          </li>
        </ul>
      </motion.div>
    </div>
  )
}
