"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <motion.footer
      className="bg-blue-950 text-white py-16 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Sobre</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Uma investigação jornalística sobre mobilidade urbana, infraestrutura e o custo humano dos deslocamentos
              na Região Metropolitana do Recife.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Seções</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Introdução
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  O Custo Humano
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Sonho da Mobilidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Alternativas
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Dados</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Baseado em entrevistas, dados públicos e relatórios de mobilidade urbana da RMR e Pernambuco.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © 2025 Investigação Jornalística. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </motion.footer>
  )
}
