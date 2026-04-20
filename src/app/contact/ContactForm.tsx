'use client'

import { useState } from 'react'
import styles from './ContactForm.module.css'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('https://formspree.io/f/xzdklpwq', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className={styles.successBox}>
        <div className={styles.successIcon}>✓</div>
        <h2>Message Sent!</h2>
        <p>
          Thank you for reaching out. We'll review your message and get back to
          you within one business day.
        </p>
        <button
          className="btn btn-secondary"
          onClick={() => setStatus('idle')}
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form} noValidate>
      <p className={styles.formNote}>All fields are optional — share as much or as little as you like.</p>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="name" className={styles.label}>Your Name</label>
          <input
            id="name"
            name="name"
            type="text"
            className={styles.input}
            placeholder="Jane Smith"
            autoComplete="name"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="company" className={styles.label}>Company Name</label>
          <input
            id="company"
            name="company"
            type="text"
            className={styles.input}
            placeholder="Acme Corp"
            autoComplete="organization"
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="email" className={styles.label}>Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            className={styles.input}
            placeholder="jane@example.com"
            autoComplete="email"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="phone" className={styles.label}>Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={styles.input}
            placeholder="(555) 000-0000"
            autoComplete="tel"
          />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="service" className={styles.label}>What are you interested in?</label>
        <select id="service" name="service" className={styles.select}>
          <option value="">Select a service (optional)</option>
          <option value="web-development">Website or Web Application Development</option>
          <option value="digital-media">eBook or Audiobook Production</option>
          <option value="affiliate-marketing">Affiliate Marketing or Site Monetization</option>
          <option value="general">General Inquiry</option>
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="message" className={styles.label}>Tell Us About Your Project</label>
        <textarea
          id="message"
          name="message"
          className={styles.textarea}
          rows={6}
          placeholder="Describe what you're looking to build or achieve. The more detail you share, the better we can help."
        />
      </div>

      {status === 'error' && (
        <div className={styles.errorBox}>
          Something went wrong. Please try again or email us directly at{' '}
          <a href="mailto:adaptiveecommerce@gmail.com">adaptiveecommerce@gmail.com</a>.
        </div>
      )}

      <button
        type="submit"
        className={`btn btn-primary ${styles.submitBtn}`}
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}
