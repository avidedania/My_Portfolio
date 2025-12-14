'use client'

import { useState, useEffect, useRef } from 'react'

interface LogoItem {
  node?: React.ReactNode
  src?: string
  alt?: string
  title?: string
  href?: string
}

interface LogoLoopProps {
  logos: LogoItem[]
  speed?: number
  direction?: 'left' | 'right' | 'up' | 'down'
  logoHeight?: number
  gap?: number
  hoverSpeed?: number
  scaleOnHover?: boolean
  fadeOut?: boolean
  fadeOutColor?: string
  ariaLabel?: string
}

export default function LogoLoop({
  logos,
  speed = 100,
  direction = 'left',
  logoHeight = 48,
  gap = 40,
  hoverSpeed = 0,
  scaleOnHover = false,
  fadeOut = false,
  fadeOutColor = '#000000',
  ariaLabel = 'Logo carousel',
}: LogoLoopProps) {
  const [isHovered, setIsHovered] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos]

  const isHorizontal = direction === 'left' || direction === 'right'
  const isVertical = direction === 'up' || direction === 'down'

  // Calculate animation duration based on speed
  const currentSpeed = isHovered && hoverSpeed !== undefined && hoverSpeed > 0 ? hoverSpeed : speed
  const animationDuration = `${100000 / currentSpeed}s`

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    height: isVertical ? `${logoHeight * 2}px` : 'auto',
  }

  const getAnimationName = () => {
    if (direction === 'left') return 'scrollLeft'
    if (direction === 'right') return 'scrollRight'
    if (direction === 'up') return 'scrollUp'
    return 'scrollDown'
  }

  const contentStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: isHorizontal ? 'row' : 'column',
    gap: `${gap}px`,
    alignItems: 'center',
    width: isHorizontal ? 'fit-content' : '100%',
    height: isVertical ? 'fit-content' : 'auto',
    animation: `${getAnimationName()} ${animationDuration} linear infinite`,
    animationPlayState: isHovered && hoverSpeed === 0 ? 'paused' : 'running',
  }

  const logoStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: `${logoHeight}px`,
    width: isHorizontal ? 'auto' : '100%',
    flexShrink: 0,
    transition: scaleOnHover ? 'transform 0.3s ease' : 'none',
  }

  const fadeStyle: React.CSSProperties = fadeOut
    ? {
        maskImage: isHorizontal
          ? `linear-gradient(to right, transparent, ${fadeOutColor}, ${fadeOutColor}, transparent)`
          : `linear-gradient(to bottom, transparent, ${fadeOutColor}, ${fadeOutColor}, transparent)`,
        WebkitMaskImage: isHorizontal
          ? `linear-gradient(to right, transparent, ${fadeOutColor}, ${fadeOutColor}, transparent)`
          : `linear-gradient(to bottom, transparent, ${fadeOutColor}, ${fadeOutColor}, transparent)`,
      }
    : {}

  return (
    <div
        style={containerStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label={ariaLabel}
      >
        <div
          ref={contentRef}
          style={{ ...contentStyle, ...fadeStyle }}
          className="will-change-transform"
        >
          {duplicatedLogos.map((logo, index) => {
            const content = logo.node || (
              logo.src ? (
                <img
                  src={logo.src}
                  alt={logo.alt || logo.title || ''}
                  style={{ height: '100%', width: 'auto', objectFit: 'contain' }}
                />
              ) : null
            )

            const logoElement = logo.href ? (
              <a
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...logoStyle, textDecoration: 'none', color: 'inherit' }}
                className={scaleOnHover ? 'hover:scale-110 transition-transform' : ''}
              >
                {content}
              </a>
            ) : (
              <div
                style={logoStyle}
                className={scaleOnHover ? 'hover:scale-110 transition-transform' : ''}
              >
                {content}
              </div>
            )

            return <div key={index}>{logoElement}</div>
          })}
        </div>
      </div>
  )
}

