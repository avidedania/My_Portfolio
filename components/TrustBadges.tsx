'use client'

import { motion } from 'framer-motion'
import { FiAward, FiCode, FiTrendingUp, FiZap } from 'react-icons/fi'
import CountUp from './CountUp'

interface TrustBadgeProps {
    icon: React.ReactNode
    value: string
    label: string
    delay?: number
}

// Helper function to parse value and determine if it's numeric
function parseValue(value: string): { isNumeric: boolean; number?: number; suffix?: string; prefix?: string } {
    // Check if it's a percentage
    if (value.includes('%')) {
        const num = parseFloat(value.replace('%', ''))
        if (!isNaN(num)) {
            return { isNumeric: true, number: num, suffix: '%' }
        }
    }
    
    // Check if it ends with +
    if (value.endsWith('+')) {
        const num = parseFloat(value.replace('+', ''))
        if (!isNaN(num)) {
            return { isNumeric: true, number: num, suffix: '+' }
        }
    }
    
    // Check if it's just a number
    const num = parseFloat(value)
    if (!isNaN(num)) {
        return { isNumeric: true, number: num }
    }
    
    return { isNumeric: false }
}

function TrustBadge({ icon, value, label, delay = 0 }: TrustBadgeProps) {
    const parsed = parseValue(value)
    
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            className="flex flex-col items-center gap-2 p-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
        >
            <div className="text-white/80 group-hover:text-white transition-colors">
                {icon}
            </div>
            <div className="text-2xl font-bold text-white">
                {parsed.isNumeric && parsed.number !== undefined ? (
                    <CountUp
                        end={parsed.number}
                        suffix={parsed.suffix || ''}
                        prefix={parsed.prefix || ''}
                        duration={2}
                        decimals={parsed.suffix === '%' ? 0 : 0}
                        startDelay={1500}
                    />
                ) : (
                    value
                )}
            </div>
            <div className="text-xs text-white/60 uppercase tracking-wider text-center">{label}</div>
        </motion.div>
    )
}

export default function TrustBadges() {
    const badges = [
        {
            icon: <FiCode className="w-6 h-6" />,
            value: '15+',
            label: 'AI Projects',
        },
        {
            icon: <FiTrendingUp className="w-6 h-6" />,
            value: '90%',
            label: 'Success Rate',
        },
        {
            icon: <FiZap className="w-6 h-6" />,
            value: 'Edge AI',
            label: 'Specialist',
        },
        {
            icon: <FiAward className="w-6 h-6" />,
            value: '2+',
            label: 'Years Exp',
        },
    ]

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {badges.map((badge, index) => (
                <TrustBadge
                    key={index}
                    icon={badge.icon}
                    value={badge.value}
                    label={badge.label}
                    delay={0.8 + index * 0.1}
                />
            ))}
        </div>
    )
}
