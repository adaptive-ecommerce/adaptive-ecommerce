import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://adaptiveecommerce.com'),
  title: {
    default: 'Adaptive Ecommerce | AI-Driven Ecommerce & Digital Media Services',
    template: '%s | Adaptive Ecommerce',
  },
  description:
    'Adaptive Ecommerce LLC provides AI-driven website development, digital media production, affiliate marketing, and website monetization services for individuals, entrepreneurs, and small to medium-sized businesses.',
  keywords: [
    'ecommerce development',
    'AI website development',
    'digital media production',
    'affiliate marketing services',
    'website monetization',
    'ebook production',
    'audiobook production',
    'web application development',
    'Salt Lake City web developer',
    'Claude Code development',
  ],
  authors: [{ name: 'Adaptive Ecommerce LLC' }],
  creator: 'Adaptive Ecommerce LLC',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://adaptiveecommerce.com',
    siteName: 'Adaptive Ecommerce',
    title: 'Adaptive Ecommerce | AI-Driven Ecommerce & Digital Media Services',
    description:
      'AI-driven website development, digital media production, and affiliate marketing services for entrepreneurs and businesses.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Adaptive Ecommerce',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adaptive Ecommerce | AI-Driven Ecommerce & Digital Media Services',
    description:
      'AI-driven website development, digital media production, and affiliate marketing services.',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
