import React from "react"
import type { Metadata } from 'next'
import { Inter, Playfair_Display, Cormorant_Garamond, Outfit } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ["latin"] });
const _playfair = Playfair_Display({ subsets: ["latin"] });
const _cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "600"] });
const _outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "500"] });

export const metadata: Metadata = {
  title: 'Rhavynn Drummer | Casting Director & Coach',
  description: 'I help actors stop guessing and start winning. Learn what it takes to get hired from someone who has spent years in the casting room.',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased overflow-x-hidden`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
