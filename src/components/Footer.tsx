import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: '#fff',
            borderRadius: '10px',
            padding: '8px 12px',
            width: 'fit-content',
          }}>
            <Image
              src="/logo_400x400.jpg"
              alt="Adaptive Ecommerce"
              width={130}
              height={50}
              style={{
                objectFit: 'contain',
                objectPosition: 'left center',
                display: 'block',
              }}
            />
          </div>
          <p className={styles.tagline}>
            AI-driven ecommerce and digital media solutions for entrepreneurs and growing businesses.
          </p>
          <address className={styles.address}>
            PO Box 71094<br />
            Salt Lake City, UT 84171
          </address>
        </div>

        <div className={styles.links}>
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Services</h3>
            <Link href="/web-development">Web Development</Link>
            <Link href="/digital-media">Digital Media Production</Link>
            <Link href="/affiliate-marketing">Affiliate Marketing</Link>
            <Link href="/affiliate-marketing/web-properties">Web Properties</Link>
          </div>

          <div className={styles.col}>
            <h3 className={styles.colTitle}>Company</h3>
            <Link href="/">Home</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p>© {year} Adaptive Ecommerce, LLC. All rights reserved.</p>
          <p>Salt Lake City, Utah</p>
        </div>
      </div>
    </footer>
  )
}
