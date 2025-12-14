'use client'

import { useState } from 'react'
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiMapPin, FiSend } from 'react-icons/fi'
import { SiReddit } from 'react-icons/si'

export default function Contact() {
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
    <section id="contact" className="py-20 pt-32 px-6 sm:px-8 lg:px-12 xl:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-white uppercase tracking-tight">
            CONTACT
          </h2>
          <p className="text-white/75 text-sm uppercase tracking-wider">Get in touch with me</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information Cards */}
          <div className="space-y-6">
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

            <div className="glass-card-hover p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 glass-card">
                  <FiPhone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-sm text-white/60 uppercase tracking-wider mb-1 font-code">Phone</h3>
                  <a
                    href="tel:+919054880152"
                    className="text-white font-medium hover:text-white/80 transition-colors"
                  >
                    +91 9054880152
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card-hover p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 glass-card">
                  <FiMapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-sm text-white/60 uppercase tracking-wider mb-1 font-code">Location</h3>
                  <p className="text-white font-medium">Ahmedabad, India</p>
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
          </div>

          {/* Contact Form */}
          <div className="glass-card p-6">
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
          </div>
        </div>
      </div>
    </section>
  )
}
