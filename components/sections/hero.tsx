'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { MoveRight, MapPin } from 'lucide-react'
import { GlowButton } from '@/components/common/glow-button'
import { siteConfig } from '@/data/site'

// =============================================================================
// COMPONENTE DE FALLBACK ELEGANTE
// =============================================================================
function HeroFallback() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 bg-[#09090B] overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 transition-opacity duration-700"
        style={{ backgroundImage: `url('/images/rental/pantalla-led-congreso.webp')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#09090B] via-[#09090B]/90 via-35% to-transparent" />
      <div className="hero-grid absolute inset-0 opacity-15" />
    </div>
  )
}

// Carga client-only de la escena WebGL Three.js / React Three Fiber
const HeroCurvedPanels = dynamic(
  () =>
    import('./hero-curved-panels').then((mod) => mod.HeroCurvedPanels),
  {
    ssr: false,
    loading: () => <HeroFallback />,
  }
)

// =============================================================================
// HERO CENTRO RENTAL 2.0 — EVENT WALL WEBGL
// Paneles modulares sobre arco cilíndrico 3D + cámara oblicua en perspectiva
// =============================================================================
export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex flex-col sm:flex sm:min-h-[720px] lg:min-h-screen sm:items-end lg:items-start overflow-hidden pb-12 pt-0 sm:pb-20 sm:pt-32 lg:pt-[124px] lg:pb-24 scroll-mt-[64px] sm:scroll-mt-[74px] bg-[#09090B]"
    >
      {/* ============================================================== */}
      {/* CAPA 1: WEBGL CANVAS 3D                                        */}
      {/* Mobile: Franja escénica protagonista dedicada (36vh)           */}
      {/* Desktop/Tablet: Fondo monumental completo (100% intacto)       */}
      {/* ============================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none relative w-full h-[calc(36vh+68px)] min-h-[300px] max-h-[400px] pt-[68px] sm:pt-0 sm:absolute sm:inset-0 sm:h-full sm:w-full sm:min-h-0 sm:max-h-none sm:z-0 z-0 overflow-hidden"
      >
        <HeroCurvedPanels />

        {/* Fusión inferior Mobile: transiciona suavemente hacia el fondo oscuro del texto */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#09090B] via-[#09090B]/60 to-transparent pointer-events-none z-10 sm:hidden" />

        {/* Fusión superior Mobile: integración con header */}
        <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-[#09090B] via-[#09090B]/40 to-transparent pointer-events-none z-10 sm:hidden" />

        {/* Fusión lateral Mobile: bordes suaves para entrada/salida de paneles */}
        <div className="absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-[#09090B]/60 to-transparent pointer-events-none z-10 sm:hidden" />
        <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#09090B]/60 to-transparent pointer-events-none z-10 sm:hidden" />
      </div>

      {/* ============================================================== */}
      {/* CAPA 2: MÁSCARAS LOCALES DOM/CSS Y MÁXIMA LUMINOSIDAD          */}
      {/* Protege 100% el texto en Desktop sin afectar la franja mobile  */}
      {/* ============================================================== */}

      {/* Trama técnica milimétrica de fondo */}
      <div className="hero-grid absolute inset-0 pointer-events-none opacity-20 z-10 hidden sm:block" />

      {/* Gradiente horizontal local Desktop: Oscuro en zona de lectura (0-35%), 100% libre a la derecha */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#09090B] via-[#09090B]/95 via-32% to-transparent pointer-events-none z-10 hidden sm:block" />

      {/* Máscara radial elíptica localizada sobre el bloque tipográfico Desktop */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_52%,rgba(9,9,11,0.98)_0%,rgba(9,9,11,0.92)_32%,rgba(9,9,11,0.5)_55%,transparent_75%)] pointer-events-none z-10 hidden sm:block" />

      {/* Fusión superior sutil para navbar Desktop */}
      <div className="absolute inset-x-0 top-0 h-24 sm:h-32 bg-gradient-to-b from-[#09090B] via-[#09090B]/60 to-transparent pointer-events-none z-10 hidden sm:block" />

      {/* Fusión inferior sobria hacia el siguiente bloque Desktop */}
      <div className="absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-gradient-to-t from-[#09090B] via-[#09090B]/70 to-transparent pointer-events-none z-10 hidden sm:block" />

      {/* Fusión lateral derecha suave para entrada de paneles Desktop */}
      <div className="absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#09090B]/80 to-transparent pointer-events-none z-10 hidden sm:block" />

      {/* Ambient glow corporativo sutil (Azul técnico + Verde corporativo) */}
      <div className="ambient-orb absolute right-[10%] top-1/3 h-96 w-96 rounded-full bg-[#0284C7]/10 blur-[160px] pointer-events-none z-10" />
      <div className="ambient-orb absolute -left-12 bottom-1/4 h-80 w-80 rounded-full bg-[#B5D448]/8 blur-[160px] pointer-events-none z-10" />

      {/* ============================================================== */}
      {/* CAPA 3: CONTENIDO COMERCIAL CENTRO RENTAL (100% INTACTO)        */}
      {/* Mobile: Fluye naturalmente debajo de la Event Wall             */}
      {/* Desktop: A la izquierda con max-w-[1320px]                     */}
      {/* ============================================================== */}
      <div className="relative mx-auto w-full max-w-[1320px] px-4 sm:px-5 lg:px-8 z-20 -mt-6 sm:mt-0">
        <div className="max-w-[860px]">
          {/* Eyebrow comercial ampliado */}
          <div className="mb-4 sm:mb-6 flex items-center gap-3 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] sm:tracking-[0.25em] text-white/70">
            <span className="h-px w-8 bg-[#B5D448]" />
            Alquiler · Servicios · Eventos · Instalaciones
          </div>

          {/* H1 principal sin gradiente de texto */}
          <h1 className="text-balance text-[clamp(2.1rem,6.5vw,6.5rem)] font-medium leading-[0.98] sm:leading-[0.96] tracking-[-0.04em] sm:tracking-[-0.05em] text-white">
            Hacemos que tu evento o espacio se vea, se escuche y{' '}
            <span className="text-[#B5D448]">funcione.</span>
          </h1>

          {/* Bajada comercial */}
          <p className="mt-4 sm:mt-6 max-w-[580px] text-sm sm:text-base leading-relaxed text-white/75 sm:text-lg">
            Alquiler de tecnología audiovisual, sonido, iluminación, pantallas, conectividad y soluciones técnicas para eventos, empresas e instalaciones.
          </p>

          {/* CTAs principales */}
          <div className="mt-7 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <GlowButton href="/contacto" className="w-full sm:w-auto px-7 py-3.5 text-sm font-medium">
              Solicitar presupuesto
            </GlowButton>
            <Link
              href="/alquiler"
              className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm text-white transition-[border-color,background-color,box-shadow,transform] duration-150 hover:border-[#B5D448]/50 hover:bg-white/5 hover:shadow-[0_0_20px_-4px_rgba(181,212,72,0.3)] active:scale-[0.98] motion-reduce:active:scale-100"
            >
              Ver equipamiento{' '}
              <MoveRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* Metadatos con disponibilidad y showroom */}
        <div className="mt-8 sm:mt-16 flex flex-wrap items-center gap-3 sm:gap-5 text-[10px] sm:text-[11px] uppercase tracking-[0.16em] sm:tracking-[0.18em] text-white/60">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#B5D448] shadow-[0_0_12px_#B5D448]" />
            {siteConfig.availability}
          </span>
          <span className="h-3 w-px bg-white/20" />
          <span className="flex items-center gap-1.5 text-white/75">
            <MapPin size={12} className="text-[#B5D448]" />
            Showroom en Av. Belgrano 2450 · CABA
          </span>
        </div>
      </div>
    </section>
  )
}
