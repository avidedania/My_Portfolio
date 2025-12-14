'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { FiHome, FiRefreshCw } from 'react-icons/fi'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log error to error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-6xl font-bold text-white mb-4">Oops!</h1>
        <h2 className="text-3xl font-semibold text-white/90 mb-4">Something went wrong</h2>
        <p className="text-white/70 mb-8 text-lg">
          We encountered an unexpected error. Please try again or return to the home page.
        </p>
        {process.env.NODE_ENV === 'development' && (
          <div className="mb-8 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-left">
            <p className="text-red-400 text-sm font-mono break-all">{error.message}</p>
          </div>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-white/90 transition-colors"
          >
            <FiRefreshCw className="w-5 h-5" />
            <span>Try Again</span>
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 backdrop-blur-xl bg-white/10 text-white border border-white/20 rounded-lg font-medium hover:bg-white/20 transition-colors"
          >
            <FiHome className="w-5 h-5" />
            <span>Go Home</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
