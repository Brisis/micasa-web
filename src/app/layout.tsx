import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { logoHome } from '@/../public/assets'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Micasa',
  description: 'Micasa Listings - Affordable Housing Solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href={logoHome.src} type="image/x-icon" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
