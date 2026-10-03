import type { Metadata } from 'next'
import Image from 'next/image'
import { ArrowUpRight, ShieldCheck, Truck, Wrench } from 'lucide-react'
import { PageHero } from '@/components/common/page-hero'
import { CTASection } from '@/components/common/cta-section'
import { saleProducts, siteConfig } from '@/data/site'

export const metadata: Metadata = {
  title: 'Venta de Equipamiento | Centro Rental',
  description:
    'Catálogo de equipamiento profesional audiovisual en venta. Equipos revisados con compra protegida en nuestra tienda oficial de Mercado Libre.',
}

export default function VentaPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="Venta & Renovación de Parque"
        title={
          <>
            Equipamiento profesional{' '}
            <span className="hero-gradient-text">en venta.</span>
          </>
        }
        description="Equipos de audio, iluminación y video profesional de primeras marcas. Operamos como catálogo oficial y canalizamos las compras a través de nuestra tienda protegida en Mercado Libre."
      />

      {/* Banner oficial Mercado Libre */}
      <section className="mx-auto max-w-[1320px] px-5 pt-12 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-yellow-500/20 bg-yellow-500/[0.04] p-6 backdrop-blur-md sm:flex-row sm:p-8">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-yellow-400 font-bold text-black">
              ML
            </span>
            <div>
              <p className="text-sm font-semibold text-white">
                Canal Oficial de Venta en Mercado Libre
              </p>
              <p className="text-xs text-white/60">
                Garantía de compra protegida, financiación y envíos seguros a todo el país.
              </p>
            </div>
          </div>
          <a
            href={siteConfig.mercadolibreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center gap-2 rounded-full border border-yellow-400/40 bg-yellow-400/10 px-5 py-2.5 text-xs font-medium text-yellow-300 transition-colors hover:bg-yellow-400/20"
          >
            Ver catálogo completo en Mercado Libre
            <ArrowUpRight size={14} />
          </a>
        </div>
      </section>

      {/* Grid de productos en venta */}
      <section className="section-padding mx-auto max-w-[1320px] px-5 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="eyebrow">Catálogo destacado</span>
            <h2 className="section-title mt-4">
              Equipos disponibles para venta directa.
            </h2>
          </div>
          <p className="max-w-[320px] text-xs text-white/50">
            Los precios, promociones bancarias y stock actualizado se gestionan directamente en Mercado Libre.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {saleProducts.map((prod) => (
            <div
              key={prod.id}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all hover:border-white/20 hover:bg-white/[0.04]"
            >
              <div>
                <div className="relative aspect-square w-full bg-black/50">
                  <Image
                    src={prod.image}
                    alt={prod.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-3 top-3">
                    <span className="rounded-full border border-white/15 bg-black/60 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur-sm">
                      {prod.category}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-[11px] font-medium text-emerald-400">
                    {prod.status}
                  </p>
                  <h3 className="mt-1.5 text-base font-medium text-white group-hover:text-violet-200 transition-colors">
                    {prod.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/50">
                    {prod.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <a
                  href={prod.mercadolibreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.05] py-2.5 text-xs font-medium text-white transition-colors hover:border-yellow-400/40 hover:bg-yellow-400/10 hover:text-yellow-300"
                >
                  Ver en Mercado Libre
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Reaseguros comerciales */}
        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          <div className="flex items-start gap-3.5 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
            <Wrench className="h-5 w-5 shrink-0 text-violet-400" />
            <div>
              <p className="text-sm font-medium text-white">Revisión técnica</p>
              <p className="mt-1 text-xs text-white/50">
                Cada equipo es testeado y calibrado por técnicos antes de ser publicado.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
            <ShieldCheck className="h-5 w-5 shrink-0 text-emerald-400" />
            <div>
              <p className="text-sm font-medium text-white">Compra protegida</p>
              <p className="mt-1 text-xs text-white/50">
                Operaciones respaldadas mediante Mercado Pago y la plataforma de Mercado Libre.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
            <Truck className="h-5 w-5 shrink-0 text-cyan-400" />
            <div>
              <p className="text-sm font-medium text-white">Logística y envíos</p>
              <p className="mt-1 text-xs text-white/50">
                Embalaje profesional adecuado para equipamiento sensible y envíos al interior.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <CTASection
        eyebrow="Ventas especiales"
        title="¿Buscás un lote o equipo específico?"
        description="Si necesitás renovar tu equipamiento o buscás modelos que no figuren en catálogo inmediato, consultanos directamente."
        primaryLabel="Consultar por equipamiento"
        primaryHref="/contacto"
        secondaryLabel="Ir a tienda Mercado Libre"
        secondaryHref={siteConfig.mercadolibreUrl}
      />
    </div>
  )
}
