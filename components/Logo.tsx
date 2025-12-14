'use client'

import Link from 'next/link'

interface LogoProps {
  showText?: boolean
  className?: string
}

export default function Logo({ showText = false, className = '' }: LogoProps) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-3 group transition-all duration-200 ${className}`}
    >
      {/* AD Logo Icon */}
      <div
        className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-200 backdrop-blur-sm"
        style={{
          fontFamily: 'var(--font-cronde), "Cronde", serif',
          letterSpacing: '0.05em',
        }}
      >
        <span className="text-white text-xl font-normal leading-none">AD</span>
      </div>

      {/* Name Text */}
      {showText && (
        <span
          className="text-white font-medium uppercase tracking-wide text-sm group-hover:text-white/90 transition-colors"
          style={{
            fontFamily: 'var(--font-cronde), "Cronde", serif',
            letterSpacing: '0.1em',
          }}
        >
          Avi Dedania
        </span>
      )}
    </Link>
  )
}
