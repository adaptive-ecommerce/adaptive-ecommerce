import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Adaptive Ecommerce | AI-Driven Ecommerce & Digital Media Services',
  description:
    'Adaptive Ecommerce LLC delivers AI-powered website development, digital media production, and affiliate marketing services. We help entrepreneurs and small businesses thrive online.',
}

const services = [
  {
    icon: '🖥️',
    title: 'Website & Web Application Development',
    description:
      'From professional business sites to complex web applications — built with cutting-edge AI tools including Claude Code. Fast, scalable, and crafted to convert visitors into customers.',
    href: '/web-development',
    tag: 'AI-Powered',
  },
  {
    icon: '📚',
    title: 'Digital Media Production',
    description:
      'Professional eBook and audiobook production for sale on Amazon and beyond. We handle everything from content development to final publishing — turning your knowledge into passive income.',
    href: '/digital-media',
    tag: 'eBooks & Audiobooks',
  },
  {
    icon: '📈',
    title: 'Affiliate Marketing & Monetization',
    description:
      'Build profitable affiliate marketing sites or unlock the earning potential of your existing website. We create strategies and implement systems that generate revenue around the clock.',
    href: '/affiliate-marketing',
    tag: 'Revenue Growth',
  },
]

const reasons = [
  { title: 'AI-First Approach', body: 'We leverage the latest AI tools to deliver faster, smarter results than traditional agencies — at a fraction of the cost.' },
  { title: 'End-to-End Service', body: 'From strategy to launch and beyond, we handle every detail so you can focus on running your business.' },
  { title: 'Built for Growth', body: 'Every site and campaign we build is optimized for search engines, conversions, and long-term scalability.' },
  { title: 'Personal Attention', body: 'As a boutique agency, you work directly with experts — not junior staff or offshore teams.' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroContent}>
            <span className="tag">AI-Driven Digital Solutions</span>
            <h1 className={styles.heroTitle}>
              Grow Your Business<br />
              <span className={styles.heroAccent}>Online, Intelligently.</span>
            </h1>
            <p className={styles.heroSub}>
              Adaptive Ecommerce helps entrepreneurs and small to medium-sized businesses
              build a powerful online presence — through smart web development, digital
              media production, and revenue-generating affiliate marketing.
            </p>
            <div className={styles.heroCtas}>
              <Link href="/contact" className="btn btn-primary">Get a Free Consultation</Link>
              <Link href="#services" className="btn btn-secondary">Explore Services</Link>
            </div>
          </div>
          <div className={styles.heroVisual} aria-hidden="true">
            <div className={styles.heroCard}>
              <div className={styles.heroCardRow}>
                <span className={styles.dot} style={{ background: '#E06B6B' }} />
                <span className={styles.dot} style={{ background: '#E8A838' }} />
                <span className={styles.dot} style={{ background: '#5ABF6E' }} />
              </div>
              <div className={styles.heroCardContent}>
                <div className={styles.codeLine}><span style={{color:'#9B8AE0'}}>const</span> <span style={{color:'#3D8FD1'}}>growth</span> = <span style={{color:'#5ABF6E'}}>await</span> <span style={{color:'#E8A838'}}>adaptive</span><span style={{color:'#ccc'}}>.launch(</span><span style={{color:'#E8A838'}}>your</span><span style={{color:'#ccc'}}>Business);</span></div>
                <div className={styles.codeLine} style={{marginTop:'8px', opacity:0.6}}><span style={{color:'#6B9A6B'}}>// AI-powered results ✓</span></div>
                <div className={styles.codeResult}>
                  <span style={{color:'#5ABF6E'}}>✓</span> Site launched<br/>
                  <span style={{color:'#5ABF6E'}}>✓</span> SEO optimized<br/>
                  <span style={{color:'#5ABF6E'}}>✓</span> Revenue growing
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className={`section ${styles.services}`} id="services">
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="tag">What We Do</span>
            <h2>Services Designed to Drive Results</h2>
            <p>Three core capabilities, one focused mission: helping your business thrive online.</p>
          </div>

          <div className={styles.serviceGrid}>
            {services.map((s) => (
              <Link key={s.href} href={s.href} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{s.icon}</div>
                <span className="tag" style={{marginBottom:'8px'}}>{s.tag}</span>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <span className={styles.learnMore}>Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className={`section ${styles.why}`}>
        <div className="container">
          <div className={styles.whyInner}>
            <div className={styles.whyLeft}>
              <span className="tag">Why Adaptive Ecommerce</span>
              <h2>The Smart Choice for Online Growth</h2>
              <p>
                We combine AI-powered tools with deep expertise in ecommerce, digital media,
                and online marketing — giving you an unfair advantage over competitors still
                doing things the old way.
              </p>
              <Link href="/contact" className="btn btn-primary" style={{marginTop:'8px'}}>
                Start a Conversation
              </Link>
            </div>
            <div className={styles.whyGrid}>
              {reasons.map((r) => (
                <div key={r.title} className={styles.whyCard}>
                  <h4>{r.title}</h4>
                  <p>{r.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className={styles.ctaBanner}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div>
              <h2>Ready to Build Something Great?</h2>
              <p>Tell us about your project — consultations are free and there's no obligation.</p>
            </div>
            <Link href="/contact" className="btn btn-amber">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
