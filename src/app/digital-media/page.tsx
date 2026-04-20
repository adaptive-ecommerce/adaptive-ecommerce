import type { Metadata } from 'next'
import Link from 'next/link'
import styles from '../services.module.css'

export const metadata: Metadata = {
  title: 'Digital Media Production — eBooks & Audiobooks',
  description:
    'Professional eBook and audiobook production for Amazon KDP and Audible. We turn your expertise and ideas into polished, revenue-generating digital products — from writing to final publication.',
  keywords: [
    'ebook production services',
    'audiobook production',
    'Amazon KDP publishing',
    'Audible ACX production',
    'digital book publishing',
    'self-publishing services',
    'ebook formatting',
    'passive income digital products',
  ],
  openGraph: {
    title: 'Digital Media Production — eBooks & Audiobooks | Adaptive Ecommerce',
    description: 'Turn your expertise into Amazon eBooks and audiobooks that generate passive income.',
  },
}

const process = [
  { step: '01', title: 'Concept & Outline', body: 'We work with you to define your topic, audience, and goals — then build a compelling structure that keeps readers engaged from start to finish.' },
  { step: '02', title: 'Content Development', body: 'Our AI-assisted writing process produces well-researched, authoritative content in your voice. You review and approve every chapter before moving forward.' },
  { step: '03', title: 'Design & Formatting', body: 'eBooks are formatted for Kindle and PDF with professional typography, layout, and cover design that stands out in Amazon search results.' },
  { step: '04', title: 'Audio Production', body: 'Audiobooks are produced with clear, professional narration — either AI-synthesized or recorded — then mastered to ACX technical standards.' },
  { step: '05', title: 'Publishing & Launch', body: 'We handle the entire Amazon KDP and Audible/ACX upload process, including metadata optimization to maximize discoverability in search.' },
  { step: '06', title: 'Ongoing Optimization', body: 'After launch we monitor performance, refine keywords and descriptions, and advise on pricing strategies to keep sales growing.' },
]

const formats = [
  {
    icon: '📖',
    title: 'Kindle eBooks (KDP)',
    items: [
      'Nonfiction guides, how-to books, and educational content',
      'Fiction in popular genres (romance, thriller, self-help, and more)',
      'Short-form Kindle Singles and lead magnets',
      'Complete KDP Direct Publishing setup and category selection',
    ],
  },
  {
    icon: '🎧',
    title: 'Audiobooks (ACX / Audible)',
    items: [
      'Full audiobook production from existing manuscripts',
      'AI-voice narration with natural, engaging delivery',
      'ACX-compliant mastering and quality review',
      'Audible and iTunes distribution through Amazon ACX',
    ],
  },
]

const benefits = [
  { title: 'Passive Income', body: 'Once published, your book sells 24/7 — generating revenue while you sleep, with no inventory or shipping.' },
  { title: 'Authority Building', body: 'A published book instantly establishes you as an expert in your field, opening doors to speaking, consulting, and partnership opportunities.' },
  { title: 'Massive Reach', body: 'Amazon has over 300 million active customers worldwide. Your book can reach readers across the globe from day one.' },
  { title: 'Low Overhead', body: 'Digital publishing eliminates printing, warehousing, and distribution costs — keeping your margins high.' },
]

export default function DigitalMediaPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero} style={{ background: 'linear-gradient(160deg, var(--amber-light) 0%, var(--warm-white) 55%)' }}>
        <div className="container">
          <span className="tag">Digital Media Production</span>
          <h1 className={styles.heroTitle}>
            Turn Your Knowledge Into<br />
            <span style={{ color: 'var(--amber-dark)' }}>Income-Generating Books</span>
          </h1>
          <p className={styles.heroSub}>
            We produce professional eBooks and audiobooks for Amazon KDP and Audible —
            handling everything from concept to publication so you can start earning
            passive income without the complexity.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/contact" className="btn btn-primary">Start Your Book Project</Link>
            <Link href="#process" className="btn btn-secondary">See the Process</Link>
          </div>
        </div>
      </section>

      {/* Format cards */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="tag">What We Produce</span>
            <h2>eBooks & Audiobooks Built to Sell</h2>
            <p>Two powerful formats, one streamlined production process — optimized for Amazon's massive marketplace.</p>
          </div>
          <div className={styles.twoCol}>
            {formats.map((f) => (
              <div key={f.title} className="card" style={{ borderRadius: 'var(--r-xl)' }}>
                <div className={styles.featureIcon}>{f.icon}</div>
                <h3 style={{ marginBottom: 'var(--space-4)' }}>{f.title}</h3>
                <ul className={styles.bulletList}>
                  {f.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className={`section ${styles.altBg}`} id="process">
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="tag">Our Process</span>
            <h2>From Idea to Amazon Bestseller</h2>
            <p>A proven six-step process that takes your concept to a published, revenue-generating product.</p>
          </div>
          <div className={styles.processGrid}>
            {process.map((p) => (
              <div key={p.step} className={styles.processCard}>
                <span className={styles.processStep}>{p.step}</span>
                <h4>{p.title}</h4>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="tag">Why Digital Publishing</span>
            <h2>The Case for Digital Products</h2>
          </div>
          <div className={styles.featureGrid}>
            {benefits.map((b) => (
              <div key={b.title} className={styles.benefitCard}>
                <h3 className={styles.featureTitle}>{b.title}</h3>
                <p style={{ fontSize: '15px' }}>{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaBanner} style={{ background: 'var(--amber)' }}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div>
              <h2>Ready to Publish Your Book?</h2>
              <p>Contact us to discuss your topic, timeline, and goals. First consultation is free.</p>
            </div>
            <Link href="/contact" className="btn" style={{ background: '#fff', color: 'var(--amber-dark)', fontWeight: 700 }}>
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
