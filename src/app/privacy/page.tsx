import type { Metadata } from 'next'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Adaptive Ecommerce LLC. Learn how we collect, use, and protect your personal information.',
}

const lastUpdated = 'April 2026'

export default function PrivacyPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <span className="tag">Legal</span>
          <h1 className={styles.heroTitle}>Privacy Policy</h1>
          <p className={styles.meta}>Last updated: {lastUpdated}</p>
          <p className={styles.heroSub}>
            Adaptive Ecommerce, LLC is committed to protecting your privacy. This policy
            explains what information we collect, how we use it, and your rights regarding
            your personal data.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.document}>

            <div className={styles.highlight}>
              <strong>Our core commitment:</strong> We do not sell, rent, or trade your
              personal information to any third party. Ever.
            </div>

            <div className={styles.section}>
              <h2>1. Who We Are</h2>
              <p>
                Adaptive Ecommerce, LLC ("Adaptive Ecommerce," "we," "us," or "our") is a
                digital commerce and media company located at PO Box 71094, Salt Lake City,
                UT 84171. We operate the website at{' '}
                <a href="https://adaptiveecommerce.com">adaptiveecommerce.com</a> (the "Site").
              </p>
            </div>

            <div className={styles.section}>
              <h2>2. Information We Collect</h2>
              <h3>Information you provide to us</h3>
              <p>
                When you contact us through our contact form, we may collect the following
                information that you voluntarily provide:
              </p>
              <ul>
                <li>Your name</li>
                <li>Company name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Any message or inquiry content you submit</li>
              </ul>
              <p>All fields on our contact form are optional. You choose what to share with us.</p>

              <h3>Information collected automatically</h3>
              <p>
                When you visit our Site, we may automatically collect certain technical
                information including:
              </p>
              <ul>
                <li>Your IP address and general geographic location</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on the Site</li>
                <li>Referring website or source</li>
                <li>Device type and operating system</li>
              </ul>
              <p>
                This information is collected through Google Analytics and is used solely
                to understand how visitors use our Site so we can improve it.
              </p>
            </div>

            <div className={styles.section}>
              <h2>3. How We Use Your Information</h2>
              <p>We use the information we collect for the following purposes only:</p>
              <ul>
                <li>To respond to your inquiries and provide the services you request</li>
                <li>To improve our website and the services we offer</li>
                <li>To understand how visitors use and interact with our Site</li>
                <li>To comply with legal obligations</li>
              </ul>
              <p>
                We do not use your information for automated decision-making or profiling.
              </p>
            </div>

            <div className={styles.section}>
              <h2>4. We Do Not Sell Your Information</h2>
              <p>
                We will never sell, rent, lease, or otherwise transfer your personal
                information to any third party for their marketing or commercial purposes.
                Your data is not a product. We collect only what we need to serve you, and
                we use it only for that purpose.
              </p>
            </div>

            <div className={styles.section}>
              <h2>5. How We Share Your Information</h2>
              <p>
                We do not share your personal information with third parties except in the
                following limited circumstances:
              </p>
              <ul>
                <li>
                  <strong>Service providers:</strong> We use Formspree to process contact
                  form submissions and Google Analytics to analyze Site traffic. These
                  providers process data on our behalf under their own privacy policies and
                  are not permitted to use your data for their own purposes.
                </li>
                <li>
                  <strong>Legal requirements:</strong> We may disclose your information if
                  required to do so by law or in response to valid legal requests from
                  public authorities.
                </li>
                <li>
                  <strong>Business transfers:</strong> In the event of a merger,
                  acquisition, or sale of assets, your information may be transferred as
                  part of that transaction. We will notify you of any such change.
                </li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2>6. Cookies and Tracking</h2>
              <p>
                Our Site uses cookies and similar tracking technologies through Google
                Analytics to collect usage data. These cookies help us understand visitor
                behavior and improve the Site experience. You can control or disable cookies
                through your browser settings at any time.
              </p>
              <p>
                We do not use advertising cookies, tracking pixels for ad retargeting, or
                any third-party marketing cookies. There is no advertising on this Site.
              </p>
            </div>

            <div className={styles.section}>
              <h2>7. Data Security</h2>
              <p>
                We take reasonable technical and organizational measures to protect your
                personal information from unauthorized access, disclosure, alteration, or
                destruction. Our Site uses HTTPS encryption for all data transmission.
              </p>
              <p>
                However, no method of transmission over the Internet is 100% secure. While
                we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </div>

            <div className={styles.section}>
              <h2>8. Data Retention</h2>
              <p>
                We retain contact form submissions only as long as necessary to respond to
                your inquiry and for a reasonable period thereafter. We do not maintain
                long-term databases of personal information from website visitors.
              </p>
            </div>

            <div className={styles.section}>
              <h2>9. Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Request access to the personal information we hold about you</li>
                <li>Request correction of any inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of any communications from us</li>
              </ul>
              <p>
                To exercise any of these rights, please contact us using the information
                below. We will respond to all requests within 30 days.
              </p>
            </div>

            <div className={styles.section}>
              <h2>10. Children's Privacy</h2>
              <p>
                Our Site is not directed to children under the age of 13. We do not
                knowingly collect personal information from children. If you believe we
                have inadvertently collected information from a child, please contact us
                and we will promptly delete it.
              </p>
            </div>

            <div className={styles.section}>
              <h2>11. Third-Party Links</h2>
              <p>
                Our Site may contain links to third-party websites. We are not responsible
                for the privacy practices of those sites and encourage you to review their
                privacy policies before providing any personal information.
              </p>
            </div>

            <div className={styles.section}>
              <h2>12. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in
                our practices or for legal, operational, or regulatory reasons. We will
                post the updated policy on this page with a revised "last updated" date.
                Your continued use of the Site after any changes constitutes acceptance of
                the updated policy.
              </p>
            </div>

            <div className={styles.section}>
              <h2>13. Contact Us</h2>
              <p>
                If you have any questions, concerns, or requests regarding this Privacy
                Policy or how we handle your personal information, please contact us:
              </p>
              <div className={styles.contactBlock}>
                <strong>Adaptive Ecommerce, LLC</strong><br />
                PO Box 71094<br />
                Salt Lake City, UT 84171<br />
                <a href="/contact">Contact form →</a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
