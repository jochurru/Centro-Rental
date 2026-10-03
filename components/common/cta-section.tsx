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
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="relative mx-auto max-w-[1320px] px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-8 sm:p-14 lg:p-20 text-center">
          {/* Subtle Ambilight backglow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/15 blur-[120px]" />

          <div className="relative mx-auto max-w-[680px]">
            <p className="eyebrow mb-4">{eyebrow}</p>
            <h2 className="text-balance text-[clamp(2rem,4.5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.04em] text-white">
              {title}
            </h2>
            <p className="mx-auto mt-6 max-w-[520px] text-base leading-relaxed text-white/60">
              {description}
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <GlowButton href={primaryHref} className="px-7 py-3.5">
                {primaryLabel}
              </GlowButton>

              {secondaryLabel && secondaryHref && (
                <Link
                  href={secondaryHref}
                  className="group flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm text-white transition-all hover:border-white/50 hover:bg-white/5"
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
