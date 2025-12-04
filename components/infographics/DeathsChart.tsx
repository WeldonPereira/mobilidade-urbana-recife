"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function DeathsChart() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  const deaths = 693;
  const victims = 31265;
  const deathsPerDay = Math.round(deaths / 365);
  const victimsPerDay = Math.round(victims / 365);

  return (
    <div ref={ref} className="w-full space-y-12">
      {/* Deaths per Day */}
      <motion.div
        className="bg-red-50 p-8 rounded-lg border-l-4 border-red-600"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div>
            <p className="text-gray-600 text-sm font-semibold mb-2">
              MORTES POR DIA EM 2023
            </p>
            <p className="text-5xl font-bold text-red-600">
              {deathsPerDay}
            </p>
          </div>

          <div className="mt-6 sm:mt-0 flex space-x-1 flex-wrap justify-center sm:justify-end">
            {Array.from({ length: Math.min(deathsPerDay, 3) }).map((_, i) => (
              <motion.div
                key={i}
                className="text-5xl"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.2 }}
              >
                💀
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Total Victims */}
      <motion.div
        className="bg-white border-2 border-red-300 p-8 rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <p className="text-gray-600 text-sm font-semibold mb-4">
          TOTAL DE VÍTIMAS EM 2023
        </p>
        <div className="text-5xl font-bold text-red-600 mb-4">
          {victims.toLocaleString("pt-BR")}
        </div>

        <motion.div
          className="w-full bg-gray-200 rounded-full h-2 overflow-hidden"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          origin="left"
        >
          <motion.div
            className="bg-red-600 h-full"
            initial={{ width: 0 }}
            animate={inView ? { width: "100%" } : {}}
            transition={{ delay: 0.6, duration: 1 }}
          ></motion.div>
        </motion.div>

        <p className="text-gray-600 text-sm mt-4">
          Aumento de aproximadamente 13,6% em relação ao ano anterior
        </p>
      </motion.div>

      {/* Daily Victims */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.4 }}
      >
        <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
          <p className="text-gray-600 text-sm font-semibold mb-2">
            LEVADAS A HOSPITAIS POR DIA
          </p>
          <p className="text-4xl font-bold text-orange-600">~20</p>
          <p className="text-sm text-gray-600 mt-2">
            Lotando leitos de urgência e traumatologia
          </p>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <p className="text-gray-600 text-sm font-semibold mb-2">
            VÍTIMAS FATAIS
          </p>
          <p className="text-4xl font-bold text-yellow-600">43%</p>
          <p className="text-sm text-gray-600 mt-2">
            Das mortes no trânsito do Recife em 2024
          </p>
        </div>
      </motion.div>

      {/* NEW — 693 skulls (Mortes por Ano) */}
      <motion.div
        className="bg-red-100 p-8 rounded-lg border-l-4 border-red-700 shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <h3 className="text-xl font-bold text-red-800 mb-4">
          MORTES POR ANO EM 2023 — {deaths}
        </h3>

        <p className="text-gray-700 text-sm mb-4">
          Cada caveira representa uma vida perdida no trânsito.
        </p>

        <div className="grid grid-cols-15 gap-1">
          {Array.from({ length: deaths }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              animate={
                inView
                  ? {
                      scale: 1,
                      opacity: 1,
                    }
                  : {}
              }
              transition={{
                duration: 0.3,
                delay: i * 0.002, // efeito cascata suave
              }}
              className="text-[14px]"
            >
              💀
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
