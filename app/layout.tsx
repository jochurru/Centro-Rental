import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

// Dominio comercial definitivo para canonicalización SEO absoluta (no depende de Vercel preview)
const CANONICAL_SITE_URL = 'https://centrorental.com.ar'

// Estrategia Fail-Closed: Solo indexable cuando SEO_INDEXABLE sea explícitamente 'true'
// En localhost, preview de Vercel y producción previa a la migración emite noindex, nofollow
const isIndexable = process.env.SEO_INDEXABLE === 'true'

export const metadata: Metadata = {
  metadataBase: new URL(CANONICAL_SITE_URL),
  title: 'Centro Rental — Producción técnica para eventos',
  description:
    'Soluciones de sonido, iluminación, pantallas y equipamiento técnico para eventos que dejan marca.',
  robots: isIndexable
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      }
    : {
        index: false,
        follow: false,
        googleBot: {
          index: false,
          follow: false,
        },
      },
  openGraph: {
    title: 'Centro Rental — Producción técnica para eventos',
    description:
      'Soluciones de sonido, iluminación, pantallas y equipamiento técnico para eventos que dejan marca.',
    siteName: 'Centro Rental',
    type: 'website',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Centro Rental — Producción técnica para eventos',
    description:
      'Soluciones de sonido, iluminación, pantallas y equipamiento técnico para eventos que dejan marca.',
  },
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
    ],
    apple: [
      {
        url: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

import { Header } from '@/components/sections/header'
import { Footer } from '@/components/sections/footer'
import { WhatsAppFloatingButton } from '@/components/common/whatsapp-floating-button'
import { JsonLd } from '@/components/seo/json-ld'
import { globalSchema } from '@/lib/seo/schema'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-AR">
      <body className="antialiased bg-[#09090b] text-[#f4f4f5] min-h-screen flex flex-col selection:bg-[#B5D448]/30 selection:text-white">
        <JsonLd data={globalSchema} />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFloatingButton />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
