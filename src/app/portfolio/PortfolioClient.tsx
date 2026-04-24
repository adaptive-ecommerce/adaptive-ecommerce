'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './portfolio.module.css'

type MediaItem = {
  src: string
  alt: string
  caption: string
  isVideo?: boolean
  videoUrl?: string
}

type RoleLink = {
  label: string
  url: string
}

type Role = {
  id: string
  company: string
  title: string
  type: string
  logo: string
  accent: string
  tagline: string
  tags: string[]
  summary: string
  bullets: string[]
  links: RoleLink[]
  images: MediaItem[]
}

const skills = [
  'General Management', 'P&L Management', 'Ecommerce Strategy', 'Product Management',
  'AI Tools & Workflows', 'Prompt Engineering', 'Digital Marketing', 'SEO & SEM',
  'Site Merchandising', 'UX/UI Design', 'Category Management', 'Account Management',
  'Business Development', 'Data Analytics', 'Team Leadership', 'Program Management',
]

const roles: Role[] = [
  {
    id: 'uber',
    company: 'Uber AI Solutions',
    title: 'Segment Analyst, Retail & Ecommerce',
    type: 'Contract',
    logo: '/portfolio/logo-uber.jpg',
    accent: '#000000',
    tagline: 'Shaping the future of AI through expert ecommerce knowledge',
    tags: ['AI', 'Prompt Engineering', 'Data Annotation', 'Ecommerce'],
    summary: 'Applied deep ecommerce and digital marketing expertise to train and evaluate large language models, contributing directly to the development of next-generation AI systems.',
    bullets: [
      'Designed and engineered high-quality prompts targeting ecommerce, digital marketing, merchandising, and account management use cases for AI model training',
      'Developed detailed "golden answer" case studies that established quality benchmarks for AI model evaluation and improvement',
      'Performed rigorous prompt evaluation and quality assessment to ensure model outputs met accuracy and relevance standards',
      'Executed precise data annotation and labeling workflows, creating structured training datasets that directly improved model performance',
      'Collaborated with AI research teams to identify gaps in model knowledge within the retail and ecommerce vertical',
    ],
    links: [],
    images: [],
  },
  {
    id: 'gazelle',
    company: 'ecoATM Gazelle',
    title: 'Senior Ecommerce Manager',
    type: 'Full-Time',
    logo: '/portfolio/logo-gazelle.jpg',
    accent: '#00A651',
    tagline: 'Driving growth at the intersection of recommerce and digital retail',
    tags: ['Ecommerce Management', 'P&L', 'UX/UI', 'Merchandising', 'Product Development'],
    summary: 'Led end-to-end digital commerce operations for Gazelle\'s direct-to-consumer and trade-in web platforms, owning P&L accountability and driving measurable improvements in conversion, margin, and customer experience.',
    bullets: [
      'Owned full P&L responsibility for Gazelle Direct Store and Trade-In websites, developing and executing promotional strategies that drove revenue growth and margin improvement',
      'Conducted in-depth site performance analysis and implemented data-driven optimizations across product pages, navigation, and merchandising to align with shifting customer demand',
      'Led UX/UI improvement initiatives by mapping critical customer journeys, identifying friction points, and rapidly executing changes that measurably improved conversion rates',
      'Directed new product development and launch execution from concept through go-live, coordinating with engineering, design, and marketing stakeholders',
      'Managed product selection and assortment strategy to maximize sell-through and customer satisfaction across device categories',
      'Partnered with cross-functional teams including engineering, marketing, and finance to deliver new site capabilities on time and within budget',
    ],
    links: [
      { label: 'Gazelle.com', url: 'https://www.gazelle.com' },
      { label: 'ecoATM.com', url: 'https://www.ecoatm.com' },
    ],
    images: [
      { src: '/portfolio/screenshot-gazelle.jpg', alt: 'Gazelle.com website', caption: 'Gazelle.com — Direct-to-Consumer Recommerce Platform' },
      { src: '/portfolio/screenshot-ecoatm.jpg', alt: 'ecoATM.com website', caption: 'ecoATM.com — Device Trade-In Platform' },
    ],
  },
  {
    id: 'ebay-proseller',
    company: 'eBay',
    title: 'Senior Program Manager — ProSeller Program',
    type: 'Full-Time',
    logo: '/portfolio/logo-ebay.jpg',
    accent: '#E53238',
    tagline: 'Building eBay\'s premier merchant excellence program from the ground up',
    tags: ['Program Management', 'Seller Development', 'Training', 'Cross-functional Leadership'],
    summary: 'Conceived, launched, and scaled eBay\'s ProSeller program — a flagship merchant development initiative designed to elevate the quality and performance of top-tier eBay sellers across the platform.',
    bullets: [
      'Defined program vision, goals, eligibility criteria, and performance guidelines for eBay\'s ProSeller initiative, securing alignment from senior leadership and cross-functional stakeholders',
      'Built and led the seller recruitment strategy, personally engaging high-potential merchants and developing the pitch materials and value proposition that drove enrollment',
      'Hired, onboarded, and managed a team of ProSeller Advisors responsible for merchant success, developing role profiles, training curricula, and performance management frameworks',
      'Created comprehensive training programs covering eBay platform best practices, listing optimization, customer service standards, and sales growth strategies',
      'Successfully recruited, onboarded, and activated over 1,800 eBay merchants into the program, establishing one of the platform\'s most impactful seller development initiatives',
      'Collaborated daily with finance, product, account management, and senior leadership to ensure program metrics were on track and continuously improved',
    ],
    links: [],
    images: [],
  },
  {
    id: 'ebay-home',
    company: 'eBay',
    title: 'Senior Category Manager — Home Interior',
    type: 'Full-Time',
    logo: '/portfolio/logo-ebay.jpg',
    accent: '#E53238',
    tagline: 'Defining the consumer experience for one of eBay\'s largest categories',
    tags: ['Category Management', 'Product Strategy', 'UX', 'Business Development', 'P&L'],
    summary: 'Led the business strategy and consumer experience for eBay\'s Home Interior category — one of the platform\'s highest-volume verticals — while simultaneously serving as the business-side product manager for three major platform initiatives.',
    bullets: [
      'Directed a high-performing team of Product Managers, Category Managers, and Account Management professionals to execute a cohesive business strategy across eBay\'s Home & Garden vertical',
      'Defined and owned end-to-end product and category strategy, creating compelling consumer experiences that drove buyer engagement, repeat purchase, and category revenue growth',
      'Served as business-side Product Manager for eBay\'s Personalization Engine, translating buyer behavior data into product requirements that improved content relevance and user engagement',
      'Led product strategy and execution for eBay\'s Bulky Shipping and Freight Delivery products, solving a critical logistics challenge for large-format home goods and driving significant incremental GMV',
      'Partnered with engineering and design teams through full product lifecycle — from discovery and requirements through launch and iteration — for multiple high-impact platform features',
      'Analyzed marketplace trends, competitive landscape, and buyer demand signals to inform assortment decisions and category investment priorities',
    ],
    links: [
      { label: '2023 eBay Open Presentation', url: 'https://www.youtube.com/watch?v=lh_me4GD3bk' },
    ],
    images: [
      { src: '/portfolio/eBayOpen.jpg', alt: 'eBay Open 2023 Presentation', caption: 'eBay Open 2023 — Category Strategy Presentation', isVideo: true, videoUrl: 'https://www.youtube.com/watch?v=lh_me4GD3bk' },
    ],
  },
  {
    id: 'ebay-sporting',
    company: 'eBay',
    title: 'Senior Category Manager — Sporting Goods',
    type: 'Full-Time',
    logo: '/portfolio/logo-ebay.jpg',
    accent: '#E53238',
    tagline: 'Growing eBay\'s Sporting Goods business through community, data, and innovation',
    tags: ['Category Management', 'Revenue Growth', 'Community Engagement', 'Event Marketing'],
    summary: 'Led the Sporting Goods category strategy for eBay, driving revenue growth and buyer trust by combining data-driven inventory programs with authentic community engagement through events and sponsorships.',
    bullets: [
      'Managed and developed a team of Category Managers to execute a unified business strategy across eBay\'s Sporting Goods vertical, consistently achieving revenue and buyer growth targets',
      'Conducted deep marketplace analysis to surface emerging trends in the sporting goods space, translating insights into targeted inventory sourcing programs and promotional campaigns',
      'Developed and launched programs to influence inventory discovery, improving the visibility of high-demand items and increasing sell-through rates across key product segments',
      'Built authentic brand presence in the sporting community by sponsoring live sporting events and trade shows, representing eBay directly to passionate buyers and sellers',
      'Produced original video content series to engage the eBay Golf community, driving awareness, trust, and transaction volume within the golf equipment segment',
    ],
    links: [
      { label: 'eBay Golf Series — Episode 1', url: 'https://www.youtube.com/watch?v=nwFlcax7Rps' },
      { label: 'eBay Golf Series — Episode 2', url: 'https://www.youtube.com/watch?v=3LQ07rg4NVw' },
      { label: 'eBay Golf Series — Episode 3', url: 'https://www.youtube.com/watch?v=q0-K6PdhuTw' },
    ],
    images: [
      { src: '/portfolio/youtube1.jpg', alt: 'eBay Golf YouTube Series Episode 1', caption: 'eBay Golf Series Ep. 1', isVideo: true, videoUrl: 'https://www.youtube.com/watch?v=nwFlcax7Rps' },
      { src: '/portfolio/youtube2.jpg', alt: 'eBay Golf YouTube Series Episode 2', caption: 'eBay Golf Series Ep. 2', isVideo: true, videoUrl: 'https://www.youtube.com/watch?v=3LQ07rg4NVw' },
      { src: '/portfolio/youtube3.jpg', alt: 'eBay Golf YouTube Series Episode 3', caption: 'eBay Golf Series Ep. 3', isVideo: true, videoUrl: 'https://www.youtube.com/watch?v=q0-K6PdhuTw' },
    ],
  },
  {
    id: 'ebay-motors-pm',
    company: 'eBay',
    title: 'Product Category Manager — eBay Motors',
    type: 'Full-Time',
    logo: '/portfolio/logo-ebay.jpg',
    accent: '#E53238',
    tagline: 'Innovating the automotive parts shopping experience at scale',
    tags: ['Product Management', 'Category Management', 'Structured Data', 'UX Innovation'],
    summary: 'Drove the evolution of eBay\'s Motors Parts & Accessories category through a unique combination of product management, category strategy, and data-driven merchandising — delivering industry-first features that transformed how buyers shop for auto parts online.',
    bullets: [
      'Managed the full strategic and operational roadmap for eBay Motors Wheels & Tires, optimizing merchandising, product selection, and structured data to improve discoverability and buyer confidence',
      'Served as business-side Product Manager across the complete product lifecycle for multiple high-impact platform features, from discovery and requirements through launch and post-launch optimization',
      'Led product strategy and execution for eBay\'s Tire Installation Program, creating a seamless path from online purchase to local installation that drove significant incremental conversion',
      'Owned product development for Fitment at Checkout (eBay Guaranteed Fit), an industry-first feature that verified part compatibility at the point of purchase — dramatically reducing returns and improving buyer trust',
      'Delivered product management for Online Service Manuals integration and Product Everywhere Catalog Generation, expanding eBay\'s automotive content depth and structured data quality',
      'Developed co-marketing programs and promotional events with major tire distributors, driving relevant inventory to the eBay marketplace and growing category GMV',
    ],
    links: [
      { label: 'Tire Installation Program', url: 'https://pages.ebay.com/tire-installation/' },
      { label: 'eBay Guaranteed Fit', url: 'https://pages.ebay.com/motors/ebay-guaranteed-fit/' },
    ],
    images: [],
  },
  {
    id: 'ebay-motors-sam',
    company: 'eBay',
    title: 'Strategic Account Manager — eBay Motors',
    type: 'Full-Time',
    logo: '/portfolio/logo-ebay.jpg',
    accent: '#E53238',
    tagline: 'Driving $100M+ in annual partner GMV through strategic relationship management',
    tags: ['Account Management', 'Sales', 'Business Development', 'Partner Strategy'],
    summary: 'Managed a high-value portfolio of strategic automotive parts and accessories merchants on eBay, consistently achieving $100M+ in annual GMV through a consultative approach to seller growth and platform optimization.',
    bullets: [
      'Owned a portfolio of eBay\'s most strategic automotive merchants, serving as their primary business partner and platform advocate to drive mutual growth and long-term retention',
      'Set and achieved individual merchant sales goals exceeding $100M in combined annual GMV, leveraging deep platform knowledge and customized growth strategies for each account',
      'Conducted regular in-person business reviews at merchant locations, trade shows, and eBay conferences — building trust-based relationships that translated into increased investment and platform commitment',
      'Represented eBay at automotive trade shows, industry association meetings, and sponsored events, generating new business pipeline and reinforcing eBay\'s position as the leading automotive parts marketplace',
      'Drove inventory sourcing initiatives, account expansion programs, and custom promotional events that consistently outperformed category benchmarks',
      'Developed new business by identifying and onboarding high-potential automotive sellers, expanding the depth and quality of eBay\'s parts and accessories inventory',
    ],
    links: [],
    images: [],
  },
  {
    id: 'xo',
    company: 'XO Communications',
    title: 'Circuit Design Engineer',
    type: 'Full-Time',
    logo: '/portfolio/logo-xo.jpg',
    accent: '#003087',
    tagline: 'Engineering telecommunications infrastructure at enterprise scale',
    tags: ['Telecommunications', 'Network Engineering', 'Team Management', 'Financial Analysis'],
    summary: 'Provided engineering leadership and technical expertise within XO Communications\' Circuit Design group, managing a team of provisioning engineers while delivering financial and operational analysis to executive leadership.',
    bullets: [
      'Managed a team of 7 telecommunications provisioning and circuit design engineers, overseeing workload distribution, performance, and professional development',
      'Served as the Circuit Design group\'s representative within the broader management organization, ensuring clear communication and alignment between engineering and business stakeholders',
      'Designed and provisioned complex telecommunications circuits as a Design Engineer III, applying technical expertise to deliver reliable, scalable network solutions for enterprise clients',
      'Monitored and managed network capacity inventory, providing data-driven insights that informed infrastructure investment and capacity planning decisions',
      'Produced detailed financial analysis of telecommunications circuit leases for executive leadership, enabling informed decisions around network cost optimization',
      'Collaborated closely with the Engineering Department to streamline information flow and improve cross-team coordination on circuit delivery timelines',
    ],
    links: [],
    images: [],
  },
]

function RoleCard({ role }: { role: Role }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`${styles.card} ${open ? styles.cardOpen : ''}`}>
      {/* Card Header — always visible, click to toggle */}
      <button
        className={styles.cardHeader}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <div className={styles.cardHeaderLeft}>
          <div className={styles.logoWrap}>
            {/* Logo placeholder — shows company initial if image missing */}
            <div
              className={styles.logoFallback}
              style={{ background: role.accent + '18', color: role.accent, borderColor: role.accent + '30' }}
            >
              {role.company.charAt(0)}
            </div>
            <Image
              src={role.logo}
              alt={`${role.company} logo`}
              width={56}
              height={56}
              className={styles.logoImg}
              style={{ objectFit: 'contain' }}
              onError={() => {}} // silently fall back to the div above
            />
          </div>
          <div className={styles.cardMeta}>
            <div className={styles.cardCompany}>{role.company}</div>
            <div className={styles.cardTitle}>{role.title}</div>
            <div className={styles.tagRow}>
              {role.tags.slice(0, 3).map(t => (
                <span key={t} className={styles.pill}>{t}</span>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.cardHeaderRight}>
          <span className={styles.typeBadge}>{role.type}</span>
          <span className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}>
            ↓
          </span>
        </div>
      </button>

      {/* Expanded content */}
      {open && (
        <div className={styles.cardBody}>
          <p className={styles.tagline}>"{role.tagline}"</p>
          <p className={styles.summary}>{role.summary}</p>

          <h4 className={styles.sectionLabel}>Key Contributions</h4>
          <ul className={styles.bullets}>
            {role.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>

          {/* Links */}
          {role.links.length > 0 && (
            <div className={styles.linksRow}>
              {role.links.map(l => (
                <a
                  key={l.url}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkBtn}
                  style={{ borderColor: role.accent + '50', color: role.accent }}
                >
                  ↗ {l.label}
                </a>
              ))}
            </div>
          )}

          {/* Images / Video thumbnails */}
          {role.images.length > 0 && (
            <div className={styles.mediaGrid}>
              {role.images.map((img, i) => (
                <a
                  key={i}
                  href={img.isVideo ? img.videoUrl : img.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mediaCard}
                >
                  <div className={styles.mediaImgWrap}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                    {img.isVideo && (
                      <div className={styles.playBtn}>▶</div>
                    )}
                  </div>
                  <p className={styles.mediaCaption}>{img.caption}</p>
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default function PortfolioClient() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <span className="tag">Professional Portfolio</span>
              <h1 className={styles.name}>Todd Elledge</h1>
              <p className={styles.headline}>
                Highly entrepreneurial ecommerce and digital business professional with extensive experience across general management, advanced analytics, AI tools and workflows, P&L ownership, product management, business development, account management, website development, and search engine optimization — with a proven track record of building high-performing teams and driving measurable growth in complex digital environments.
              </p>
              <div className={styles.contactRow}>
                <a href="mailto:todd.elledge@gmail.com" className={styles.contactLink}>
                  <span>✉</span> todd.elledge@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/todd-elledge/" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                  <span>in</span> LinkedIn Profile
                </a>
                <a href="/contact" className={styles.contactLink}>
                  <span>💬</span> Send a Message
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className={styles.skillsBar}>
        <div className="container">
          <div className={styles.skillsInner}>
            <span className={styles.skillsLabel}>Core Competencies</span>
            <div className={styles.skillsList}>
              {skills.map(s => (
                <span key={s} className={styles.skillPill}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className={`section ${styles.experience}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="tag">Work Experience</span>
            <h2>Career History</h2>
            <p>Click any role to expand the full detail. Ordered from most recent to earliest.</p>
          </div>
          <div className={styles.cardGrid}>
            {roles.map(role => (
              <RoleCard key={role.id} role={role} />
            ))}
          </div>
        </div>
      </section>

      {/* Current work */}
      <section className={styles.currentWork}>
        <div className="container">
          <div className={styles.currentInner}>
            <div>
              <span className="tag">Currently</span>
              <h2 style={{ marginTop: '12px' }}>Adaptive Ecommerce, LLC</h2>
              <p style={{ marginTop: '12px', color: 'var(--muted)', fontSize: '16px', maxWidth: '560px' }}>
                Founder and operator of Adaptive Ecommerce — an AI-driven ecommerce and digital media business providing website development, digital media production, affiliate marketing, and website monetization services.
              </p>
            </div>
            <a href="https://adaptiveecommerce.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Visit Adaptive Ecommerce →
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
