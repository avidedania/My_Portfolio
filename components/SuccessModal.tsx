'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiCheckCircle, FiSparkles } from 'react-icons/fi'
import { useEffect, useState } from 'react'

interface SuccessModalProps {
  isOpen: boolean
  onClose: () => void
  userName?: string
}

const psychologyFacts = [
  {
    title: "The Zeigarnik Effect",
    content: "Your brain remembers incomplete tasks better than completed ones. That's why you're thinking about this message right now!",
    emoji: "🧠"
  },
  {
    title: "The Power of Connection",
    content: "Studies show that meaningful conversations activate the same reward centers in your brain as physical rewards. You just created a positive neural pathway!",
    emoji: "✨"
  },
  {
    title: "The Reciprocity Principle",
    content: "When someone does something nice for us, we're wired to want to return the favor. Your message has been received with genuine appreciation!",
    emoji: "💫"
  },
  {
    title: "The Halo Effect",
    content: "First impressions matter! By reaching out, you've already created a positive association. Great things start with a single message.",
    emoji: "🌟"
  },
  {
    title: "Social Connection",
    content: "Human connection releases oxytocin - the 'bonding hormone'. Every meaningful interaction strengthens our social fabric. Thank you for contributing!",
    emoji: "🤝"
  }
]

export default function SuccessModal({ isOpen, onClose, userName }: SuccessModalProps) {
  const [currentFact, setCurrentFact] = useState(0)

  useEffect(() => {
    if (isOpen) {
      // Randomly select a fact
      setCurrentFact(Math.floor(Math.random() * psychologyFacts.length))
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const fact = psychologyFacts[currentFact]

  if (!isOpen) return null

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
      />

      {/* Modal */}
      <div key="modal" className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-md pointer-events-auto"
            >
              {/* Glass card effect */}
              <div className="relative glass-card p-8 rounded-2xl border border-white/20 overflow-hidden">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent opacity-50" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-transparent"
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Close button */}
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 glass-card hover:bg-white/10 rounded-lg transition-colors text-white/60 hover:text-white"
                    aria-label="Close"
                  >
                    <FiX className="w-5 h-5" />
                  </button>

                  {/* Success icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    className="flex justify-center mb-6"
                  >
                    <div className="relative">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                        className="absolute inset-0"
                      >
                        <FiSparkles className="w-16 h-16 text-white/20" />
                      </motion.div>
                      <FiCheckCircle className="w-16 h-16 text-green-400 relative z-10" />
                    </div>
                  </motion.div>

                  {/* Title */}
                  <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-bold text-white text-center mb-2"
                  >
                    Message Sent Successfully!
                  </motion.h2>

                  {userName && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-white/80 text-center mb-6"
                    >
                      Thanks, {userName}! 🎉
                    </motion.p>
                  )}

                  {/* Psychology fact card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="glass-card p-6 rounded-xl border border-white/10 mb-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{fact.emoji}</div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2">
                          {fact.title}
                        </h3>
                        <p className="text-sm text-white/80 leading-relaxed">
                          {fact.content}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Footer message */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-center text-white/60 text-sm mb-6"
                  >
                    I'll get back to you within 24 hours. Looking forward to connecting!
                  </motion.p>

                  {/* Close button */}
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    onClick={onClose}
                    className="w-full px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-white/90 transition-colors"
                  >
                    Awesome, thanks!
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
    </AnimatePresence>
  )
}
