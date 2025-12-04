"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function CyclePathMap() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  })

  const areas = [
    { name: "Centro", coverage: 85, connected: true },
    { name: "Zona Oeste", coverage: 45, connected: false },
    { name: "Zona Sul", coverage: 60, connected: false },
    { name: "Zona Norte", coverage: 35, connected: false },
    { name: "Olinda", coverage: 50, connected: false },
    { name: "Jaboatão", coverage: 40, connected: false },
  ]

  return (
    <div ref={ref} className="w-full space-y-8">
      {/* Info Header */}
      <motion.div
        className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="text-gray-800">
          O Recife possui 191,5 km de rotas cicloviárias até 2024, mas muitos trechos permanecem desconectados, com
          ciclofaixas pintadas em vez de ciclovias fisicamente separadas.
        </p>
      </motion.div>

      {/* Coverage by Area */}
      <div className="space-y-4">
        {areas.map((area, i) => (
          <motion.div
            key={i}
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.1 }}
          >
            <div className="min-w-fit w-32">
              <p className="font-semibold text-gray-900">{area.name}</p>
              <p className="text-xs text-gray-600">{area.connected ? "✓ Conectado" : "✗ Desconectado"}</p>
            </div>

            {/* Progress Bar */}
            <motion.div className="flex-1 bg-gray-200 rounded-full h-6 overflow-hidden">
              <motion.div
                className={`h-full ${area.connected ? "bg-green-500" : "bg-red-500"}`}
                initial={{ width: 0 }}
                animate={inView ? { width: `${area.coverage}%` } : {}}
                transition={{ delay: i * 0.1 + 0.2, duration: 0.8 }}
              />
            </motion.div>

            <div className="min-w-fit text-right">
              <p className="font-bold text-gray-900">{area.coverage}%</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Key Issues */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.6 }}
      >
        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-600">
          <h4 className="font-bold text-red-900 mb-2">Desconexão</h4>
          <p className="text-sm text-red-800">Ciclovias fragmentadas que não conectam pontos-chave</p>
        </div>

        <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-600">
          <h4 className="font-bold text-orange-900 mb-2">Qualidade Baixa</h4>
          <p className="text-sm text-orange-800">Ciclofaixas pintadas em vez de ciclovias protegidas</p>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-600">
          <h4 className="font-bold text-yellow-900 mb-2">Periferias Negligenciadas</h4>
          <p className="text-sm text-yellow-800">Cobertura menor nas zonas oeste e norte</p>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
          <h4 className="font-bold text-purple-900 mb-2">Falta de Integração</h4>
          <p className="text-sm text-purple-800">Sem conexão efetiva com transporte público</p>
        </div>
      </motion.div>
    </div>
  )
}
