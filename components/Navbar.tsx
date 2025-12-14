'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Experience', href: '/experience' },
  { name: 'Projects', href: '/projects' },
  { name: 'Skills', href: '/skills' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMouseNearTop, setIsMouseNearTop] = useState(false)
  const pathname = usePathname()

  // Handle scroll-based visibility
  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 10) {
        // Always show navbar at the top
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide navbar (unless mouse is near top)
        if (!isMouseNearTop) {
          setIsVisible(false)
          setIsMobileMenuOpen(false) // Close mobile menu when hiding
        }
      } else {
        // Scrolling up - show navbar
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', controlNavbar)
    return () => window.removeEventListener('scroll', controlNavbar)
  }, [lastScrollY, isMouseNearTop])

  // Handle mouse position for cursor-triggered navbar
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mouseY = e.clientY
      const threshold = 100 // Show navbar when cursor is within 100px of top

      if (mouseY <= threshold) {
        setIsMouseNearTop(true)
        setIsVisible(true)
      } else {
        setIsMouseNearTop(false)
        // Only hide if we're not at the top of the page
        if (window.scrollY >= 10) {
          setIsVisible(false)
        }
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 sm:px-8 lg:px-12 xl:px-16 py-3 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
    >
      {/* Top glow line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Glass Container */}
        <div className="relative backdrop-blur-xl bg-black/20 border border-white/10 rounded-full px-6 py-2.5 shadow-lg">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="relative px-4 py-2 text-sm font-medium uppercase tracking-wide transition-colors duration-200 text-white hover:text-white/90"
            >
              <span 
                className="relative z-10"
                style={{ 
                  fontFamily: 'var(--font-cronde), "Cronde", serif',
                  letterSpacing: '0.1em',
                  fontSize: 'inherit'
                }}
              >
                AVI DEDANIA
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => {
                const isActive = pathname === item.href
                const isHovered = hoveredIndex === index

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="relative px-4 py-2 text-sm font-medium uppercase tracking-wide transition-colors duration-200"
                  >
                    {/* Background pill for active/hover */}
                    {(isActive || isHovered) && (
                      <motion.div
                        layoutId="navbar-pill"
                        className={`absolute inset-0 rounded-full ${isActive
                          ? 'bg-white/10 border border-white/20'
                          : 'bg-white/5 border border-white/10'
                          }`}
                        initial={false}
                        transition={{
                          type: 'spring',
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}

                    {/* Text */}
                    <span
                      className={`relative z-10 ${isActive
                        ? 'text-white font-semibold'
                        : isHovered
                          ? 'text-white'
                          : 'text-white/90'
                        }`}
                    >
                      {item.name}
                    </span>
                  </Link>
                )
              })}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-full text-white/90 hover:bg-white/5 hover:text-white transition-all duration-200"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <FiX className="w-5 h-5" />
                ) : (
                  <FiMenu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 backdrop-blur-xl bg-black/20 border border-white/10 rounded-3xl px-6 py-4 shadow-lg"
          >
            <div className="space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 text-sm font-medium uppercase tracking-wide rounded-2xl transition-all duration-200 ${isActive
                      ? 'bg-white/10 text-white border border-white/20'
                      : 'text-white/90 hover:bg-white/5 hover:text-white'
                      }`}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
