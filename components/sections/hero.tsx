import Link from 'next/link'
import Image from 'next/image'
import { MoveRight } from 'lucide-react'
import { GlowButton } from '@/components/common/glow-button'
import { siteConfig } from '@/data/site'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[720px] items-end overflow-hidden pb-16 pt-32 sm:pb-20 lg:min-h-screen lg:pb-24 scroll-mt-[74px]"
    >
      {/* Fotografía de escenario real (Teatro ND) con tratamiento cinematográfico */}
      <Image
        src="/hero-event.webp"
        alt="Producción técnica de escenario con iluminación y pantallas en vivo"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-65"
      />

      {/* Overlays cinematográficos de contraste y fusión hacia el fondo */}
      <div className="hero-grid absolute inset-0 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#09090b] via-[#09090b]/80 to-[#09090b]/20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/30 to-transparent pointer-events-none" />

      {/* Ambient glow sutil en verde y azul institucional */}
      <div className="ambient-orb absolute -right-20 top-1/3 h-80 w-80 rounded-full bg-[#0284C7]/6 blur-[150px] pointer-events-none" />
      <div className="ambient-orb absolute -left-20 bottom-1/4 h-72 w-72 rounded-full bg-[#B5D448]/8 blur-[150px] pointer-events-none" />

      <div className="relative mx-auto w-full max-w-[1320px] px-5 lg:px-8">
        <div className="max-w-[840px]">
          {/* Eyebrow técnico */}
          <div className="mb-6 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.25em] text-white/70">
            <span className="h-px w-8 bg-[#B5D448]" />
            Producción técnica para eventos
          </div>

          {/* H1 principal */}
          <h1 className="text-balance text-[clamp(2.75rem,7vw,7.2rem)] font-medium leading-[0.93] tracking-[-0.06em] text-white">
            Hacemos que tu evento se vea,
            <br className="hidden sm:block" /> se escuche y se{' '}
            <span className="text-[#B5D448]">sienta.</span>
          </h1>

          {/* Bajada comercial */}
          <p className="mt-6 max-w-[540px] text-base leading-relaxed text-white/75 sm:text-lg">
            Soluciones de sonido, iluminación, pantallas y equipamiento técnico para eventos que dejan marca.
          </p>

          {/* CTAs principales */}
          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <GlowButton href="/contacto" className="px-7 py-3.5 text-sm font-medium">
              Pedí tu presupuesto
            </GlowButton>
            <Link
              href="/alquiler"
              className="group flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm text-white transition-all hover:border-[#B5D448]/50 hover:bg-white/5 hover:shadow-[0_0_20px_-4px_rgba(181,212,72,0.3)]"
            >
              Ver equipamiento{' '}
              <MoveRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* Metadatos de disponibilidad y locación */}
        <div className="mt-12 flex items-center gap-5 text-[11px] uppercase tracking-[0.2em] text-white/60 sm:mt-16">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#B5D448] shadow-[0_0_12px_#B5D448]" />
            {siteConfig.availability}
          </span>
          <span className="h-3 w-px bg-white/20" />
          <span>{siteConfig.location}</span>
        </div>
      </div>

      <div className="absolute bottom-9 right-8 hidden items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/60 lg:flex">
        <span>Scroll para explorar</span>
        <span className="h-10 w-px bg-gradient-to-b from-[#B5D448]/60 to-transparent" />
      </div>
    </section>
  )
}
