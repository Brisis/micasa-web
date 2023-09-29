import './globals.css'
import type { Metadata } from 'next'
import { Public_Sans } from 'next/font/google'
import { logoHome } from '@/../public/assets'

const publicSans = Public_Sans({
  subsets: ['latin'],
  display: 'swap',
})

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
    <html lang="en" className="sm:scroll-smooth">
      <link rel="shortcut icon" href={logoHome.src} type="image/x-icon" />
      <body>{children}</body>
    </html>
  )
}
