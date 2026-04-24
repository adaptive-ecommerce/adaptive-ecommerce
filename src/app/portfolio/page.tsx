import type { Metadata } from 'next'
import PortfolioClient from './PortfolioClient'

export const metadata: Metadata = {
  title: 'Portfolio — Todd Elledge',
  description: 'Professional portfolio and work history of Todd Elledge.',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

export default function PortfolioPage() {
  return <PortfolioClient />
}
