import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://adaptiveecommerce.com'
  const now = new Date()

  return [
    { url: base, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/web-development`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/digital-media`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/affiliate-marketing`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/affiliate-marketing/web-properties`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
