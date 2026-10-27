import type { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle2, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { PageHero } from '@/components/common/page-hero'
import { CTASection } from '@/components/common/cta-section'
import { specialServices } from '@/data/site'
import { CategoryIcon } from '@/components/common/category-icons'

export const metadata: Metadata = {
  title: 'Servicios Especiales & Operativos | Centro Rental',
  description:
    'Servicios técnicos para eventos: streaming profesional, traducción simultánea, internet satelital Starlink, escenarios, grupos electrógenos y producción integral.',
}

export default function ServiciosPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="Servicios Especiales & Operativos"
        title={
          <>
            Servicios técnicos para{' '}
            <span className="text-[#B5D448]">cada escenario.</span>
          </>
        }
        description="Infraestructura técnica, conectividad y soporte operativo para eventos corporativos, congresos y transmisiones en vivo."
      />

      {/* Grid de servicios especiales */}
      <section className="section-padding mx-auto max-w-[1320px] px-5 lg:px-8">
        <div className="mb-12">
          <span className="eyebrow flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B5D448]" />
            Capacidades operativas
          </span>
          <h2 className="section-title mt-4">
            Infraestructura técnica{' '}
            <span className="text-white">en acción.</span>
          </h2>
          <p className="mt-4 max-w-[560px] text-sm text-white/75">
            Brindamos soluciones técnicas integradas con equipamiento y personal preparado para las exigencias de cada producción.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {specialServices.map((service) => (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-7 transition-[border-color,background-color] duration-200 hover:border-[#B5D448]/40 hover:bg-white/[0.04]"
            >
              <div>
                {/* Evidencia fotográfica real o icono técnico */}
                {service.image ? (
                  <div className="relative mb-5 h-44 w-full overflow-hidden rounded-xl border border-white/10 bg-black/40">
                    <Image
                      src={service.image}
                      alt={service.imageAlt || service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-200 ease-out group-hover:scale-[1.02] motion-reduce:transform-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                    <div className="absolute bottom-3 left-3 flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-black/70 text-zinc-200 backdrop-blur-sm group-hover:border-[#B5D448]/40 group-hover:text-white">
                      <CategoryIcon
                        categoryId={service.id}
                        iconName={service.iconName}
                        className="h-4 w-4"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#0D0E12] transition-colors group-hover:border-[#B5D448]/40 group-hover:bg-[#121318]">
                    <CategoryIcon
                      categoryId={service.id}
                      iconName={service.iconName}
                      className="h-6 w-6 text-zinc-200 transition-colors group-hover:text-white"
                    />
                  </div>
                )}

                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#B5D448]">
                  {service.subtitle}
                </span>

                <h3 className="mt-2 text-xl font-medium text-white group-hover:text-zinc-100 transition-colors">
                  {service.title}
                </h3>

                <p className="mt-2.5 text-sm leading-relaxed text-white/55">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 border-t border-white/[0.06] pt-5">
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-white/40">
                  Equipamiento y alcance
                </p>
                <ul className="flex flex-col gap-2">
                  {service.specs.map((spec) => (
                    <li
                      key={spec}
                      className="flex items-center gap-2 text-xs text-white/70"
                    >
                      <CheckCircle2 size={13} className="text-[#B5D448] shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 pt-3">
                  <Link
                    href={service.href || '/contacto'}
                    className="inline-flex items-center gap-1.5 text-xs text-white/50 group-hover:text-[#B5D448] transition-colors"
                  >
                    {service.href ? 'Ver detalles del estudio' : 'Consultar por este servicio'}
                    <ArrowUpRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cierre comercial con derivación a contacto */}
      <CTASection
        eyebrow="Presupuesto a medida"
        title="Coordinemos la técnica de tu próximo evento."
        description="Escribinos con la fecha, tipo de evento y locación. Nuestro equipo arma una propuesta integral adaptada a tus requerimientos."
        primaryLabel="Solicitar presupuesto"
        primaryHref="/contacto"
        secondaryLabel="Ver equipamiento en alquiler"
        secondaryHref="/alquiler"
      />
    </div>
  )
}
