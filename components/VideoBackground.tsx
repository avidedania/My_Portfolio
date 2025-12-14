'use client'

import { memo } from 'react'

interface VideoBackgroundProps {
  className?: string
  style?: React.CSSProperties
  zIndex?: number
}

function VideoBackground({
  className = '',
  style,
  zIndex = -1,
}: VideoBackgroundProps) {
  return (
    <div
      className={className}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex,
        pointerEvents: 'none',
        overflow: 'hidden',
        ...style,
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <source src="/bg effect .mp4" type="video/mp4" />
      </video>
      {/* Dark overlay with 50% opacity */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
    </div>
  )
}

export default memo(VideoBackground)
