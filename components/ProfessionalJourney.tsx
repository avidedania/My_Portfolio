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

export default function ProfessionalJourney() {
  return (
    <section id="professional-journey" className="py-20 px-6 sm:px-8 lg:px-12 xl:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white uppercase">
            EXPERIENCE
          </h2>
          
          <div className="space-y-8">
            {journey.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="mb-6 p-6 border border-white/10 rounded-lg hover:border-white/30 hover:bg-white/5 transition-all duration-300 cursor-default"
              >
                <div className="mb-2">
                  <span className="text-white/60 mr-2">{item.prefix}</span>
                  <span className="text-lg font-semibold text-white">{item.role}</span>
                </div>
                <div className="ml-6 mb-3">
                  <div className="text-lg text-white font-medium">{item.company}</div>
                  <div className="text-sm text-white/60">{item.period}</div>
                </div>
                <ul className="ml-6 space-y-2">
                  {achievements[index]?.items.map((achievement, aIndex) => (
                    <li key={aIndex} className="text-white/75 flex items-start">
                      <span className="mr-2">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
