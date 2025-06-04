// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IvyCounsel - Unleash Your Potential',
  description: 'Empowering Minds, Shaping Futures. Transform your educational journey with our innovative programs designed to unlock your full potential.',
  keywords: 'education, university, college, learning, courses, programs',
  authors: [{ name: 'IvyCounsel' }],
  
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
   maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}