'use client'

import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiPlay, FiFileText } from 'react-icons/fi'

const projects = [
  {
    name: 'Smart Reach: Covers scraping, personalize outreach, and response tracking',
    description: 'Built an end-to-end B2B lead generation workflow in n8n that ingests industry filters via webhook, queries Apollo API for decision-makers, enriches contact data, and stores structured leads in Supabase. Implemented automated email reply monitoring with Gmail and Supabase, using GPT-4o-mini to classify incoming responses into priority levels (High/Medium/Low) based on urgency and business impact, then persisting results back to lead records. Designed a timezone-aware follow-up engine that detects local working hours, schedules follow-ups during business hours, and prevents duplicate sends through status tracking.',
    tech: 'n8n, Apollo API, Supabase, Gmail API, GPT-4o-mini, Google Maps Geocoding, Timezone APIs, Python',
    links: {
      github: 'https://github.com/example/smart-reach',
      demo: 'https://example.com/smart-reach-demo',
    },
  },
  {
    name: 'AI-Powered Garbage Classification System with IoT Implementation',
    description: 'Designed a real-time waste classification system using a MobileNetV2 model trained on 14,000 labeled images and optimized with TensorFlow Lite. Deployed the solution on Raspberry Pi with OpenCV-based video frame processing and servo motor control for object segregation.',
    tech: 'Python, TensorFlow, Keras, TensorFlow Lite, OpenCV, Flask, IP Webcam, Raspberry Pi, Arduino Leonardo, SG90 Servo',
    links: {
      video: 'https://www.linkedin.com/posts/data-vidwan123_internspotlight-aiforgood-smartwaste-activity-7331196383820976130-j2J4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEItjloBBywIwoZEquRkylnLA9GfSKKWWc8',
      article: 'https://www.ijirmps.org/research-paper.php?id=232392',
    },
  },
  {
    name: 'ScriptToScreen - Clearly communicates the function',
    description: 'Accepts scripts via webhook, generates HD avatar videos with HeyGen API. Pre-configured avatars and AI voices with customizable speed using N8N. Benefit: Automates video creation for marketing, training, and sales at scale.',
    tech: 'N8N, HeyGen API',
    links: {
      demo: 'https://example.com/script-to-screen-demo',
    },
  },
  {
    name: 'WhatsApp Bulk Message Automation',
    description: 'Built an end-to-end WhatsApp bulk messaging workflow in n8n that ingests contact lists from Google Sheets, integrates with WhatsApp Business API, and orchestrates batch delivery of personalized messages to thousands of recipients with dynamic variable substitutions. Implemented intelligent message scheduling with rate-limiting, delivery status tracking, and conditional retry logic to handle failures, invalid numbers, and opted-out contacts while ensuring compliance with WhatsApp API constraints. Designed a campaign analytics pipeline that persists delivery metrics and engagement data back to Google Sheets, enabling real-time performance tracking, contact segmentation by outcome, and A/B testing of message templates.',
    tech: 'n8n, WhatsApp Business API, Google Sheets API, Webhooks, Rate-limiting, Status tracking, JSON parsing',
    links: {
      github: 'https://github.com/example/whatsapp-automation',
    },
  },
  {
    name: 'Live Camera Hand Gesture Detection for Interactive Drawing',
    description: 'Developed a touchless drawing app using camera input to track index finger position for real-time drawing and erasing. Incorporated face and hand mesh detection to improve gesture accuracy and responsiveness.',
    tech: 'Python, OpenCV, MediaPipe, NumPy',
    links: {
      video: 'https://youtube.com/example-hand-gesture',
    },
  },
  {
    name: 'RedditToLinkedIn: AI Agent News Automation Platform',
    description: 'Intelligent Filtering — AI identifies only high-quality, relevant Reddit posts automatically. Smart Content Conversion — Transforms Reddit discussions into polished LinkedIn content with hooks and hashtags in seconds. Automated Distribution — Delivers ready-to-post content to your inbox daily with zero manual effort.',
    tech: 'n8n, Reddit API, OpenAI GPT-4o, Telegram API, OAuth 2.0',
    links: {
      github: 'https://github.com/example/reddit-linkedin',
      article: 'https://example.com/reddit-linkedin-article',
    },
  },
  {
    name: 'Bhagavad Gita Conversational AI Assistant',
    description: 'Created a conversational AI chatbot with Streamlit that uses the Hugging Face Mistral-7B, LangChain, and FAISS vector database to provide answers based on scripture and semantic search. In order to provide precise multi-turn Q&A with source references, conversational memory, embeddings, text preprocessing, and PDF ingestion were implemented.',
    tech: 'Python, Streamlit, LangChain, Hugging Face Transformers, FAISS, LLMs',
    links: {
      demo: 'https://example.com/gita-assistant-demo',
    },
  },
  {
    name: 'AI Powered Voice-Based RAG Agent',
    description: 'Voice-powered RAG system that processes PDF documents into a vector database (Qdrant) and answers questions using voice input/output with OpenAI\'s GPT-4o and TTS models. Streamlit web app that lets users upload PDFs, ask questions via voice recording or text input, and receive both text and audio responses generated from semantically searched document chunks. End-to-end voice assistant that transcribes voice queries with Whisper, retrieves relevant document sections using embeddings, generates answers with AI agents, and converts responses to natural speech using OpenAI\'s voice synthesis.',
    tech: 'Streamlit, Qdrant, FastEmbed embeddings, LangChain, OpenAI (GPT-4o, Whisper, TTS), Python',
    links: {
      video: 'https://youtube.com/example-rag-agent',
      article: 'https://example.com/rag-agent-article',
    },
  },
  {
    name: 'Pose-Controlled Game using MediaPipe & PyAutoGUI',
    description: 'Built a webcam-based interface for gesture-controlled gaming using real-time pose detection. Tracked shoulder movement with MediaPipe and simulated keyboard inputs using PyAutoGUI.',
    tech: 'Python, OpenCV, MediaPipe, PyAutoGUI',
    links: {
      github: 'https://github.com/example/pose-game',
    },
  },
  {
    name: 'Real-Time Face Recognition Attendance System',
    description: 'Implemented a face recognition system using webcam stream, MTCNN for detection, and FaceNet embeddings for identification. Logged attendance based on cosine similarity comparison with a known face database in real-time.',
    tech: 'Python, OpenCV, MTCNN, FaceNet, NumPy, Pandas, scikit-learn',
    links: {
      github: 'https://github.com/example/face-attendance',
    },
  },
  {
    name: 'Programming Funda: Learning Platform with MCQs',
    description: 'Built a web-based platform for programming tutorials and MCQ-based exams with profile and score management. Enabled admin control to manage users, track results, and maintain question sets.',
    tech: 'HTML, CSS, PHP, MySQL',
    links: {
      github: 'https://github.com/example/programming-funda',
      demo: 'https://example.com/programming-funda-demo',
    },
  },
  {
    name: 'Smart Google Sheet Change Tracker',
    description: 'Engineered a Python-based solution to detect and respond to changes in Google Sheets with automated email alerts. Used threading for background monitoring and Gmail SMTP to deliver real-time structured notifications.',
    tech: 'Python, Pandas, smtplib, threading, Gmail SMTP',
    links: {
      github: 'https://github.com/example/sheet-tracker',
    },
  },
  {
    name: 'NLP-Based Text Summarizer with spaCy',
    description: 'Created a tool to summarize paragraphs by scoring and selecting top-ranked sentences based on word frequency. Applied NLP techniques like stopword removal and frequency analysis using spaCy for effective summarization.',
    tech: 'Python, spaCy, NLP, TextRank (manual scoring)',
    links: {
      github: 'https://github.com/example/text-summarizer',
    },
  },
]

// Expert UI/UX sizing: Optimized for slick layout with small cards next to each other
// Creating efficient grid flow with proper size distribution
const projectSizeMap: Record<number, string> = {
  // Index 0: Smart Reach - Very long, complex (600+ chars), 2 links - Feature prominently
  0: 'medium-large', // 2x2 - Hero project, creates focal point

  // Index 1: AI Garbage - Medium-long (300+ chars), 2 links (video + article) - Important
  1: 'medium', // 2x1 - Good visibility, balanced

  // Index 2: ScriptToScreen - Short (200 chars), 1 link - Small card
  2: 'small', // 1x1 - Will sit next to other small cards

  // Index 3: WhatsApp Bulk - Very long (700+ chars), 1 link - Feature prominently
  3: 'medium-large', // 2x2 - Major project, visual anchor

  // Index 4: Hand Gesture - Short-medium (200+ chars), 1 link - Small card
  4: 'small', // 1x1 - Will sit next to ScriptToScreen

  // Index 5: RedditToLinkedIn - Medium (300+ chars), 2 links - Standard
  5: 'medium', // 2x1 - Balanced

  // Index 6: Bhagavad Gita - Medium-long (400+ chars), 1 link - Good visibility
  6: 'medium', // 2x1 - Prominent

  // Index 7: Voice RAG - Very long (600+ chars), 2 links - Feature prominently
  7: 'medium-large', // 2x2 - Complex project, deserves space

  // Index 8: Pose Game - Short (150 chars), 1 link - Small card
  8: 'small', // 1x1 - Will sit next to other small cards

  // Index 9: Face Recognition - Medium (250+ chars), 1 link - Small card
  9: 'small', // 1x1 - Will sit next to Pose Game

  // Index 10: Programming Funda - Medium (250+ chars), 2 links - Good visibility (moved up)
  10: 'medium', // 2x1 - Left side

  // Index 11: Sheet Tracker - Medium (250+ chars), 1 link - Small card (moved to right)
  11: 'small', // 1x1 - Right side, will sit next to NLP

  // Index 12: Text Summarizer - Medium (250+ chars), 1 link - Small card (moved to right)
  12: 'small', // 1x1 - Right side, will sit next to Sheet Tracker
}

function getCardSize(project: typeof projects[0], index: number): string {
  // Use manual assignment for optimal visual balance
  return projectSizeMap[index] || 'medium'
}

// Map size to Tailwind classes
function getSizeClasses(size: string): string {
  switch (size) {
    case 'medium-large':
      return 'lg:col-span-2 lg:row-span-2' // 2 cols, 2 rows - bit larger
    case 'medium':
      return 'lg:col-span-2' // 2 cols, 1 row
    case 'medium-small':
      return 'lg:col-span-2' // 2 cols, 1 row (compact)
    case 'small':
    default:
      return '' // 1 col, 1 row
  }
}

// Get text size classes based on card size - Optimized for readability and hierarchy
function getTextSizeClasses(size: string): { title: string; description: string } {
  switch (size) {
    case 'medium-large':
      return { title: 'text-xl', description: 'text-base' } // Larger description for 2x2 cards
    case 'medium':
      return { title: 'text-lg', description: 'text-sm' } // Standard sizing
    case 'medium-small':
      return { title: 'text-base', description: 'text-sm' } // Compact but readable
    case 'small':
    default:
      return { title: 'text-base', description: 'text-sm' } // Efficient sizing
  }
}

// Get padding based on size
function getPaddingClasses(size: string): string {
  switch (size) {
    case 'medium-large':
      return 'p-7' // Bit more padding
    case 'medium':
      return 'p-6' // Standard padding
    case 'medium-small':
      return 'p-5' // Slightly less padding
    case 'small':
    default:
      return 'p-5' // Standard padding
  }
}

export default function ProjectsBentoGrid() {
  // Calculate sizes for all projects with index for variety
  const projectsWithSizes = projects.map((project, index) => ({
    ...project,
    size: getCardSize(project, index),
  }))

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
            PROJECTS
          </h2>
          <p className="text-white/75">Innovative solutions and automation systems</p>
        </motion.div>

        {/* Bento Grid - Optimized for efficient card placement, small cards next to each other */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" style={{ gridAutoRows: 'auto', gridAutoFlow: 'row dense' }}>
          {projectsWithSizes.map((project, index) => {
            const sizeClasses = getSizeClasses(project.size)
            const textClasses = getTextSizeClasses(project.size)
            const paddingClasses = getPaddingClasses(project.size)
            const shouldClamp = project.size === 'small' || project.size === 'medium-small'

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                whileHover={{ scale: 1.02, y: -4 }}
                className={`${sizeClasses} ${paddingClasses} glass-card-hover relative overflow-hidden group`}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="relative z-10 h-full flex flex-col">
                  <h3 className={`${textClasses.title} font-semibold text-white mb-3 group-hover:text-white transition-colors leading-tight`}>
                    {project.name}
                  </h3>
                  <p className={`${textClasses.description} text-white/75 mb-4 leading-relaxed group-hover:text-white/90 transition-colors flex-grow ${shouldClamp ? 'line-clamp-3' : ''
                    }`}>
                    {project.description}
                  </p>
                  <p className={`text-xs text-white/70 mb-4 group-hover:text-white/80 transition-colors ${shouldClamp ? 'line-clamp-2' : ''
                    }`}>
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
                          onClick={(e) => e.stopPropagation()}
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
                          onClick={(e) => e.stopPropagation()}
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
                          onClick={(e) => e.stopPropagation()}
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
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FiPlay className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

