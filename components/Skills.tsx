'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  SiPython, SiC, SiCplusplus, SiHtml5, SiCss3, SiPhp,
  SiTensorflow, SiOpencv, SiPandas, SiNumpy, SiStreamlit,
  SiGit, SiJupyter, SiRaspberrypi, SiArduino, SiJavascript,
  SiReact, SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql
} from 'react-icons/si'
import {
  FaBrain, FaRobot, FaEye, FaChartLine, FaLanguage, FaCog,
  FaUsers, FaHandshake, FaComments, FaPuzzlePiece, FaChevronDown, FaChevronUp
} from 'react-icons/fa'

// Map skills to their icons (minimalist - no colors)
const getSkillConfig = (skillName: string) => {
  const configMap: { [key: string]: { icon: React.ReactNode } } = {
    // Languages
    'Python': { icon: <SiPython className="w-4 h-4" /> },
    'C': { icon: <SiC className="w-4 h-4" /> },
    'C++': { icon: <SiCplusplus className="w-4 h-4" /> },
    'HTML': { icon: <SiHtml5 className="w-4 h-4" /> },
    'CSS': { icon: <SiCss3 className="w-4 h-4" /> },
    'PHP': { icon: <SiPhp className="w-4 h-4" /> },
    'JavaScript': { icon: <SiJavascript className="w-4 h-4" /> },

    // Libraries/Frameworks
    'TensorFlow': { icon: <SiTensorflow className="w-4 h-4" /> },
    'Keras': { icon: <FaBrain className="w-4 h-4" /> },
    'OpenCV': { icon: <SiOpencv className="w-4 h-4" /> },
    'scikit-learn': { icon: <FaChartLine className="w-4 h-4" /> },
    'LangChain': { icon: <FaLanguage className="w-4 h-4" /> },
    'MediaPipe': { icon: <FaEye className="w-4 h-4" /> },
    'NumPy': { icon: <SiNumpy className="w-4 h-4" /> },
    'Pandas': { icon: <SiPandas className="w-4 h-4" /> },
    'Streamlit': { icon: <SiStreamlit className="w-4 h-4" /> },
    'React': { icon: <SiReact className="w-4 h-4" /> },
    'Next.js': { icon: <SiNextdotjs className="w-4 h-4" /> },
    'Tailwind CSS': { icon: <SiTailwindcss className="w-4 h-4" /> },

    // Tools/Platforms
    'Jupyter Notebook': { icon: <SiJupyter className="w-4 h-4" /> },
    'Git': { icon: <SiGit className="w-4 h-4" /> },
    'Raspberry Pi': { icon: <SiRaspberrypi className="w-4 h-4" /> },
    'Arduino': { icon: <SiArduino className="w-4 h-4" /> },
    'Edge Impulse': { icon: <FaCog className="w-4 h-4" /> },
    'Teachable Machine': { icon: <FaRobot className="w-4 h-4" /> },
    'N8N': { icon: <FaCog className="w-4 h-4" /> },
    'MongoDB': { icon: <SiMongodb className="w-4 h-4" /> },
    'PostgreSQL': { icon: <SiPostgresql className="w-4 h-4" /> },

    // Concepts
    'CNN': { icon: <FaBrain className="w-4 h-4" /> },
    'Transfer Learning': { icon: <FaChartLine className="w-4 h-4" /> },
    'Image Classification': { icon: <FaEye className="w-4 h-4" /> },
    'Object Detection': { icon: <FaEye className="w-4 h-4" /> },
    'Face Recognition': { icon: <FaEye className="w-4 h-4" /> },
    'Model Optimization': { icon: <FaChartLine className="w-4 h-4" /> },
    'NLP': { icon: <FaLanguage className="w-4 h-4" /> },
    'Generative AI': { icon: <FaRobot className="w-4 h-4" /> },
    'LLMs': { icon: <FaLanguage className="w-4 h-4" /> },
    'RAG': { icon: <FaPuzzlePiece className="w-4 h-4" /> },

    // Soft Skills
    'Teamwork': { icon: <FaUsers className="w-4 h-4" /> },
    'Leadership': { icon: <FaHandshake className="w-4 h-4" /> },
    'Communication': { icon: <FaComments className="w-4 h-4" /> },
    'Problem-Solving': { icon: <FaPuzzlePiece className="w-4 h-4" /> },
  }

  return configMap[skillName] || { icon: <FaCog className="w-4 h-4" /> }
}

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'C', 'C++', 'HTML', 'CSS', 'PHP', 'JavaScript'],
  },
  {
    title: 'AI/ML Libraries',
    skills: ['TensorFlow', 'Keras', 'OpenCV', 'scikit-learn', 'LangChain', 'MediaPipe', 'NumPy', 'Pandas'],
  },
  {
    title: 'Web Development',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Streamlit'],
  },
  {
    title: 'AI/ML Concepts',
    skills: ['CNN', 'Transfer Learning', 'Image Classification', 'Object Detection', 'Face Recognition', 'Model Optimization', 'NLP', 'Generative AI', 'LLMs', 'RAG'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Jupyter Notebook', 'Git', 'Raspberry Pi', 'Arduino', 'Edge Impulse', 'Teachable Machine', 'N8N', 'MongoDB', 'PostgreSQL'],
  },
  {
    title: 'Soft Skills',
    skills: ['Teamwork', 'Leadership', 'Communication', 'Problem-Solving'],
  },
]

export default function Skills() {
  const [expandedCategories, setExpandedCategories] = useState<{ [key: number]: boolean }>({})

  const toggleCategory = (index: number) => {
    setExpandedCategories(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const INITIAL_DISPLAY_COUNT = 6

  return (
    <section id="skills" className="min-h-screen py-20 pt-32 px-6 sm:px-8 lg:px-12 xl:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white uppercase tracking-tight">
            Skills & Expertise
          </h2>
          <p className="text-white/70 text-lg">
            Technologies and tools I work with to build innovative solutions
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-8">
          {skillCategories.map((category, categoryIndex) => {
            const isExpanded = expandedCategories[categoryIndex]
            const displayedSkills = isExpanded
              ? category.skills
              : category.skills.slice(0, INITIAL_DISPLAY_COUNT)
            const hasMore = category.skills.length > INITIAL_DISPLAY_COUNT

            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl"
              >
                {/* Category Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white uppercase tracking-wide">
                    {category.title}
                  </h3>
                  <span className="px-4 py-1.5 bg-white/10 text-white text-sm font-semibold rounded-full border border-white/20">
                    {category.skills.length} Skills
                  </span>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-3 mb-4">
                  <AnimatePresence mode="popLayout">
                    {displayedSkills.map((skill, skillIndex) => {
                      const config = getSkillConfig(skill)

                      return (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{
                            duration: 0.3,
                            delay: skillIndex * 0.03
                          }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="group relative"
                        >
                          {/* Tag - Minimalist style */}
                          <div className="relative flex items-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 rounded-full text-white font-medium text-sm border border-white/10 hover:border-white/20 backdrop-blur-sm transition-all duration-300">
                            {config.icon}
                            <span>{skill}</span>
                          </div>
                        </motion.div>
                      )
                    })}
                  </AnimatePresence>
                </div>

                {/* View All / View Less Button */}
                {hasMore && (
                  <motion.button
                    onClick={() => toggleCategory(categoryIndex)}
                    className="flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium text-sm transition-all duration-200 border border-white/20 mt-4"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isExpanded ? (
                      <>
                        <FaChevronUp className="w-4 h-4" />
                        <span>View Less</span>
                      </>
                    ) : (
                      <>
                        <FaChevronDown className="w-4 h-4" />
                        <span>View All ({category.skills.length - INITIAL_DISPLAY_COUNT} more)</span>
                      </>
                    )}
                  </motion.button>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
