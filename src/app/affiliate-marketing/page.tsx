import type { Metadata } from 'next'
import Link from 'next/link'
import styles from '../services.module.css'

export const metadata: Metadata = {
  title: 'Affiliate Marketing & Website Monetization Services',
  description:
    'Build profitable affiliate marketing websites or monetize your existing blog or web business. We create revenue strategies and implement systems that generate income around the clock.',
  keywords: [
    'affiliate marketing services',
    'website monetization',
    'affiliate site development',
    'blog monetization',
    'Amazon Associates affiliate',
    'passive income website',
    'niche site development',
    'website revenue strategy',
  ],
  openGraph: {
    title: 'Affiliate Marketing & Monetization | Adaptive Ecommerce',
    description: 'Build affiliate sites or monetize your existing website with expert strategy and implementation.',
  },
}

const services = [
  {
    icon: '🌐',
    title: 'Affiliate Site Development',
    body: 'We research profitable niches, identify high-converting affiliate programs, and build complete content-driven websites designed to rank in Google and generate consistent commissions.',
    items: [
      'Niche and keyword research to find low-competition, high-value opportunities',
      'SEO-optimized content architecture and site structure',
      'Product review, comparison, and "best of" page frameworks that convert',
      'Amazon Associates, ShareASale, CJ, and program-specific integrations',
    ],
  },
  {
    icon: '💰',
    title: 'Website Monetization Consulting',
    body: 'Already have a blog, website, or web business? We audit your existing traffic and content, then implement monetization strategies to unlock revenue you may be leaving on the table.',
    items: [
      'Full monetization audit: identifying your best revenue opportunities',
      'Affiliate program matching — finding the right programs for your audience',
      'Display advertising setup and optimization (Google AdSense, Mediavine, AdThrive)',
      'Digital product and email list monetization strategies',
    ],
  },
]

const strategies = [
  { title: 'Amazon Associates', body: 'The most trusted affiliate program in the world — we build sites optimized to convert Amazon product traffic into consistent commissions.' },
  { title: 'Niche Affiliate Sites', body: 'Purpose-built websites targeting specific audiences with high purchase intent — designed to rank and earn from day one.' },
  { title: 'Content Monetization', body: 'Turn your existing blog traffic into revenue through strategic affiliate placement, email capture, and product recommendations.' },
  { title: 'Ad Network Optimization', body: 'Maximize RPM from display advertising by improving user experience, page speed, and ad placement using data-driven testing.' },
  { title: 'Email List Revenue', body: 'Build and monetize an email list as a direct channel to your audience — often the highest ROI channel for affiliate marketers.' },
  { title: 'Product Comparison Funnels', body: 'Engineered comparison content that captures buyers at the decision stage — consistently the highest-converting affiliate content format.' },
]

export default function AffiliateMarketingPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero} style={{ background: 'linear-gradient(160deg, #F0F9F1 0%, var(--warm-white) 55%)' }}>
        <div className="container">
          <span className="tag">Affiliate Marketing & Monetization</span>
          <h1 className={styles.heroTitle}>
            Build Websites That<br />
            <span style={{ color: '#3A8F4A' }}>Work While You Sleep</span>
          </h1>
          <p className={styles.heroSub}>
            We create profitable affiliate marketing sites from scratch and help existing
            website owners unlock the revenue potential already sitting in their traffic.
            Real income strategies backed by proven execution.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/contact" className="btn btn-primary">Discuss Your Goals</Link>
            <Link href="/affiliate-marketing/web-properties" className="btn btn-secondary">View Our Properties</Link>
          </div>
        </div>
      </section>

      {/* Two main services */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="tag">Our Services</span>
            <h2>Two Ways We Help You Earn Online</h2>
            <p>Whether starting from zero or building on existing traffic, we have a path to monetization for you.</p>
          </div>
          <div className={styles.serviceDetailGrid}>
            {services.map((s) => (
              <div key={s.title} className={`card ${styles.serviceDetailCard}`} style={{ borderRadius: 'var(--r-xl)' }}>
                <div className={styles.featureIcon}>{s.icon}</div>
                <h3>{s.title}</h3>
                <p style={{ marginBottom: 'var(--space-4)' }}>{s.body}</p>
                <ul className={styles.bulletList}>
                  {s.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategies */}
      <section className={`section ${styles.altBg}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="tag">Revenue Strategies</span>
            <h2>How We Generate Affiliate Revenue</h2>
            <p>A multi-channel approach that builds diversified, sustainable income streams.</p>
          </div>
          <div className={styles.featureGrid}>
            {strategies.map((s) => (
              <div key={s.title} className={styles.benefitCard}>
                <h3 className={styles.featureTitle}>{s.title}</h3>
                <p style={{ fontSize: '15px' }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Web Properties link */}
      <section className="section">
        <div className="container">
          <div className={styles.webPropsCallout}>
            <div>
              <span className="tag">Our Portfolio</span>
              <h2 style={{ marginTop: 'var(--space-3)' }}>See Our Web Properties in Action</h2>
              <p style={{ marginTop: 'var(--space-3)', color: 'var(--muted)', maxWidth: '540px' }}>
                We don't just advise — we practice what we preach. Visit our Web Properties page
                to see the affiliate and content sites we own and operate.
              </p>
            </div>
            <Link href="/affiliate-marketing/web-properties" className="btn btn-primary">
              View Web Properties →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaBanner} style={{ background: '#3A8F4A' }}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div>
              <h2>Ready to Start Earning Online?</h2>
              <p>Let's talk about your goals and map out a monetization strategy that fits your situation.</p>
            </div>
            <Link href="/contact" className="btn" style={{ background: '#fff', color: '#3A8F4A', fontWeight: 700 }}>
              Get a Free Strategy Call
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
