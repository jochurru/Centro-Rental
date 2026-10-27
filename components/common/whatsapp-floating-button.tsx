'use client'

import React, { useEffect, useState } from 'react'
import { siteConfig } from '@/data/site'
import { WhatsAppIcon } from '@/components/common/social-icons'

export function WhatsAppFloatingButton() {
  const [isNearFooter, setIsNearFooter] = useState(false)

  useEffect(() => {
    // Buscar el footer institucional para evitar colisiones visuales
    const footer = document.getElementById('site-footer')
    if (!footer || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsNearFooter(entry.isIntersecting)
      },
      {
        root: null,
        // Detecta anticipadamente al aproximarse al footer
        rootMargin: '0px 0px 48px 0px',
        threshold: 0,
      }
    )

    observer.observe(footer)
    return () => observer.disconnect()
  }, [])

  return (
    <aside
      aria-label="Contacto por WhatsApp"
      className={`fixed z-40 transition-[opacity,transform] duration-200 ease-out motion-reduce:transition-none ${
        isNearFooter
          ? 'pointer-events-none opacity-0 translate-y-3'
          : 'opacity-100 translate-y-0'
      }`}
      style={{
        bottom: 'max(1.25rem, calc(1rem + env(safe-area-inset-bottom, 0px)))',
        right: 'max(1rem, calc(1rem + env(safe-area-inset-right, 0px)))',
      }}
    >
      <a
        href={siteConfig.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Consultar por WhatsApp"
        className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-[#0e0f12]/95 text-[#25D366] shadow-lg shadow-black/50 backdrop-blur-sm transition-[border-color,background-color,color,transform] duration-150 hover:border-[#25D366]/50 hover:bg-[#16171d] hover:text-white active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B5D448] focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b] motion-reduce:active:scale-100"
      >
        <WhatsAppIcon className="h-5 w-5 shrink-0 transition-transform duration-150 group-hover:scale-105 motion-reduce:transform-none" />

        {/* Tooltip discreto exclusivo de desktop (hover/focus) */}
        <span
          role="tooltip"
          className="pointer-events-none absolute right-full mr-3 hidden items-center whitespace-nowrap rounded-lg border border-white/10 bg-[#121318] px-3 py-1.5 text-xs font-medium text-white shadow-xl opacity-0 transition-opacity duration-150 after:absolute after:left-full after:top-1/2 after:-translate-y-1/2 after:border-4 after:border-transparent after:border-l-[#121318] sm:flex group-hover:opacity-100 group-focus-visible:opacity-100"
        >
          Consultar por WhatsApp
        </span>
      </a>
    </aside>
  )
}
