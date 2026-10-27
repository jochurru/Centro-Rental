import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface LogoProps {
  className?: string
  priority?: boolean
}

/**
 * Componente Logo oficial de Centro Rental.
 * 
 * Utiliza el logo histórico original auténtico (/brand/centro-rental-logo-original.png):
 * - Esferas verde, azul, roja y órbita gris (RGB oficial).
 * - Tipografía "CENTRO" en azul corporativo y "RENTAL" en negro original.
 * - Subtítulo "SOUND & VISION" en gris corporativo original.
 * - Contención: Placa técnica institucional rebalanceada (#FFFFFF) con bordes técnicos redondeados,
 *   micro-elevación sobria de 1px para presencia y anclaje en el header, micro-borde perceptible,
 *   transición ágil y target táctil accesible (>=44px).
 */
export function Logo({ className = '', priority = true }: LogoProps) {
  return (
    <Link
      href="/"
      className={`group relative inline-flex items-center justify-center rounded-md bg-white px-2.5 py-1 sm:px-3 sm:py-1.5 md:px-3.5 border border-white/20 shadow-[0_1px_3px_rgba(0,0,0,0.35)] transition-[opacity,transform] duration-[150ms] ease-out hover:opacity-95 active:scale-[0.99] motion-reduce:transition-none motion-reduce:transform-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B5D448] focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090B] before:absolute before:-inset-y-2.5 before:-inset-x-1 sm:before:hidden ${className}`}
      aria-label="Centro Rental — Inicio"
    >
      {/* Contenedor del logo con proporciones nativas 587x75 (ratio ~7.8267) */}
      <span className="relative block h-[20px] w-[157px] sm:h-[24px] sm:w-[188px] md:h-[28px] md:w-[219px]">
        <Image
          src="/brand/centro-rental-logo-original.png"
          alt="Centro Rental — Sound & Vision"
          fill
          priority={priority}
          sizes="(max-width: 640px) 157px, (max-width: 768px) 188px, 219px"
          className="object-contain"
        />
      </span>
    </Link>
  )
}
