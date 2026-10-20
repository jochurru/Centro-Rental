import type { Metadata } from 'next'
import { CheckCircle2, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { PageHero } from '@/components/common/page-hero'
import { CTASection } from '@/components/common/cta-section'
import { installationServices } from '@/data/site'
import { CategoryIcon } from '@/components/common/category-icons'

export const metadata: Metadata = {
  title: 'Instalaciones Fijas & Integración | Centro Rental',
  description:
    'Proyectos de integración técnica fija: audio y video corporativo, domótica, automatización, cámaras de seguridad y control de acceso.',
}

export default function InstalacionesPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="Instalaciones Fijas & Integración"
        title={
          <>
            Tecnología fija para{' '}
            <span className="text-[#B5D448]">espacios corporativos.</span>
          </>
        }
        description="Diseño, provisión y montaje de equipamiento permanente para salas de conferencias, auditorios, oficinas y espacios comerciales."
      />

      {/* Grid de servicios de instalaciones fijas */}
      <section className="section-padding mx-auto max-w-[1320px] px-5 lg:px-8">
        <div className="mb-12">
          <span className="eyebrow flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B5D448]" />
            Soluciones permanentes
          </span>
          <h2 className="section-title mt-4">
            Infraestructura técnica{' '}
            <span className="text-white">integrada a tu espacio.</span>
          </h2>
          <p className="mt-4 max-w-[560px] text-sm text-white/75">
            Desarrollamos proyectos de instalación audiovisual, conectividad y seguridad con criterios de prolijidad, durabilidad y facilidad de operación diaria.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {installationServices.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 hover:border-[#B5D448]/40 hover:bg-white/[0.04]"
            >
              <div>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#0D0E12] transition-colors group-hover:border-[#B5D448]/40 group-hover:bg-[#121318]">
                  <CategoryIcon
                    categoryId={item.id}
                    iconName={item.iconName}
                    className="h-6 w-6 text-zinc-200 transition-colors group-hover:text-white"
                  />
                </div>

                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#B5D448]">
                  {item.subtitle}
                </span>

                <h3 className="mt-2 text-2xl font-medium text-white group-hover:text-zinc-100 transition-colors">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 border-t border-white/[0.06] pt-5">
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-white/40">
                  Alcance de integración
                </p>
                <div className="grid gap-2 sm:grid-cols-2">
                  {item.specs.map((spec) => (
                    <div
                      key={spec}
                      className="flex items-center gap-2 text-xs text-white/70"
                    >
                      <CheckCircle2 size={13} className="text-[#B5D448] shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-3">
                  <Link
                    href="/contacto"
                    className="inline-flex items-center gap-1.5 text-xs text-white/50 group-hover:text-[#B5D448] transition-colors"
                  >
                    Consultar por proyecto de instalación
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
        eyebrow="Asesoramiento técnico"
        title="Contanos las necesidades de tu espacio."
        description="Analizamos el plano, los requerimientos de uso y diseñamos una solución técnica permanente con soporte e instalación profesional."
        primaryLabel="Solicitar presupuesto"
        primaryHref="/contacto"
        secondaryLabel="Ver servicios de eventos"
        secondaryHref="/servicios"
      />
    </div>
  )
}
