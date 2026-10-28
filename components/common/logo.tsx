'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface LogoProps {
  className?: string
  priority?: boolean
}

/**
 * Componente Logo oficial de Centro Rental — Versión Oscura 3D.
 * 
 * - Fondo negro integrado directamente en el header sin pastilla blanca.
 * - Isotipo 3D oficial: esferas verde, azul y roja con órbita metálica reflectante.
 * - Tipografía corporativa: "CENTRO" en azul tridimensional y "RENTAL" en metal cepillado.
 * - Subtítulo oficial: "SOUND & VISION" ubicado debajo de CENTRO.
 * - Fusión óptica perfecta con el fondo #09090B del header mediante mix-blend-screen.
 * - Centrado verticalmente dentro de la altura del header sin desbordar el borde inferior.
 */
export function Logo({ className = '', priority = true }: LogoProps) {
  return (
    <Link
      href="/"
      className={`group relative inline-flex items-center justify-center transition-all duration-150 ease-out active:scale-[0.99] motion-reduce:transition-none motion-reduce:transform-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B5D448] focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090B] ${className}`}
      aria-label="Centro Rental — Inicio"
    >
      <span className="relative block h-[56px] w-[109px] sm:h-[74px] sm:w-[144px] lg:h-[88px] lg:w-[172px] transition-transform duration-200 group-hover:scale-[1.01]">
        <Image
          src="/brand/centro-rental-logo-dark-3d.png"
          alt="Centro Rental — Sound & Vision"
          fill
          priority={priority}
          sizes="(max-width: 640px) 109px, (max-width: 1024px) 144px, 172px"
          className="object-contain mix-blend-screen select-none"
        />
      </span>
    </Link>
  )
}
