import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://centrorental.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Centro Rental — Producción técnica para eventos',
  description:
    'Soluciones de sonido, iluminación, pantallas y equipamiento técnico para eventos que dejan marca.',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="antialiased bg-[#09090b] text-[#f4f4f5] min-h-screen flex flex-col selection:bg-[#B5D448]/30 selection:text-white">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <WhatsAppFloatingButton />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
