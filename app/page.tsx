'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustBadges from '@/components/TrustBadges'
import Timeline from '@/components/Timeline'
import { motion } from 'framer-motion'
import { FiMail, FiLinkedin, FiGithub, FiExternalLink, FiFileText, FiPlay, FiSend, FiArrowRight } from 'react-icons/fi'
import { SiReddit } from 'react-icons/si'
import { useState } from 'react'
import Link from 'next/link'

// Top 3 projects
const topProjects = [
  {
    name: 'Smart Reach: Covers scraping, personalize outreach, and response tracking',
    description: 'Built an end-to-end B2B lead generation workflow in n8n that ingests industry filters via webhook, queries Apollo API for decision-makers, enriches contact data, and stores structured leads in Supabase.',
    tech: 'n8n, Apollo API, Supabase, Gmail API, GPT-4o-mini',
    links: {
      github: 'https://github.com/example/smart-reach',
      demo: 'https://example.com/smart-reach-demo',
    },
  },
  {
    name: 'AI-Powered Garbage Classification System with IoT Implementation',
    description: 'Designed a real-time waste classification system using a MobileNetV2 model trained on 14,000 labeled images and optimized with TensorFlow Lite. Deployed on Raspberry Pi with OpenCV-based video frame processing.',
    tech: 'Python, TensorFlow, Keras, TensorFlow Lite, OpenCV, Flask, Raspberry Pi',
    links: {
      video: 'https://www.linkedin.com/posts/data-vidwan123_internspotlight-aiforgood-smartwaste-activity-7331196383820976130-j2J4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEItjloBBywIwoZEquRkylnLA9GfSKKWWc8',
      article: 'https://www.ijirmps.org/research-paper.php?id=232392',
    },
  },
  {
    name: 'AI Powered Voice-Based RAG Agent',
    description: 'Voice-powered RAG system that processes PDF documents into a vector database (Qdrant) and answers questions using voice input/output with OpenAI\'s GPT-4o and TTS models.',
    tech: 'Streamlit, Qdrant, FastEmbed embeddings, LangChain, OpenAI (GPT-4o, Whisper, TTS)',
    links: {
      video: 'https://youtube.com/example-rag-agent',
      article: 'https://example.com/rag-agent-article',
    },
  },
]

const summaryParagraphs = [
  `Passionate AI Engineer crafting intelligent solutions that transform ideas into reality. Specialized in building RAG-powered applications, intelligent automation systems, and voice-enabled AI agents that revolutionize how businesses operate.`,
  `Expert in deploying cutting-edge AI models to edge devices like Raspberry Pi and Luckfox, leveraging TensorFlow, Keras, OpenCV, MediaPipe, and TFLite for real-time performance. Master of LangChain and Streamlit for creating intuitive AI interfaces.`,
]

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        })
        // Show success message
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully! I\'ll get back to you soon.',
        })
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again.',
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'An error occurred. Please try again later.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    // Clear status message when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' })
    }
  }

  return (
    <main className="relative overflow-hidden">
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        
        {/* Hero Section */}
        <Hero />

        {/* About Section with 4 Cards */}
        <section id="about" className="min-h-screen py-20 px-6 sm:px-8 lg:px-12 xl:px-16 relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white uppercase">
                ABOUT
              </h2>
            </motion.div>

            {/* Summary Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-16 space-y-6 text-lg text-white/80"
            >
              {summaryParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </motion.div>

            {/* 4 Trust Badge Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-12"
            >
              <TrustBadges />
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="min-h-screen py-20 px-6 sm:px-8 lg:px-12 xl:px-16 relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-white uppercase">
                EXPERIENCE
              </h2>
              <p className="text-white/75">Professional journey and achievements</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Timeline />
            </motion.div>
          </div>
        </section>

        {/* Top 3 Projects Section */}
        <section id="projects" className="min-h-screen py-20 px-6 sm:px-8 lg:px-12 xl:px-16 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-white uppercase">
                TOP PROJECTS
              </h2>
              <p className="text-white/75">Innovative solutions and automation systems</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="glass-card-hover p-6 relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="relative z-10 h-full flex flex-col">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-white transition-colors leading-tight">
                      {project.name}
                    </h3>
                    <p className="text-sm text-white/75 mb-4 leading-relaxed group-hover:text-white/90 transition-colors flex-grow">
                      {project.description}
                    </p>
                    <p className="text-xs text-white/70 mb-4 group-hover:text-white/80 transition-colors">
                      <span className="font-medium">Technologies:</span> {project.tech}
                    </p>
                    {project.links && Object.keys(project.links).length > 0 && (
                      <div className="flex items-center gap-2 mt-auto pt-2 border-t border-white/10">
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                          >
                            <FiGithub className="w-4 h-4" />
                          </a>
                        )}
                        {project.links.demo && (
                          <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                          >
                            <FiExternalLink className="w-4 h-4" />
                          </a>
                        )}
                        {project.links.article && (
                          <a
                            href={project.links.article}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                          >
                            <FiFileText className="w-4 h-4" />
                          </a>
                        )}
                        {project.links.video && (
                          <a
                            href={project.links.video}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                          >
                            <FiPlay className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* See More Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex justify-center mt-12"
            >
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 px-8 py-4 backdrop-blur-xl bg-white/10 text-white border border-white/20 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 shadow-xl hover:scale-105"
              >
                <span>See More Projects</span>
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen py-20 px-6 sm:px-8 lg:px-12 xl:px-16 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-white uppercase tracking-tight">
                CONTACT
              </h2>
              <p className="text-white/75 text-sm uppercase tracking-wider">Get in touch with me</p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Contact Information Cards */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="glass-card-hover p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 glass-card">
                      <FiMail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-sm text-white/60 uppercase tracking-wider mb-1 font-code">Email</h3>
                      <a
                        href="mailto:work.avidedania@gmail.com"
                        className="text-white font-medium hover:text-white/80 transition-colors"
                      >
                        work.avidedania@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="glass-card p-6">
                  <h3 className="text-sm text-white/60 uppercase tracking-wider mb-4 font-code">Social</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 glass-card hover:bg-white/5 transition-colors"
                    >
                      <FiLinkedin className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 glass-card hover:bg-white/5 transition-colors"
                    >
                      <FiGithub className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href="https://reddit.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 glass-card hover:bg-white/5 transition-colors"
                    >
                      <SiReddit className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className="glass-card p-6"
              >
                <h3 className="text-lg font-semibold text-white uppercase tracking-wide mb-6">
                  Send Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm text-white/60 uppercase tracking-wider mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 glass-card text-white placeholder-white/40 focus:outline-none focus:bg-white/5 transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm text-white/60 uppercase tracking-wider mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 glass-card text-white placeholder-white/40 focus:outline-none focus:bg-white/5 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm text-white/60 uppercase tracking-wider mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 glass-card text-white placeholder-white/40 focus:outline-none focus:bg-white/5 transition-colors"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-white/60 uppercase tracking-wider mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 glass-card text-white placeholder-white/40 focus:outline-none focus:bg-white/5 transition-colors resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  {submitStatus.type && (
                    <div
                      className={`p-4 rounded-lg ${
                        submitStatus.type === 'success'
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : 'bg-red-500/20 text-red-400 border border-red-500/30'
                      }`}
                    >
                      {submitStatus.message}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white text-black rounded-lg border border-white font-medium hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <FiSend className="w-4 h-4" />
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
