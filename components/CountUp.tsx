'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface CountUpProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  decimals?: number
  className?: string
  startDelay?: number
}

export default function CountUp({
  end,
  duration = 2,
  suffix = '',
  prefix = '',
  decimals = 0,
  className = '',
  startDelay = 0,
}: CountUpProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true
      
      // Wait for the start delay before beginning animation
      const timeoutId = setTimeout(() => {
        let startTime: number | null = null
        const startValue = 0

        const animate = (currentTime: number) => {
          if (startTime === null) startTime = currentTime
          const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)

          // Easing function for smooth animation
          const easeOutQuart = 1 - Math.pow(1 - progress, 4)
          const currentCount = startValue + (end - startValue) * easeOutQuart

          setCount(currentCount)

          if (progress < 1) {
            requestAnimationFrame(animate)
          } else {
            setCount(end)
          }
        }

        requestAnimationFrame(animate)
      }, startDelay)

      return () => clearTimeout(timeoutId)
    }
  }, [isInView, end, duration, startDelay])

  const formatNumber = (num: number): string => {
    if (decimals === 0) {
      return Math.floor(num).toString()
    }
    return num.toFixed(decimals)
  }

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  )
}

