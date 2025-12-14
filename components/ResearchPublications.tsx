'use client'

import { motion } from 'framer-motion'

export default function ResearchPublications() {
  return (
    <section id="research" className="py-20 px-6 sm:px-8 lg:px-12 xl:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white uppercase">
            RESEARCH PUBLICATIONS
          </h2>
          
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-6 border border-white/10 rounded-lg hover:border-white/30 hover:bg-white/5 transition-all duration-300 cursor-default"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                AI-Powered Garbage Classification System with IoT Implementation
              </h3>
              <p className="text-lg text-white/75 mb-2">
                International Journal of Innovative Research in Engineering & Multidisciplinary Physical Sciences
              </p>
              <ul className="space-y-2 text-white/75">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Published in IJIRMPS, Volume 13, Issue 2 (Mar–Apr 2025).</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Proposed an AI-based waste classification system using MobileNetV2 and TensorFlow Lite.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Deployed on Raspberry Pi with OpenCV and servo motor control for real-time sorting.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Focused on lightweight edge deployment and IoT integration.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

