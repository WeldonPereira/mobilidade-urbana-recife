"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import AlarmScreen from "@/components/AlarmScreen"
import HomePage from "@/components/HomePage"

export default function Home() {
  const [alarmDismissed, setAlarmDismissed] = useState(false)

  return (
    <main className="bg-white">
      <AnimatePresence mode="wait">
        {!alarmDismissed ? (
          <AlarmScreen key="alarm" onDismiss={() => setAlarmDismissed(true)} />
        ) : (
          <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <HomePage />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
