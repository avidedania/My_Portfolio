'use client'

import { motion } from 'framer-motion'

const education = [
  { 
    degree: 'Batchelor of Engineering in Computer Engineering',
    institution: 'SAL College of Engineering Ahmedabad, Gujarat, India',
    prefix: '-' 
  },
  { 
    degree: 'Diploma in Information Technology (IT)',
    institution: 'Government Polytechnic Rajkot, Gujarat, India',
    prefix: '-' 
  },
]

export default function Academia() {
  return (
    <section id="academia" className="py-20 px-6 sm:px-8 lg:px-12 xl:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white uppercase">
            EDUCATION
          </h2>
          
          <div className="space-y-4">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-lg p-4 border border-white/10 rounded-lg hover:border-white/30 hover:bg-white/5 hover:translate-x-2 transition-all duration-300 cursor-default"
              >
                <div>
                  <span className="text-white/60 mr-2">{item.prefix}</span>
                  <span className="text-white font-semibold">{item.degree}</span>
                </div>
                <div className="ml-6 text-white/75">
                  {item.institution}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
