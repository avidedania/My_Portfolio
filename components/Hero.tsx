'use client'

import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center px-6 sm:px-8 lg:px-12 xl:px-16 pt-20 relative overflow-hidden">
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 z-[1]"></div>

      <div className="max-w-5xl mx-auto w-full relative z-10">
        {/* Centered Content */}
        <div className="flex flex-col items-center text-center">

          {/* Name */}
          <motion.h1
            className="text-6xl sm:text-7xl md:text-8xl font-bold mb-6 text-white uppercase"
            style={{ 
              fontFamily: 'var(--font-cronde), "Cronde", serif',
              letterSpacing: '0.1em'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            AVI DEDANIA
          </motion.h1>

          {/* Compelling Headline - Psychology-Driven */}
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Building AI That Actually Works
          </motion.h2>

          {/* Primary CTA - Clear Action */}
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-white/90 transition-all duration-300 flex items-center gap-2 shadow-2xl hover:shadow-white/20 hover:scale-105"
            >
              <span>View My Work</span>
              <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="px-8 py-4 backdrop-blur-xl bg-white/10 text-white border border-white/20 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 shadow-xl hover:scale-105"
            >
              Let's Connect
            </a>
          </motion.div>

        </div>
      </div>

      {/* Scroll Down Mouse Icon */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-3 text-white/70 hover:text-white transition-colors duration-300 group cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative"
          >
            {/* Mouse Icon */}
            <svg
              width="24"
              height="40"
              viewBox="0 0 24 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white/80 group-hover:text-white transition-colors"
            >
              {/* Mouse body */}
              <rect
                x="2"
                y="2"
                width="20"
                height="36"
                rx="10"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="opacity-80"
              />
              {/* Scroll wheel */}
              <motion.rect
                x="10"
                y="10"
                width="4"
                height="6"
                rx="2"
                fill="currentColor"
                animate={{
                  y: [10, 18, 10],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </svg>
          </motion.div>
        </a>
      </motion.div>
    </section>
  )
}
