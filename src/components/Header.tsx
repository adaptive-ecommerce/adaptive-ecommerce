'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import styles from './Header.module.css'

const navLinks = [
  { href: '/web-development', label: 'Web Development' },
  { href: '/digital-media', label: 'Digital Media' },
  { href: '/affiliate-marketing', label: 'Affiliate Marketing' },
  { href: '/contact', label: 'Contact Us' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} aria-label="Adaptive Ecommerce home">
          <Image
            src="/logo_400x400.jpg"
            alt="Adaptive Ecommerce"
            width={200}
            height={200}
            style={{ objectFit: 'contain', objectPosition: 'left center' }}
            priority
          />
        </Link>

        <nav className={styles.nav} aria-label="Main navigation">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`${styles.navLink} ${pathname === href ? styles.active : ''}`}
            >
              {label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-primary" style={{ fontSize: '14px', padding: '10px 22px' }}>
            Get Started
          </Link>
        </nav>

        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`${styles.mobileLink} ${pathname === href ? styles.active : ''}`}
            >
              {label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-primary" style={{ margin: '8px 20px 4px', justifyContent: 'center' }}>
            Get Started
          </Link>
        </div>
      )}
    </header>
  )
}
