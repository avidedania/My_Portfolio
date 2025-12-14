'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface TextGenerateEffectProps {
  words: string
  className?: string
  cursorClassName?: string
  onComplete?: () => void
  shouldStart?: boolean
  isFirst?: boolean
}

export default function TextGenerateEffect({
  words,
  className,
  cursorClassName,
  onComplete,
  shouldStart = false,
  isFirst = false,
}: TextGenerateEffectProps) {
  const wordsArray = words.split(' ')
  const [displayedWords, setDisplayedWords] = useState<string[]>([])
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    // For first paragraph, start when in view
    // For subsequent paragraphs, only start when shouldStart is explicitly true
    if (isFirst && isInView && !hasStarted) {
      // First paragraph - start when in view
      setHasStarted(true)
    } else if (!isFirst && shouldStart && !hasStarted) {
      // Subsequent paragraphs - start when shouldStart is true
      setHasStarted(true)
    }
  }, [isInView, hasStarted, shouldStart, isFirst])

  useEffect(() => {
    if (hasStarted && currentWordIndex < wordsArray.length) {
      const timeout = setTimeout(() => {
        setDisplayedWords((prev) => [...prev, wordsArray[currentWordIndex]])
        setCurrentWordIndex((prev) => prev + 1)
      }, 100) // Typing speed per word

      return () => clearTimeout(timeout)
    } else if (hasStarted && currentWordIndex >= wordsArray.length && !isComplete) {
      setIsComplete(true)
      // Call onComplete when this paragraph finishes
      if (onComplete) {
        setTimeout(() => {
          onComplete()
        }, 300)
      }
    }
  }, [currentWordIndex, wordsArray, hasStarted, onComplete, isComplete])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      <span className="text-white/75 leading-relaxed">
        {displayedWords.map((word, index) => (
          <span key={index}>
            {word}
            {index < displayedWords.length - 1 && ' '}
          </span>
        ))}
        {currentWordIndex < wordsArray.length && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className={cursorClassName || 'text-white'}
          >
            {' '}|
          </motion.span>
        )}
      </span>
    </motion.div>
  )
}

