import Link from 'next/link'
import { ArrowUpRight, ShoppingBag } from 'lucide-react'
import { siteConfig } from '@/data/site'

export function SalesPreview() {
  return (
    <section className="mx-auto max-w-[1320px] px-5 py-8 sm:py-10 lg:py-12 lg:px-8">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.03] via-white/[0.015] to-transparent p-6 sm:p-7 lg:p-8">
        {/* Sutil halo ambiental */}
        <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[#B5D448]/5 blur-[70px]" />

        <div className="relative flex flex-col justify-between gap-6 sm:gap-8 lg:flex-row lg:items-center">
          <div className="max-w-[620px]">
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B5D448]">
              <ShoppingBag size={14} />
              <span>Renovación de parque</span>
            </div>
            <h3 className="mt-2.5 text-xl font-medium tracking-tight text-white sm:text-2xl">
              Equipamiento en venta por renovación de parque.
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/60">
              Consultá el stock actualizado de consolas, sonido, iluminación y pantallas en nuestra tienda oficial con compra protegida.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center lg:shrink-0">
            <a
              href={siteConfig.mercadolibreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold !text-[#09090b] transition-all hover:bg-[#B5D448] hover:shadow-[0_0_20px_rgba(181,212,72,0.3)]"
            >
              Ver tienda en Mercado Libre
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 !text-[#09090b]"
              />
            </a>
            <Link
              href="/venta"
              className="inline-flex items-center gap-1.5 px-2 py-1 text-xs text-white/50 transition-colors hover:text-white"
            >
              Ver detalles de catálogo
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
