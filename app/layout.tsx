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
  title: 'Avi Dedania',
  description: 'Modern developer portfolio showcasing projects and skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${jetbrainsMono.variable} ${anton.variable} ${cronde.variable} font-montserrat`}>
        <ThemeProvider>
          <VideoBackground zIndex={-1} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

