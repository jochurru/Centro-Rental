import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // Estrategia Fail-Closed: Solo indexable cuando SEO_INDEXABLE sea explícitamente 'true'
  // En localhost, preview de Vercel y producción previa a la migración emite Disallow: /
  const isIndexable = process.env.SEO_INDEXABLE === 'true'

  if (!isIndexable) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    }
  }

  // Producción comercial oficial bajo https://centrorental.com.ar
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://centrorental.com.ar/sitemap.xml',
  }
}
