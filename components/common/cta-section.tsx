import React from 'react'
import Link from 'next/link'
import { MoveRight } from 'lucide-react'
import { GlowButton } from '@/components/common/glow-button'

interface CTASectionProps {
  eyebrow?: string
  title?: React.ReactNode
  description?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}

export function CTASection({
  eyebrow = 'Planificación técnica',
  title = '¿Tenés un evento en mente?',
  description = 'Contanos tu proyecto y armamos una propuesta técnica a la medida de tu espacio, público y nivel de exigencia.',
  primaryLabel = 'Pedí tu presupuesto',
  primaryHref = '/contacto',
  secondaryLabel,
  secondaryHref,
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 lg:py-28">
      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 sm:p-14 lg:p-20 text-center">
          {/* Subtle ambient backglow (sin violeta/magenta) */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-[#b5d448]/10 via-[#0284c7]/5 to-transparent blur-[140px]" />

          <div className="relative mx-auto max-w-[680px]">
            <p className="eyebrow mb-3 sm:mb-4">{eyebrow}</p>
            <h2 className="text-balance text-[clamp(1.75rem,4.5vw,3.5rem)] font-medium leading-[1.08] sm:leading-[1.05] tracking-[-0.03em] sm:tracking-[-0.04em] text-white">
              {title}
            </h2>
            <p className="mx-auto mt-4 sm:mt-6 max-w-[520px] text-sm sm:text-base leading-relaxed text-white/75">
              {description}
            </p>

            <div className="mt-8 sm:mt-9 flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row">
              <GlowButton href={primaryHref} className="w-full sm:w-auto px-7 py-3.5">
                {primaryLabel}
              </GlowButton>

              {secondaryLabel && secondaryHref && (
                <Link
                  href={secondaryHref}
                  className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm text-white transition-[border-color,background-color,box-shadow,transform] duration-150 hover:border-[#B5D448]/50 hover:bg-white/5 hover:shadow-[0_0_20px_-4px_rgba(181,212,72,0.3)] active:scale-[0.98] motion-reduce:active:scale-100"
                >
                  {secondaryLabel}
                  <MoveRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
