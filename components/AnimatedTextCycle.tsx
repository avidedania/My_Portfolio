'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const changingWords = [
  'dashboard',
  'business',
  'project',
  'team',
]

const lastLine = "I'm here to help you build better tools"

interface AnimatedTextCycleProps {
  onComplete: () => void
}

export default function AnimatedTextCycle({ onComplete }: AnimatedTextCycleProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [showLastLine, setShowLastLine] = useState(false)

  useEffect(() => {
    // Cycle through changing words
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev + 1 >= changingWords.length) {
          // After all words, show last line
          setShowLastLine(true)
          return prev
        }
        return prev + 1
      })
    }, 2000) // 2 seconds per text - matching 21st.dev speed

    // Complete after showing all texts
    const timeout = setTimeout(() => {
      setIsVisible(false)
      setTimeout(() => {
        onComplete()
      }, 500)
    }, (changingWords.length * 2000) + 2000 + 1000) // words + last line + buffer

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [onComplete])

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
    >
      <div className="text-center">
        {!showLastLine ? (
          <div className="h-24 sm:h-28 md:h-32 flex items-center justify-center px-4">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white/75 text-center max-w-4xl">
              <span className="text-white/75">Your </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentIndex}
                  initial={{ opacity: 0, y: 30, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -30, rotateX: 90 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  className="inline-block relative"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <span className="relative z-10 text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                    {changingWords[currentIndex]}
                  </span>
                  <motion.span
                    className="absolute inset-0 bg-white/30 blur-2xl -z-0"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.span>
              </AnimatePresence>
              <span className="text-white/75"> deserves better tools</span>
            </div>
          </div>
        ) : (
          <div className="h-24 sm:h-28 md:h-32 flex items-center justify-center px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key="lastLine"
                initial={{ opacity: 0, y: 30, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -30, rotateX: 90 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white/75 text-center max-w-4xl"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {lastLine}
              </motion.div>
            </AnimatePresence>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-8"
        >
          <div className="flex justify-center gap-2">
            {changingWords.map((_, index) => (
              <motion.div
                key={index}
                className={`h-1 rounded-full ${
                  index === currentIndex && !showLastLine ? 'bg-white' : 'bg-white/30'
                }`}
                initial={{ width: index === currentIndex && !showLastLine ? 32 : 4 }}
                animate={{ width: index === currentIndex && !showLastLine ? 32 : 4 }}
                transition={{ duration: 0.3 }}
              />
            ))}
            {showLastLine && (
              <motion.div
                className="h-1 rounded-full bg-white w-8"
                initial={{ width: 4 }}
                animate={{ width: 32 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
