'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const experiences = [
  {
    role: 'AI Automation Intern',
    company: 'Neno Technology (AI NANO INNOVATIONS PVT LTD)',
    period: 'Sept 2025 – Present',
    hook: 'Building end-to-end AI automation workflows that transform business operations through intelligent customer engagement, voice-enabled dashboards, and automated workflows.',
    image: '/WhatsApp Image 2025-12-08 at 18.40.36_acaa715b.jpg',
  },
  {
    role: 'AI/ML Intern',
    company: 'Data Vidwan',
    period: 'Feb 2025 – April 2025',
    hook: 'Deployed production-ready ML models on edge devices, achieving 90%+ accuracy in real-time image classification and gesture recognition systems.',
    image: '/448940780_477237948292215_2366763056833707544_n.jpg',
  },
]

export default function Timeline() {
  return (
    <div className="w-full">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/50 via-blue-500/50 to-transparent"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-20"
            >
              {/* Timeline dot */}
              <div className="absolute left-6 top-2">
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 border-2 border-black shadow-lg"></div>
                <div className="absolute inset-0 w-4 h-4 rounded-full bg-purple-500/30 animate-ping"></div>
              </div>

              {/* Content card */}
              <div className="glass-card-hover p-6 relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row gap-6">
                  {/* Image Section */}
                  <div className="flex-shrink-0">
                    <div className="relative w-full md:w-48 h-48 rounded-lg overflow-hidden border border-white/10 group-hover:border-white/20 transition-all">
                      <Image
                        src={exp.image}
                        alt={`${exp.company} experience`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <h3 className="text-xl font-semibold text-white">
                        {exp.role}
                      </h3>
                      <span className="text-sm text-white/60 font-code">
                        {exp.period}
                      </span>
                    </div>
                    
                    <p className="text-white/80 font-medium mb-3">
                      {exp.company}
                    </p>

                    <p className="text-white/75 text-sm leading-relaxed">
                      {exp.hook}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
