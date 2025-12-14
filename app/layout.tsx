import type { Metadata } from 'next'
import { Montserrat, JetBrains_Mono, Anton } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import ThemeProvider from '@/components/ThemeProvider'
import VideoBackground from '@/components/VideoBackground'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['400', '600', '700'],
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

const anton = Anton({ 
  subsets: ['latin'],
  variable: '--font-anton',
  display: 'swap',
  weight: ['400'],
})

const cronde = localFont({
  src: [
    {
      path: './fonts/CRONDERegular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/CRONDEItalic.ttf',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-cronde',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://avi-dedania-portfolio.vercel.app'),
  title: {
    default: 'Avi Dedania | AI Engineer & Developer',
    template: '%s | Avi Dedania',
  },
  description: 'AI Engineer crafting intelligent solutions with RAG-powered applications, intelligent automation systems, and voice-enabled AI agents. Specialized in TensorFlow, LangChain, and edge device deployment.',
  keywords: [
    'AI Engineer',
    'Machine Learning',
    'RAG',
    'LangChain',
    'TensorFlow',
    'Next.js',
    'Portfolio',
    'AI Automation',
    'Edge Computing',
    'Raspberry Pi',
  ],
  authors: [{ name: 'Avi Dedania' }],
  creator: 'Avi Dedania',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Avi Dedania Portfolio',
    title: 'Avi Dedania | AI Engineer & Developer',
    description: 'AI Engineer crafting intelligent solutions with RAG-powered applications and automation systems.',
    images: [
      {
        url: process.env.NEXT_PUBLIC_SITE_URL 
          ? `${process.env.NEXT_PUBLIC_SITE_URL}/og-image.jpg`
          : '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Avi Dedania - AI Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Avi Dedania | AI Engineer & Developer',
    description: 'AI Engineer crafting intelligent solutions with RAG-powered applications and automation systems.',
    images: ['/og-image.jpg'],
    creator: '@avidedania',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${montserrat.variable} ${jetbrainsMono.variable} ${anton.variable} ${cronde.variable} font-montserrat`}>
        <ThemeProvider>
          <VideoBackground zIndex={-1} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

