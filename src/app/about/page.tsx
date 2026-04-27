import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Adaptive Ecommerce is an AI-driven digital commerce and media company helping individuals, entrepreneurs, and small to medium-sized businesses build and grow their online presence.',
  openGraph: {
    title: 'About Adaptive Ecommerce',
    description:
      'Learn about Adaptive Ecommerce — our mission, our services, and how we help businesses thrive online.',
  },
}

const values = [
  {
    icon: '🎯',
    title: 'Results-Driven',
    body: 'Everything we do is measured by one standard: does it help your business grow? We focus on outcomes, not activity.',
  },
  {
    icon: '🤖',
    title: 'AI-Powered',
    body: 'We leverage the latest artificial intelligence tools and workflows to deliver faster, smarter results than traditional approaches.',
  },
  {
    icon: '🤝',
    title: 'Personal Partnership',
    body: 'As a boutique agency, you work directly with experienced professionals — not junior staff or overseas teams.',
  },
  {
    icon: '🌱',
    title: 'Built for Growth',
    body: 'We build solutions designed to scale with your business — whether you\'re just starting out or ready to expand.',
  },
]

const services = [
  {
    title: 'Website & Web Application Development',
    description:
      'From simple professional websites to complex web applications, we build fast, modern, SEO-optimized digital experiences tailored to your goals and budget.',
    href: '/web-development',
  },
  {
    title: 'Digital Publishing Services',
    description:
      'We produce professional eBooks and audiobooks for sale on Amazon KDP and Audible — turning your expertise into passive income-generating digital products.',
    href: '/digital-media',
  },
  {
    title: 'Affiliate Marketing & Monetization',
    description:
      'We build profitable affiliate marketing websites from scratch and help existing site owners unlock the revenue potential already sitting in their traffic.',
    href: '/affiliate-marketing',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <span className="tag">About Us</span>
          <h1 className={styles.heroTitle}>
            Digital Commerce & Media,<br />
            <span style={{ color: 'var(--blue-primary)' }}>Done Differently</span>
          </h1>
          <p className={styles.heroSub}>
            Adaptive Ecommerce is an AI-driven digital commerce and media company
            dedicated to helping individuals, entrepreneurs, and small to medium-sized
            businesses build a powerful, profitable presence online.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container">
          <div className={styles.missionGrid}>
            <div className={styles.missionContent}>
              <span className="tag">Our Mission</span>
              <h2 style={{ marginTop: '12px' }}>Helping You Succeed Online</h2>
              <p>
                We believe that every business — regardless of size or budget — deserves
                access to the same powerful digital tools and strategies used by the world's
                largest companies. Our mission is to make that a reality.
              </p>
              <p>
                Founded in Salt Lake City, Utah, Adaptive Ecommerce combines deep expertise
                in ecommerce, digital media, and affiliate marketing with cutting-edge AI
                tools to deliver results that were previously out of reach for most small
                businesses.
              </p>
              <p>
                Whether you're an individual looking to establish your first online presence,
                an entrepreneur launching a new venture, or an established business ready to
                grow — we have the experience and tools to help you get there.
              </p>
              <Link href="/contact" className="btn btn-primary" style={{ marginTop: '8px', alignSelf: 'flex-start' }}>
                Get in Touch
              </Link>
            </div>
            <div className={styles.missionStats}>
              <div className={styles.statCard}>
                <div className={styles.statNum}>3</div>
                <div className={styles.statLabel}>Core Service Areas</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNum}>AI</div>
                <div className={styles.statLabel}>Powered Workflows</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNum}>100%</div>
                <div className={styles.statLabel}>U.S. Based</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNum}>∞</div>
                <div className={styles.statLabel}>Scalable Solutions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className={`section ${styles.altBg}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="tag">Who We Serve</span>
            <h2>Built for Business Builders</h2>
            <p>We work with a wide range of clients — what they all have in common is a desire to grow online.</p>
          </div>
          <div className={styles.audienceGrid}>
            <div className={styles.audienceCard}>
              <div className={styles.audienceIcon}>👤</div>
              <h3>Individuals</h3>
              <p>Freelancers, consultants, coaches, and creators looking to establish a professional online presence and monetize their expertise.</p>
            </div>
            <div className={styles.audienceCard}>
              <div className={styles.audienceIcon}>🚀</div>
              <h3>Entrepreneurs</h3>
              <p>Early-stage founders and solopreneurs who need to move fast, validate ideas, and build digital revenue streams without a large team.</p>
            </div>
            <div className={styles.audienceCard}>
              <div className={styles.audienceIcon}>🏢</div>
              <h3>Small & Medium Businesses</h3>
              <p>Established businesses ready to modernize their web presence, improve SEO, automate processes, or add new digital revenue channels.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="tag">What We Do</span>
            <h2>Our Core Services</h2>
            <p>Three focused service areas, each designed to build and grow your digital business.</p>
          </div>
          <div className={styles.serviceList}>
            {services.map((s) => (
              <div key={s.title} className={styles.serviceRow}>
                <div className={styles.serviceRowContent}>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                </div>
                <Link href={s.href} className="btn btn-secondary">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={`section ${styles.altBg}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="tag">Our Values</span>
            <h2>What Sets Us Apart</h2>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((v) => (
              <div key={v.title} className={styles.valueCard}>
                <div className={styles.valueIcon}>{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div>
              <h2>Ready to Work Together?</h2>
              <p>Tell us about your project — consultations are always free.</p>
            </div>
            <Link href="/contact" className="btn btn-amber">Contact Us Today</Link>
          </div>
        </div>
      </section>
    </>
  )
}
