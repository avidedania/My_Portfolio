'use client'

import { motion } from 'framer-motion'

const journey = [
  {
    role: 'AI Automation Intern',
    company: 'Neno Technology (AI NANO INNOVATIONS PVT LTD)',
    period: 'Sept 2025 – Present',
    prefix: '-'
  },
  {
    role: 'AI/ML Intern',
    company: 'Data Vidwan',
    period: 'Feb 2025 – April 2025',
    prefix: '-'
  },
]

const achievements = [
  {
    company: 'Neno Technology',
    items: [
      'Implemented AI-driven customer engagement automations (quotation sending, cold outreach, social media posting), significantly improving response speed, lead nurturing, and client conversion for business domains.',
      'Developed voice-enabled management dashboards integrating AI task automation, enabling real-time decision support and improving operational efficiency.',
      'Automated business operations across management, communication, and scheduling, using AI-powered workflows (n8n, voice agents, WhatsApp & LinkedIn automations), reducing manual workload and improving execution efficiency.',
      'Built customized AI assistant and analytical automation tools for business & startup evaluation.',
    ]
  },
  {
    company: 'Data Vidwan',
    items: [
      'Trained and deployed MobileNetV2 models for image classification with over 90% accuracy.',
      'Converted deep learning models to TensorFlow Lite for real-time inference on Raspberry Pi.',
      'Built a real-time hand gesture recognition system using OpenCV and MediaPipe, achieving 95% prediction accuracy.',
      'Created interactive ML apps using Streamlit and Jupyter Notebook for intuitive user interfaces.',
    ]
  }
]

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

const volunteering = [
  {
    role: 'Management Lead – GDSC',
    organization: 'Google Developer Student Club - SAL Education',
    prefix: '-'
  },
  {
    role: 'Management Lead',
    organization: 'Syntaxium Coding Club - SAL Education Campus',
    prefix: '-'
  },
  {
    role: 'Volunteer',
    organization: '30th National Children\'s Science Congress',
    prefix: '-'
  },
]

export default function BentoGrid() {
  return (
    <section className="py-20 pt-32 px-6 sm:px-8 lg:px-12 xl:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-white uppercase">
            EXPERIENCE
          </h2>
          <p className="text-white/75">Professional journey and education</p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Large card - First Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="lg:col-span-2 lg:row-span-2 p-6 glass-card-hover group cursor-pointer relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <div className="relative z-10">
              <div className="mb-4">
                <span className="text-white/60 mr-2">{journey[0].prefix}</span>
                <span className="text-xl font-semibold text-white">{journey[0].role}</span>
              </div>
              <div className="ml-6 mb-4">
                <div className="text-lg text-white font-medium mb-1">{journey[0].company}</div>
                <div className="text-sm text-white/60">{journey[0].period}</div>
              </div>
              <ul className="ml-6 space-y-3">
                {achievements[0]?.items.map((achievement, aIndex) => (
                  <li key={aIndex} className="text-white/75 text-sm flex items-start">
                    <span className="mr-2 mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Medium card - Second Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="lg:col-span-2 p-6 glass-card-hover group cursor-pointer relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <div className="relative z-10">
              <div className="mb-4">
                <span className="text-white/60 mr-2">{journey[1].prefix}</span>
                <span className="text-xl font-semibold text-white">{journey[1].role}</span>
              </div>
              <div className="ml-6 mb-4">
                <div className="text-lg text-white font-medium mb-1">{journey[1].company}</div>
                <div className="text-sm text-white/60">{journey[1].period}</div>
              </div>
              <ul className="ml-6 space-y-2">
                {achievements[1]?.items.slice(0, 2).map((achievement, aIndex) => (
                  <li key={aIndex} className="text-white/75 text-sm flex items-start">
                    <span className="mr-2 mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Small card - Education 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05, y: -4, rotate: 1 }}
            className="p-6 glass-card-hover group cursor-pointer relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <div className="relative z-10">
              <div className="mb-3">
                <span className="text-white/60 mr-2">{education[0].prefix}</span>
                <span className="text-lg font-semibold text-white">{education[0].degree}</span>
              </div>
              <div className="ml-6 text-white/75 text-sm">
                {education[0].institution}
              </div>
            </div>
          </motion.div>

          {/* Small card - Education 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05, y: -4, rotate: -1 }}
            className="p-6 glass-card-hover group cursor-pointer relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <div className="relative z-10">
              <div className="mb-3">
                <span className="text-white/60 mr-2">{education[1].prefix}</span>
                <span className="text-lg font-semibold text-white">{education[1].degree}</span>
              </div>
              <div className="ml-6 text-white/75 text-sm">
                {education[1].institution}
              </div>
            </div>
          </motion.div>

          {/* Medium card - Additional achievements from Data Vidwan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="lg:col-span-2 p-6 glass-card-hover group cursor-pointer relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <div className="relative z-10">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-white mb-3">Additional Achievements</h3>
              </div>
              <ul className="space-y-2">
                {achievements[1]?.items.slice(2).map((achievement, aIndex) => (
                  <li key={aIndex} className="text-white/75 text-sm flex items-start">
                    <span className="mr-2 mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Medium card - Volunteering */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="lg:col-span-2 p-6 glass-card-hover group cursor-pointer relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <div className="relative z-10">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-white mb-3">Volunteering</h3>
              </div>
              <ul className="space-y-3">
                {volunteering.map((item, vIndex) => (
                  <li key={vIndex} className="text-white/75 text-sm">
                    <span className="text-white/60 mr-2">{item.prefix}</span>
                    <span className="text-white font-medium">{item.role}</span>
                    <span className="text-white/75"> — {item.organization}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

