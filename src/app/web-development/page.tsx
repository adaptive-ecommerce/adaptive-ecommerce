import type { Metadata } from 'next'
import Link from 'next/link'
import styles from '../services.module.css'

export const metadata: Metadata = {
  title: 'Website & Web Application Development',
  description:
    'Professional website and web application development powered by AI and Claude Code. We build fast, scalable, SEO-optimized digital experiences for individuals, entrepreneurs, and small to medium-sized businesses.',
  keywords: [
    'web development services',
    'AI web development',
    'Claude Code development',
    'website development Utah',
    'web application development',
    'small business website',
    'ecommerce website development',
    'Next.js development',
  ],
  openGraph: {
    title: 'Website & Web Application Development | Adaptive Ecommerce',
    description: 'AI-powered web development for individuals, entrepreneurs, and growing businesses.',
  },
}

const capabilities = [
  {
    audience: 'Individuals & Freelancers',
    color: '#EBF4FB',
    border: '#C2DDF2',
    items: [
      'Personal portfolio and resume websites that showcase your work and land opportunities',
      'Professional service sites for consultants, coaches, and creative professionals',
      'Blog and content platforms built for SEO and audience growth',
      'Simple ecommerce storefronts for selling products or digital downloads',
    ],
  },
  {
    audience: 'Entrepreneurs & Startups',
    color: '#FDF3DC',
    border: '#F5DFA0',
    items: [
      'MVP web applications to validate your business idea quickly and affordably',
      'SaaS-style tools and dashboards built with modern frameworks',
      'Landing pages engineered for conversion and paid traffic campaigns',
      'Subscription and membership platforms with gated content or features',
    ],
  },
  {
    audience: 'Small to Medium Businesses',
    color: '#F0F9F1',
    border: '#B8E0BB',
    items: [
      'Complete website redesigns and modernizations that reflect your brand and values',
      'Custom web applications that automate internal processes and save staff time',
      'Multi-location business sites with location-based SEO and structured data',
      'Integration of CRM, inventory, scheduling, and third-party business tools',
    ],
  },
]

const techHighlights = [
  { icon: '🤖', title: 'Claude Code AI Development', body: 'We use Anthropic\'s Claude Code — the most advanced AI coding tool available — to build faster, catch bugs earlier, and deliver higher-quality code than traditional development.' },
  { icon: '⚡', title: 'Modern Tech Stack', body: 'Next.js, React, TypeScript, and Vercel — the same stack trusted by major tech companies, now accessible for businesses of all sizes.' },
  { icon: '🔍', title: 'SEO-First Architecture', body: 'Every site we build is structured for search engines from the ground up: semantic HTML, fast load times, schema markup, and optimized metadata.' },
  { icon: '📱', title: 'Mobile-Optimized', body: 'Fully responsive designs that look and perform beautifully on every device — because over 60% of web traffic is mobile.' },
  { icon: '🔒', title: 'Secure by Default', body: 'HTTPS, modern authentication patterns, input validation, and regular dependency updates keep your site and users protected.' },
  { icon: '🚀', title: 'Fast Deployment & Iteration', body: 'AI-assisted development means shorter timelines, lower cost, and the ability to iterate quickly as your business evolves.' },
]

export default function WebDevelopmentPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero} style={{ background: 'linear-gradient(160deg, var(--blue-light) 0%, var(--warm-white) 55%)' }}>
        <div className="container">
          <span className="tag">Website & Web Application Development</span>
          <h1 className={styles.heroTitle}>
            Professional Websites & Apps,<br />
            <span style={{ color: 'var(--blue-primary)' }}>Built Smarter with AI</span>
          </h1>
          <p className={styles.heroSub}>
            We harness the power of Claude Code and modern web frameworks to deliver
            exceptional digital experiences — faster and more affordably than traditional
            development approaches.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/contact" className="btn btn-primary">Discuss Your Project</Link>
            <Link href="#capabilities" className="btn btn-secondary">See What We Build</Link>
          </div>
        </div>
      </section>

      {/* Capabilities by audience */}
      <section className="section" id="capabilities">
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="tag">What We Build</span>
            <h2>Solutions for Every Stage of Business</h2>
            <p>Whether you're launching your first site or scaling an established business, we build exactly what you need.</p>
          </div>
          <div className={styles.audienceGrid}>
            {capabilities.map((cap) => (
              <div
                key={cap.audience}
                className={styles.audienceCard}
                style={{ background: cap.color, borderColor: cap.border }}
              >
                <h3>{cap.audience}</h3>
                <ul className={styles.bulletList}>
                  {cap.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech highlights */}
      <section className={`section ${styles.altBg}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="tag">Our Approach</span>
            <h2>Why Our Development Process Stands Apart</h2>
          </div>
          <div className={styles.featureGrid}>
            {techHighlights.map((t) => (
              <div key={t.title} className="card">
                <div className={styles.featureIcon}>{t.icon}</div>
                <h3 className={styles.featureTitle}>{t.title}</h3>
                <p style={{ fontSize: '15px' }}>{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaBanner}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div>
              <h2>Have a Project in Mind?</h2>
              <p>Tell us what you're building — we'll give you an honest assessment and a clear path forward.</p>
            </div>
            <Link href="/contact" className="btn btn-amber">Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  )
}
