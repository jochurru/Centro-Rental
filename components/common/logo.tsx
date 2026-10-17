import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface LogoProps {
  className?: string
  priority?: boolean
  variant?: 'original' | 'auto' | 'dark' | 'light' | 'mono' | 'mobile'
}

/**
 * Componente Logo oficial de Centro Rental.
 * 
 * Utiliza el logo histórico original real (content-source/raw/logos/logos_logo_b2549209.png):
 * - Esferas verde, azul, roja y órbita gris.
 * - Tipografía "CENTRO" en azul degradado original.
 * - Tipografía "RENTAL" en negro original.
 * - Subtítulo "SOUND & VISION" en gris oscuro original.
 * - Integrado dentro de una placa / cápsula blanca (#FFFFFF) sólida, limpia y equilibrada.
 */
export function Logo({ className = '', priority = true }: LogoProps) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center justify-center rounded-xl bg-white px-3.5 py-1.5 shadow-sm shadow-black/40 ring-1 ring-white/10 transition-all duration-200 hover:ring-white/30 hover:shadow-md ${className}`}
      aria-label="Centro Rental — Inicio"
    >
      {/* Contenedor del logo con proporciones nativas 587x75 (ratio ~7.82) */}
      <span className="relative block h-[22px] w-[172px] sm:h-[28px] sm:w-[219px] md:h-[30px] md:w-[235px]">
        <Image
          src="/brand/centro-rental-logo-original.png"
          alt="Centro Rental — Sound & Vision"
          fill
          priority={priority}
          sizes="(max-width: 640px) 172px, (max-width: 768px) 219px, 235px"
          className="object-contain"
        />
      </span>
    </Link>
  )
}
