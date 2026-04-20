import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Adaptive Ecommerce Web Properties',
  description:
    'Explore the affiliate marketing and content websites owned and operated by Adaptive Ecommerce LLC — real-world examples of our digital media and affiliate marketing expertise.',
  keywords: [
    'Adaptive Ecommerce web properties',
    'affiliate marketing sites',
    'auto parts information',
    'Autopartsinformer',
  ],
}

const properties = [
  {
    name: 'AutoPartsInformer.com',
    url: 'https://autopartsinformer.com',
    category: 'Automotive Information',
    description:
      'A comprehensive automotive resource providing detailed information about auto parts, vehicle maintenance, and repair guidance. AutoPartsInformer.com helps car owners and enthusiasts make informed decisions about parts purchases and vehicle upkeep — while connecting readers with trusted retail sources through affiliate partnerships.',
    tags: ['Automotive', 'Affiliate Marketing', 'Content Site'],
  },
]

export default function WebPropertiesPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <span className="tag">Our Portfolio</span>
          <h1 className={styles.heroTitle}>
            Adaptive Ecommerce<br />
            <span style={{ color: 'var(--blue-primary)' }}>Web Properties</span>
          </h1>
          <p className={styles.heroSub}>
            We practice what we preach. The sites below are owned and operated by
            Adaptive Ecommerce — live examples of our affiliate marketing and content
            strategy in action.
          </p>
          <Link href="/affiliate-marketing" className="btn btn-secondary" style={{ alignSelf: 'flex-start' }}>
            ← Back to Affiliate Marketing
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.propertyGrid}>
            {properties.map((p) => (
              <div key={p.name} className={styles.propertyCard}>
                <div className={styles.cardTop}>
                  <div>
                    <div className={styles.tagRow}>
                      {p.tags.map((t) => (
                        <span key={t} className="tag" style={{ fontSize: '12px', padding: '3px 10px' }}>{t}</span>
                      ))}
                    </div>
                    <h2 className={styles.propertyName}>{p.name}</h2>
                    <p className={styles.category}>{p.category}</p>
                  </div>
                </div>
                <p className={styles.propertyDesc}>{p.description}</p>
                <a
                  href={p.url}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ alignSelf: 'flex-start' }}
                >
                  Visit Site →
                </a>
              </div>
            ))}
          </div>

          <div className={styles.addMoreNote}>
            <p>More web properties coming soon. <Link href="/contact">Contact us</Link> to learn about partnership opportunities.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--cream)', padding: 'var(--space-16) 0' }}>
        <div className="container">
          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-5)' }}>
            <span className="tag">Want Your Own?</span>
            <h2>Interested in Building a Similar Site?</h2>
            <p style={{ color: 'var(--muted)', fontSize: '16px' }}>
              We build affiliate and content sites for clients using the same strategies
              behind our own properties. Get in touch to discuss your niche and goals.
            </p>
            <Link href="/contact" className="btn btn-primary">Start a Conversation</Link>
          </div>
        </div>
      </section>
    </>
  )
}
