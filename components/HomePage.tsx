"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import MetroTimeline from "./MetroTimeline";
import BusFillingGame from "./BusFillingGame";
import MotoAppSimulator from "./MotoAppSimulator";
import MotorcycleGrowthChart from "./infographics/MotorcycleGrowthChart";
import RidesChart from "./infographics/RidesChart";
import DeathsChart from "./infographics/DeathsChart";
import CyclistsChart from "./infographics/CyclistsChart";
import MetroMapComponent from "./maps/MetroMap";
import CyclePathMap from "./maps/CyclePathMap";
import TextSection from "./TextSection";
import Footer from "./Footer";

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center 
  px-4 sm:px-6 lg:px-8 pt-24 pb-12
  bg-gradient-to-b from-white to-blue-50
  bg-[url('/images/homePage.png')] bg-cover bg-center bg-no-repeat"
      >
        {/* Overlay opcional */}
        <div className="absolute inset-0 bg-white/50 -z-10"></div>

        <motion.div
          className="max-w-4xl w-full text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-black leading-tight">
            Mobilidade Urbana em Recife
          </h1>
          <p className="text-xl sm:text-2xl text-gray-900 font-light mb-6 leading-relaxed">
            O Custo Humano da Rotina
          </p>
          
        </motion.div>
      </section>

      {/* Introduction */}
      <TextSection
        title="Introdução: Mais um Dia"
        blocks={[
          `São cinco da manhã e o dia ainda nem começou direito, mas o sol, sempre apressado no Recife, já se espalha como se houvesse um para cada habitante da cidade. O corpo sente o peso de ontem, mas a rotina não espera, não pede licença, não pergunta se você está pronto. Apenas segue.`,

          `Do mesmo jeito começa, de segunda a sexta, a jornada de Mirelly, jovem aprendiz durante o dia e universitária de Enfermagem à noite, que atravessa a Região Metropolitana para mais um dia. Uma maratona que ninguém escolhe, mas milhões enfrentam.`,

          `Moradora de Camaragibe, mais precisamente do bairro de Alberto Maia, Mirelly desperta às cinco da manhã. Não há luxo de tempo. Ela corre para se arrumar, tomar banho e comer alguma coisa antes de sair. Acordar mais cedo significaria abrir mão de quinze minutinhos daquele sono que, para uma rotina como a dela, vale ouro. Às 5:50, ela tranca a porta e desce a rua rumo à Estação Camaragibe. É o início de mais um dia igual aos outros.`,

          `Ela pega o metrô na última estação da Linha Centro às 6h10. Mirelly segue todo o percurso até a Estação Recife, espremida entre mochilas, cotovelos e sonos acumulados. Lá se vão uma hora e dez minutos.`,

          `A corrida da manhã ainda não terminou. Falta ainda uma última perna: 20 minutos da Estação Recife até o Cais de Santa Rita. Em pé, espremida e o ônibus, quase sempre com o ar condicionado quebrado, no calor das oito da manhã. Vinte minutos que, para quem viaja como sardinha em lata, se alongam como horas. A etapa final: cinco minutos de caminhada até o trabalho. E é ali, ao chegar, que Mirelly finalmente pode respirar. Ironicamente, o único momento da manhã em que ela "descansa" é quando a jornada se inicia.`,
        ]}
        color="blue"
      />

      {/* Metro Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white bg-[url('/images/timeline.png')] bg-cover bg-center bg-no-repeat">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl sm:text-5xl font-light text-blue-950 text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            A Rotina de Mirelly
          </motion.h2>
          <MetroTimeline />
        </div>
      </section>

      {/* The Human Cost */}
      <TextSection
        title="O Custo Humano da Mobilidade"
        blocks={[
          `A rotina de Mirelly não é um ponto fora da curva; é, na verdade, o retrato de um sistema que se arrasta muito antes de o sol nascer. O transporte público da Região Metropolitana do Recife (ônibus, metrô, terminais e linhas de integração) opera num regime de sobrevivência.`,

          `Há anos, fala-se de modernização, reorganização e ampliação, mas a realidade cotidiana é outra: composições que funcionam no limite, corredores exclusivos improvisados ou compartilhados, terminais com infraestrutura desgastada e obras que nunca terminam no prazo anunciado.`,

          `Quando se fala em mobilidade, o debate público costuma se prender a números: tempo médio de deslocamento, quantidade de linhas, extensão de corredores, orçamento. Mas existe um dado que raramente entra nos relatórios oficiais: o custo humano desses deslocamentos.`,

          `Para Mirelly, esse custo se mede no corpo e na cabeça. O sono sempre curto, o cansaço acumulado, a tensão permanente de depender de um metrô que pode parar, de um ônibus que pode atrasar, de uma conexão que talvez não chegue.`,

          `Se Mirelly chega às 7h45 no trabalho, a volta para casa só termina perto das 23h, depois da faculdade. O tempo livre, quando existe, é mínimo. Sobram poucos minutos para conversar com a família, ajudar em casa, descansar ou simplesmente existir sem correr.`,
        ]}
        color="red"
      />

      {/* Bus Game */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 ">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl sm:text-5xl font-light text-blue-950 text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Lotação Diária
          </motion.h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            A medida que você navega por essa história, o ônibus vai enchendo
            com as realidades de milhares de pessoas na Grande Recife.
          </p>
          <BusFillingGame />
        </div>
      </section>

      {/* Metro Map */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl sm:text-5xl font-light text-blue-950 text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Linhas do Metrô do Recife
          </motion.h2>
          <MetroMapComponent />
        </div>
      </section>

      {/* Dream of Mobility */}
      <TextSection
        title="O Sonho da Mobilidade"
        blocks={[
          `Ainda cedo e a cidade já revela sua primeira verdade do dia: mover-se é difícil. As ruas engarrafadas antes das sete, as filas nos terminais, a espera demorada por um ônibus que talvez venha, ou talvez não.`,

          `No meio desse cotidiano marcado por atraso, calor e insegurança, cresce um desejo coletivo, quase instintivo: escapar. E, para muitos, essa fuga tem forma e som. Uma moto que corta o trânsito como uma linha reta desenhada sobre o caos.`,

          `É nesse cenário que a moto deixa de ser apenas um objeto de transporte e passa a representar uma solução possível, acessível e concreta. A motivação é clara. Primeiro, o tempo: o que antes levava duas horas, às vezes cai para trinta minutos.`,

          `Esses fatores explicam o crescimento constante da presença das motos pelas ruas. Nos últimos anos, aumentaram não apenas as vendas, mas também as compras financiadas, parceladas em longos prazos para caber no orçamento mensal.`,

          `Mas todo sonho tem outro lado. E, neste caso, ele aparece nas estatísticas. Em toda a Grande Recife, cresce de forma preocupante o número de acidentes envolvendo motociclistas. São colisões, quedas, atropelamentos, muitos deles resultando em ferimentos graves e mortes.`,
        ]}
        color="orange"
      />

      {/* Moto App Simulator */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-yellow-50 bg-[url('/images/image.png')] bg-cover bg-center bg-no-repeat">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl sm:text-5xl font-light text-blue-950 text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            99 Moto
          </motion.h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            A solução rápida que atrai milhares diariamente, mas traz riscos
            crescentes.
          </p>
          <MotoAppSimulator />
        </div>
      </section>

      {/* Motorcycle Growth */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl sm:text-5xl font-light text-blue-950 text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Crescimento da Frota de Motocicletas
          </motion.h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Entre 2020 e 2025 foram emplacadas aproximadamente 294.884 motos em
            Pernambuco — média de ~58.976 motos por ano.
          </p>
          <MotorcycleGrowthChart />
        </div>
      </section>

      {/* Rides Chart */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-red-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl sm:text-5xl font-light text-blue-950 text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Corridas de Moto por Aplicativo
          </motion.h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            O crescimento dos serviços de motos por aplicativo de transporte de
            passageiros cresceu ~50% em apenas dois anos.
          </p>
          <RidesChart />
        </div>
      </section>

      {/* Deaths Chart */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl sm:text-5xl font-light text-blue-950 text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            O Preço da Liberdade
          </motion.h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Em 2023, Pernambuco registrou 31.265 vítimas de acidentes com motos
            e 693 mortes. Aumento de aproximadamente 13,6% no total de vítimas.
          </p>
          <DeathsChart />
        </div>
      </section>

      {/* Alternatives */}
      <TextSection
        title="Alternativas de Mobilidade"
        blocks={[
          `Diante do colapso do transporte público na Região Metropolitana do Recife (RMR), a bicicleta é aclamada como uma alternativa viável, sustentável e economicamente acessível.`,

          `O discurso oficial na RMR frequentemente incentiva os modais ativos, prometendo uma mobilidade mais humana e sustentável. As prefeituras implementam quilômetros de rotas cicloviárias (Recife atingiu 191,5 km até 2024).`,

          `No entanto, a realidade da infraestrutura contrasta drasticamente com a propaganda: Muitos trechos construídos são desconectados e não formam uma rede coesa. Frequentemente, são implementadas ciclofaixas (separação por pintura) em vez de ciclovias (separada fisicamente do tráfego).`,

          `Quem depende da bicicleta para ir ao trabalho ou à faculdade enfrenta um ambiente hostil e perigoso: Há desrespeito de motoristas, invasão de ciclofaixas e a falta de fiscalização e manutenção.`,

          `A persistência de dados negativos reforça o medo e afasta potenciais usuários da alternativa sustentável. O Recife registrou um número alto de ciclistas mortos, superando as vítimas fatais entre motoristas de carro e ônibus.`,
        ]}
        color="blue"
      />

      {/* Cycle Paths */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl sm:text-5xl font-light text-blue-950 text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Ciclovias do Recife
          </motion.h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Recife alcançou 191,5 km de rotas cicloviárias, mas muitos trechos
            permanecem desconectados.
          </p>
          <CyclePathMap />
        </div>
      </section>

      {/* Cyclists Chart */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl sm:text-5xl font-light text-blue-950 text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Acidentes com Ciclistas
          </motion.h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            A vulnerabilidade do ciclista é alta, especialmente em um trânsito
            agressivo.
          </p>
          <CyclistsChart />
        </div>
      </section>

      {/* Conclusion */}
      <TextSection
        title="Conclusão: Repensar a Mobilidade"
        blocks={[
          `O futuro da mobilidade na Região Metropolitana do Recife depende de decisões que vão muito além de abrir novas vias. Exige planejamento integrado, investimento público consistente e uma mudança profunda de prioridades: colocar as pessoas e não apenas os veículos no centro das políticas urbanas.`,

          `Os desafios são urgentes e visíveis. O primeiro é a recuperação e modernização do transporte público, especialmente ônibus e metrô, que hoje não atendem à demanda e aprofundam a sensação de abandono dos usuários.`,

          `A construção de um futuro diferente passa por soluções coletivas e articuladas. A integração entre modais é fundamental: ônibus, metrô, bicicletas e transporte por aplicativo precisam funcionar de forma complementar.`,

          `Pensar em mobilidade é pensar em direitos. Dividir a cidade de forma justa significa garantir que todas as pessoas possam se deslocar com segurança, rapidez e dignidade, independentemente do bairro onde vivem ou da renda que têm. Quando a mobilidade funciona, a cidade respira melhor e as pessoas também.`,
        ]}
        color="red"
      />

      <Footer />
    </div>
  );
}
