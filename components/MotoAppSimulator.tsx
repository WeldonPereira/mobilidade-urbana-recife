"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaClock,
  FaCouch,
  FaShieldAlt,
  FaMobileAlt,
  FaMoneyBill,
  FaMotorcycle,
  FaChartLine,
  FaBus,
} from "react-icons/fa";

export default function MotoAppSimulator() {
  const [requested, setRequested] = useState(false);
  const [arriving, setArriving] = useState(false);
  const [arrived, setArrived] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: false,
  });

  const handleRequest = () => {
    setRequested(true);
    setArriving(true);

    setTimeout(() => {
      setArriving(false);
      setArrived(true);
    }, 4000);
  };

  const handleReset = () => {
    setRequested(false);
    setArriving(false);
    setArrived(false);
  };

  return (
    <div ref={ref} className="max-w-2xl mx-auto">
      {/* PHONE FRAME */}
      <motion.div
        className="bg-black rounded-3xl shadow-2xl overflow-hidden border-8 border-gray-900 mx-auto max-w-sm"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        {/* SCREEN */}
        <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-4 min-h-screen flex flex-col">
          <div className="text-center mb-4 pt-2">
            <h2 className="text-xl font-bold text-gray-900">99 Moto</h2>
          </div>

          <AnimatePresence mode="wait">
            {/* STATE 1 — BEFORE REQUEST */}
            {!requested ? (
              <motion.div
                key="initial"
                className="flex-1 flex flex-col items-center justify-center space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="w-full bg-white rounded-lg h-48 relative border-2 border-gray-300 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center">
                    <div className="text-4xl">🗺️</div>
                  </div>

                  <motion.div
                    className="absolute bottom-4 right-4 text-3xl bg-red-500 w-10 h-10 rounded-full flex items-center justify-center"
                    animate={{
                      x: [0, -80, -160, -240],
                      y: [0, -30, 30, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                  >
                    🏍️
                  </motion.div>
                </div>

                <div className="text-center">
                  <p className="text-gray-700 font-semibold">
                    Solicite uma moto agora
                  </p>
                  <p className="text-sm text-gray-600">
                    Chegada estimada: <b>15 minutos</b>
                  </p>
                </div>

                <motion.button
                  onClick={handleRequest}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 rounded-lg text-lg transition"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  SOLICITAR MOTO
                </motion.button>
              </motion.div>
            ) : arriving ? (
              /* STATE 2 — ARRIVING */
              <motion.div
                key="arriving"
                className="flex-1 flex flex-col items-center justify-center space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="w-full bg-white rounded-lg h-48 relative border-2 border-gray-300 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center relative">
                    <motion.div
                      className="absolute text-4xl"
                      animate={{ x: [-200, 0], y: [100, 0] }}
                      transition={{ duration: 3 }}
                    >
                      🏍️
                    </motion.div>

                    <motion.div
                      className="absolute text-3xl"
                      animate={{ scale: [0.5, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    >
                      📍
                    </motion.div>
                  </div>
                </div>

                <motion.div
                  className="text-center"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <p className="text-lg font-bold text-gray-900">
                    Moto chegando em <b>15 minutos</b>
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Motociclista: João | 4.9 ⭐
                  </p>
                </motion.div>
              </motion.div>
            ) : (
              /* STATE 3 — ARRIVED */
              <motion.div
                key="arrived"
                className="flex-1 flex flex-col items-center justify-center space-y-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="text-6xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  ✓
                </motion.div>

                <div className="text-center">
                  <p className="text-xl font-bold text-gray-900">Moto Chegou!</p>
                  <p className="text-sm text-gray-600 mt-2">
                    Seu motociclista está aqui
                  </p>
                </div>

                <motion.button
                  onClick={handleReset}
                  className="w-full bg-gray-300 hover:bg-gray-400 text-gray-900 font-bold py-4 rounded-lg text-lg transition"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  RECOMEÇAR
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      <motion.div
        className="mt-12 w-full max-w-4xl mx-auto space-y-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* O SONHO */}
          <div className="bg-gradient-to-br bg-black rounded-xl p-6 shadow-xl">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">O Sonho</h3>

            <ul className="space-y-3 text-yellow-100 text-sm">
              <li className="flex items-center gap-2">
                <FaClock className="text-yellow-300" />
                <span>15 minutos de casa ao trabalho</span>
              </li>

              <li className="flex items-center gap-2">
                <FaCouch className="text-yellow-300" />
                <span>Conforto e espaço garantido</span>
              </li>

              <li className="flex items-center gap-2">
                <FaShieldAlt className="text-yellow-300" />
                <span>Segurança e pontualidade</span>
              </li>

              <li className="flex items-center gap-2">
                <FaMobileAlt className="text-yellow-300" />
                <span>Tecnologia e facilidade</span>
              </li>
            </ul>
          </div>

          {/* A REALIDADE */}
          <div className="bg-gradient-to-br bg-black rounded-xl p-6 shadow-xl">
            <h3 className="text-2xl font-bold text-red-300 mb-4">A Realidade</h3>

            <ul className="space-y-3 text-red-100 text-sm">
              <li className="flex items-center gap-2">
                <FaMoneyBill className="text-red-300" />
                <span>R$ 4–5 por corrida (caro para renda baixa)</span>
              </li>

              <li className="flex items-center gap-2">
                <FaChartLine className="text-red-300" />
                <span>~R$ 400–500/mês em motos</span>
              </li>

              <li className="flex items-center gap-2">
                <FaMotorcycle className="text-red-300" />
                <span>Motos causam 693 mortes/ano em PE</span>
              </li>

              <li className="flex items-center gap-2">
                <FaBus className="text-red-300" />
                <span>Transporte público ainda é necessário</span>
              </li>
            </ul>
          </div>
        </div>

        {/* QUESTÃO CENTRAL */}
        <div className="bg-gradient-to-br bg-indigo-700 rounded-xl p-6 shadow-xl">
          <p className="text-indigo-100 text-lg leading-relaxed">
            <span className="font-semibold">
              A questão central:
            </span>{" "}
            Mirelly não deveria precisar depender de motos por aplicativo para ter mobilidade adequada.
            Uma infraestrutura de transporte público integrada, frequente e
            confortável seria a solução real para a população de Recife.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
