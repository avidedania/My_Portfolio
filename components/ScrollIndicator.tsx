'use client'

import { motion } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
    >
      <motion.div
        animate={{
          y: [0, 6, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="text-white/60"
      >
        <div className="w-4 h-7 border-2 border-white/60 rounded-full flex items-start justify-center p-0.5">
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-1 h-1 bg-white/60 rounded-full"
          />
        </div>
      </motion.div>
      <motion.div
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="text-[10px] text-white/60 uppercase tracking-wider"
      >
        Scroll
      </motion.div>
    </motion.div>
  )
}

