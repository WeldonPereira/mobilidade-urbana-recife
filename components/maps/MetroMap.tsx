"use client";

import { motion } from "framer-motion";

export default function MetroMapComponent() {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="bg-white p-4 sm:p-8 rounded-lg shadow-lg border border-gray-200">
        
        {/* Título contextual */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
          O Metrô é o Centro da Rotina de Mirelly
        </h2>

        <p className="text-gray-700 text-sm leading-relaxed mb-6">
          Para Mirelly, o metrô não é apenas um mapa no papel — é o coração do seu
          deslocamento diário entre Camaragibe e o Recife. Todos os dias ela depende
          da Linha Centro para chegar ao trabalho e à faculdade, lidando com trens
          lotados, intervalos irregulares, falhas elétricas e a constante incerteza
          sobre quando (ou se) a viagem vai atrasar.
        </p>

        <div className="relative w-full">
          <img
            src="/images/mapa-metro-recife.jpg"
            alt="Mapa do Metrô do Recife com as três linhas: Centro (laranja), Sul (vermelha) e Azul. Mostra as estações integradas com ônibus e trens diesel."
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Cards das linhas */}
        <motion.div
          className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="p-6 bg-orange-50 rounded-lg border-l-4 border-orange-600 shadow-sm">
            <h4 className="font-bold text-orange-900 mb-2">Linha Centro</h4>
            <p className="text-sm text-orange-800">
              Laranja — principal eixo de mobilidade da RMR.  
              É nela que Mirelly passa a maior parte do tempo.
            </p>
          </div>

          <div className="p-6 bg-red-50 rounded-lg border-l-4 border-red-600 shadow-sm">
            <h4 className="font-bold text-red-900 mb-2">Linha Sul</h4>
            <p className="text-sm text-red-800">
              Vermelha — conecta áreas populosas ao Recife, com fluxo intenso
              durante manhã e noite.
            </p>
          </div>

          <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600 shadow-sm">
            <h4 className="font-bold text-blue-900 mb-2">Linha Azul</h4>
            <p className="text-sm text-blue-800">
              Azul — expansão mais recente, ligada a pontos estratégicos e terminais
              integrados.
            </p>
          </div>
        </motion.div>

        {/* Bloco explicativo adicional (obrigatório no PDF) */}
        <motion.div
          className="mt-10 bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Por que o metrô importa tanto na história?
          </h3>

          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            O metrô deveria ser a espinha dorsal da mobilidade urbana, mas sua
            infraestrutura antiga e os constantes problemas operacionais fazem com
            que o deslocamento de Mirelly seja uma loteria diária.
          </p>

          <ul className="text-gray-700 text-sm space-y-2">
            <li>• Intervalos que deveriam ser de 6 minutos chegam a 20–40 minutos</li>
            <li>• Superlotação diária, principalmente em horários de pico</li>
            <li>• Falhas recorrentes de energia e sinalização</li>
            <li>• Dependência total de integração com ônibus, que também atrasam</li>
            <li>• Tempo de deslocamento muito acima do ideal</li>
          </ul>

          <p className="text-sm text-gray-700 leading-relaxed mt-3">
            Esse cenário afeta diretamente a vida de milhares de pessoas como
            Mirelly, que perdem horas todos os dias apenas tentando se locomover.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
