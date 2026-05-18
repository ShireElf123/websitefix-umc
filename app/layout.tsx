import React from "react"
import type { Metadata } from 'next'
import { Cinzel, Montserrat, Playfair_Display } from 'next/font/google'

import './globals.css'

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat',
  weight: ['100', '300', '400', '700', '900']
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  weight: ['400', '700', '900'],
  style: ['normal', 'italic']
})

const cinzel = Cinzel({ 
  subsets: ["latin"],
  variable: '--font-cinzel',
  weight: ['400', '700', '900']
})

export const metadata: Metadata = {
  title: 'U.M.C | The Art of Stewardship',
  description: 'Uplifting Money Connections - Redefining the architecture of wealth through wisdom, connection, and spiritual stewardship.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${montserrat.variable} ${playfair.variable} ${cinzel.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
