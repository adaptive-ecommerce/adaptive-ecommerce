import type { Metadata } from 'next'
import styles from './page.module.css'

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
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <span className="tag">Professional Portfolio</span>
          <h1 className={styles.heroTitle}>Todd Elledge</h1>
          <p className={styles.heroSub}>
            Ecommerce strategist, digital media producer, and web developer with extensive
            experience building revenue-generating online businesses.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.placeholder}>
            <div className={styles.placeholderIcon}>🚧</div>
            <h2>Portfolio Coming Soon</h2>
            <p>
              This section is being built out with detailed work history, case studies,
              and project examples. Check back soon.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
