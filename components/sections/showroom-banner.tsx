import Link from 'next/link'
import { MapPin, ArrowUpRight } from 'lucide-react'

export function ShowroomBanner() {
  return (
    <section className="mx-auto max-w-[1320px] px-5 py-8 sm:py-12 lg:px-8">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0e0f13] p-6 sm:p-9 lg:p-11">
        {/* Sutil resplandor de acento verde institucional */}
        <div className="pointer-events-none absolute -left-12 -top-12 h-44 w-44 rounded-full bg-[#B5D448]/5 blur-[70px]" />

        <div className="relative flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div className="max-w-[680px]">
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B5D448]">
              <MapPin size={13} />
              <span>Espacio físico & retiros</span>
            </div>

            <h3 className="mt-2.5 text-2xl font-medium tracking-tight text-white sm:text-3xl">
              Visitá nuestro showroom en CABA.
            </h3>

            <p className="mt-2.5 text-sm leading-relaxed text-white/70 sm:text-base">
              Conocé equipamiento, coordiná retiros o conversá tu proyecto con nuestro equipo técnico.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-white/50">
              <span className="font-medium text-white/80">Dirección:</span>
              <span>Av. Belgrano 2450 · Ciudad Autónoma de Buenos Aires</span>
            </div>
          </div>

          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center lg:shrink-0">
            <Link
              href="/contacto"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all hover:border-[#B5D448]/50 hover:bg-white/10 hover:text-white hover:shadow-[0_0_20px_-4px_rgba(181,212,72,0.3)]"
            >
              Ver contacto y ubicación
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
