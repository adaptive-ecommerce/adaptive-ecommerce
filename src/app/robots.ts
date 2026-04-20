import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/portfolio',
      },
    ],
    sitemap: 'https://adaptiveecommerce.com/sitemap.xml',
  }
}
