# Adaptive Ecommerce — adaptiveecommerce.com

Next.js website for Adaptive Ecommerce LLC.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules + CSS custom properties
- **Fonts**: DM Sans + DM Serif Display (Google Fonts)
- **Forms**: Formspree
- **Hosting**: Vercel

---

## Project Structure

```
src/
  app/
    page.tsx                          # Home page
    layout.tsx                        # Root layout (header, footer, metadata)
    globals.css                       # Design system + global styles
    sitemap.ts                        # Auto-generated XML sitemap
    robots.ts                         # Robots.txt (portfolio excluded)
    web-development/
      page.tsx                        # Web Development service page
    digital-media/
      page.tsx                        # Digital Media service page
    affiliate-marketing/
      page.tsx                        # Affiliate Marketing service page
      web-properties/
        page.tsx                      # Web Properties listing page
    contact/
      page.tsx                        # Contact page
      ContactForm.tsx                 # Formspree form (client component)
    portfolio/
      page.tsx                        # Portfolio (noindex — not linked publicly)
  components/
    Header.tsx / Header.module.css
    Footer.tsx / Footer.module.css
public/
  logo_400x400.jpg                    # Used in header + footer
  logo_1200x1200.jpg                  # High-res version
  logo_200x200.jpg                    # Small version
  og-image.jpg                        # ADD THIS: 1200×630 Open Graph image
```

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
# → http://localhost:3000

# Build for production
npm run build

# Start production server locally
npm start
```

---

## Deployment to Vercel (Step-by-Step)

### 1. Create GitHub Repository

```bash
cd adaptive-ecommerce

# Initialize git
git init
git add .
git commit -m "Initial commit — Adaptive Ecommerce website"

# Create repo on GitHub (go to github.com/new)
# Then link it:
git remote add origin https://github.com/YOUR_USERNAME/adaptive-ecommerce.git
git branch -M main
git push -u origin main
```

### 2. Import to Vercel

1. Go to [vercel.com](https://vercel.com) and log in to your Pro account
2. Click **"Add New… → Project"**
3. Select **"Import Git Repository"** and choose your new repo
4. Vercel will auto-detect Next.js — leave all settings as default
5. Click **"Deploy"**

### 3. Connect Your Custom Domain

1. In Vercel, go to your project → **Settings → Domains**
2. Add `adaptiveecommerce.com` and `www.adaptiveecommerce.com`
3. Vercel will show you DNS records to add
4. In your DNS provider (where you registered the domain), update:
   - **A record**: `@` → Vercel's IP (shown in dashboard)
   - **CNAME**: `www` → `cname.vercel-dns.com`
5. SSL is automatic — Vercel handles it

### 4. Set Up toddelledge.com Redirect (Portfolio)

In your DNS provider for `toddelledge.com`, create a redirect to:
```
https://adaptiveecommerce.com/portfolio
```
Most registrars offer "URL forwarding" or "redirect" under DNS settings.

Alternatively, add `toddelledge.com` as a domain in Vercel and use a redirect rule in `next.config.js`:
```js
async redirects() {
  return [
    {
      source: '/',
      destination: '/portfolio',
      permanent: false,
      has: [{ type: 'host', value: 'toddelledge.com' }],
    },
  ]
}
```

---

## Before Going Live — Checklist

- [ ] Add an Open Graph image at `public/og-image.jpg` (1200×630px) — a branded banner used when the site is shared on social media
- [ ] Test contact form: submit a test message and confirm receipt at adaptiveecommerce@gmail.com
- [ ] Verify `https://adaptiveecommerce.com/sitemap.xml` loads correctly after deploy
- [ ] Submit sitemap to [Google Search Console](https://search.google.com/search-console)
- [ ] Verify `/portfolio` does NOT appear in Google search (check robots.txt at `/robots.txt`)
- [ ] Test on mobile (Chrome DevTools → responsive mode)

---

## Adding More Web Properties

Edit `src/app/affiliate-marketing/web-properties/page.tsx` and add entries to the `properties` array:

```ts
{
  name: 'YourSite.com',
  url: 'https://yoursite.com',
  category: 'Category Name',
  description: 'A couple of sentences describing this site.',
  tags: ['Tag1', 'Tag2'],
},
```

---

## Formspree Configuration

Form submissions go to `adaptiveecommerce@gmail.com` via endpoint `xzdklpwq`.

To change the endpoint, edit line in `src/app/contact/ContactForm.tsx`:
```ts
const res = await fetch('https://formspree.io/f/xzdklpwq', {
```

---

## Portfolio Page

The portfolio at `/portfolio` is:
- **Not linked** from any public page on the site
- **noindex / nofollow** — will not appear in Google
- **Excluded** from `sitemap.xml`
- Accessible via `toddelledge.com` redirect

Add portfolio content directly in `src/app/portfolio/page.tsx`.
