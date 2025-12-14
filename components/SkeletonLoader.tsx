'use client'

import { motion } from 'framer-motion'

interface SkeletonLoaderProps {
    variant?: 'text' | 'circular' | 'rectangular' | 'card'
    width?: string
    height?: string
    className?: string
    count?: number
}

export default function SkeletonLoader({
    variant = 'rectangular',
    width = '100%',
    height = '20px',
    className = '',
    count = 1,
}: SkeletonLoaderProps) {
    const getVariantClasses = () => {
        switch (variant) {
            case 'text':
                return 'rounded h-4'
            case 'circular':
                return 'rounded-full'
            case 'rectangular':
                return 'rounded-lg'
            case 'card':
                return 'rounded-2xl'
            default:
                return 'rounded-lg'
        }
    }

    const skeletons = Array.from({ length: count }, (_, i) => i)

    return (
        <>
            {skeletons.map((_, index) => (
                <motion.div
                    key={index}
                    className={`relative overflow-hidden bg-white/10 ${getVariantClasses()} ${className}`}
                    style={{ width, height }}
                    initial={{ opacity: 0.6 }}
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.1,
                    }}
                >
                    {/* Shimmer effect */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: index * 0.1,
                        }}
                    />
                </motion.div>
            ))}
        </>
    )
}

// Pre-built skeleton components for common use cases
export function SkeletonCard() {
    return (
        <div className="glass-card p-6 space-y-4">
            <SkeletonLoader variant="rectangular" height="200px" />
            <SkeletonLoader variant="text" width="60%" />
            <SkeletonLoader variant="text" width="80%" />
            <SkeletonLoader variant="text" width="40%" />
        </div>
    )
}

export function SkeletonProfile() {
    return (
        <div className="flex items-center gap-4">
            <SkeletonLoader variant="circular" width="60px" height="60px" />
            <div className="flex-1 space-y-2">
                <SkeletonLoader variant="text" width="150px" />
                <SkeletonLoader variant="text" width="100px" />
            </div>
        </div>
    )
}

export function SkeletonText({ lines = 3 }: { lines?: number }) {
    return (
        <div className="space-y-2">
            <SkeletonLoader variant="text" count={lines} />
        </div>
    )
}

export function SkeletonBentoGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="lg:col-span-2 lg:row-span-2">
                <SkeletonCard />
            </div>
            <div className="lg:col-span-2">
                <SkeletonCard />
            </div>
            <SkeletonCard />
            <SkeletonCard />
            <div className="lg:col-span-2">
                <SkeletonCard />
            </div>
            <div className="lg:col-span-2">
                <SkeletonCard />
            </div>
        </div>
    )
}
