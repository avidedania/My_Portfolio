'use client'

import { motion } from 'framer-motion'

const volunteerRoles = [
  { role: 'Management Lead – GDSC', organization: 'Google Developer Student Club - SAL Education', prefix: '-' },
  { role: 'Management Lead', organization: 'Syntaxium Coding Club - SAL Education Campus', prefix: '-' },
  { role: 'Volunteer', organization: '30th National Children\'s Science Congress', prefix: '-' },
]

export default function Volunteering() {
  return (
    <section id="volunteering" className="py-20 px-6 sm:px-8 lg:px-12 xl:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white uppercase">
            VOLUNTEERING
          </h2>
          
          <div className="space-y-3">
            {volunteerRoles.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-lg p-4 glass-card-hover hover:translate-x-2 cursor-default"
              >
                <span className="text-white/60 mr-2">{item.prefix}</span>
                <span className="text-white font-semibold">{item.role}</span>
                <span className="text-white/75"> — {item.organization}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

