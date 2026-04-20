import type { Metadata } from 'next'
import ContactForm from './ContactForm'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Adaptive Ecommerce. Whether you have a project in mind, a question about our services, or just want to explore possibilities — we\'d love to hear from you.',
  openGraph: {
    title: 'Contact Adaptive Ecommerce',
    description: 'Reach out to discuss your website, digital media, or affiliate marketing project.',
  },
}

const reasons = [
  { icon: '🖥️', label: 'Website or App Project' },
  { icon: '📚', label: 'eBook or Audiobook Production' },
  { icon: '📈', label: 'Affiliate Site or Monetization' },
  { icon: '💬', label: 'General Inquiry' },
]

export default function ContactPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <span className="tag">Get in Touch</span>
          <h1 className={styles.heroTitle}>
            Let's Talk About<br />
            <span style={{ color: 'var(--blue-primary)' }}>Your Project</span>
          </h1>
          <p className={styles.heroSub}>
            Tell us what you're working on. Consultations are always free and there's
            no obligation — just an honest conversation about how we can help.
          </p>
        </div>
      </section>

      <section className={`section ${styles.formSection}`}>
        <div className="container">
          <div className={styles.layout}>

            {/* Sidebar */}
            <aside className={styles.sidebar}>
              <div className={styles.sideCard}>
                <h3>What can we help with?</h3>
                <ul className={styles.reasonList}>
                  {reasons.map((r) => (
                    <li key={r.label}>
                      <span className={styles.reasonIcon}>{r.icon}</span>
                      <span>{r.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.sideCard}>
                <h3>Our Promise</h3>
                <p>
                  We respond to every inquiry within one business day. Your information
                  is never shared or sold — ever.
                </p>
              </div>
              <div className={styles.sideCard}>
                <h3>Location</h3>
                <address style={{ fontStyle: 'normal', fontSize: '15px', color: 'var(--muted)', lineHeight: '1.7' }}>
                  Adaptive Ecommerce, LLC<br />
                  PO Box 71094<br />
                  Salt Lake City, UT 84171
                </address>
              </div>
            </aside>

            {/* Form */}
            <div className={styles.formWrap}>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
