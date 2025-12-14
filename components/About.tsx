'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import TrustBadges from './TrustBadges'
import { FiCode, FiCpu, FiZap, FiTarget, FiTrendingUp, FiAward } from 'react-icons/fi'

const summaryParagraphs = [
  `Passionate AI Engineer crafting intelligent solutions that transform ideas into reality. Specialized in building RAG-powered applications, intelligent automation systems, and voice-enabled AI agents that revolutionize how businesses operate.`,
  `Expert in deploying cutting-edge AI models to edge devices like Raspberry Pi and Luckfox, leveraging TensorFlow, Keras, OpenCV, MediaPipe, and TFLite for real-time performance. Master of LangChain and Streamlit for creating intuitive AI interfaces.`,
  `Architect of business automation ecosystems using n8n, Vapi, and Omni Dimension. Transforming complex workflows into seamless, intelligent systems that drive efficiency and innovation.`,
]

const coreValues = [
  {
    icon: <FiTarget className="w-6 h-6" />,
    title: 'Innovation First',
    description: 'Pushing boundaries with cutting-edge AI technologies and creative problem-solving approaches.',
  },
  {
    icon: <FiZap className="w-6 h-6" />,
    title: 'Performance Driven',
    description: 'Optimizing AI models for real-time inference on edge devices with maximum efficiency.',
  },
  {
    icon: <FiCode className="w-6 h-6" />,
    title: 'Production Ready',
    description: 'Transforming research prototypes into scalable, maintainable production systems.',
  },
  {
    icon: <FiTrendingUp className="w-6 h-6" />,
    title: 'Continuous Learning',
    description: 'Staying ahead of the curve with latest AI/ML advancements and best practices.',
  },
]

const expertiseAreas = [
  { name: 'RAG Systems', level: 95 },
  { name: 'Edge AI Deployment', level: 90 },
  { name: 'AI Automation', level: 92 },
  { name: 'LLM Integration', level: 88 },
  { name: 'Computer Vision', level: 85 },
  { name: 'Voice AI', level: 87 },
]

export default function About() {
  return (
    <section id="about" className="min-h-screen relative">
      <div className="py-20 px-6 sm:px-8 lg:px-12 xl:px-16 pt-32">
        <div className="max-w-7xl mx-auto space-y-20">
          
          {/* Hero Section - Photo & Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-12 md:gap-16"
          >
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-shrink-0"
            >
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 blur-3xl"></div>
                {/* Photo */}
                <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 shadow-2xl">
                  <Image
                    src="/AI generated.jpg"
                    alt="Avi Dedania - AI/ML Engineer"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </motion.div>

            {/* Intro Text */}
            <div className="flex-1 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Avi Dedania
                </h1>
                <p className="text-xl text-white/80 font-semibold mb-6">
                  AI Engineer & Automation Specialist
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-4 text-white/80 leading-relaxed"
              >
                {summaryParagraphs.map((paragraph, index) => (
                  <p key={index} className="text-base md:text-lg">
                    {paragraph}
                  </p>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white uppercase text-center">
              By The Numbers
            </h2>
            <TrustBadges />
          </motion.div>

          {/* Core Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white uppercase text-center">
              Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="glass-card-hover p-6 relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                  <div className="relative z-10">
                    <div className="text-white mb-4 group-hover:text-purple-400 transition-colors">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-white/75 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Expertise Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white uppercase text-center">
              Expertise Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {expertiseAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card p-6"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-white font-medium">{area.name}</span>
                    <span className="text-white/60 text-sm font-code">{area.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${area.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                      className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
