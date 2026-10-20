import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const units = [
  {
    number: '01',
    title: 'Alquiler de Equipamiento',
    tagline: 'Rental audiovisual y tecnológico',
    description:
      'Equipamiento audiovisual, informática, conectividad y soporte técnico para empresas, eventos y producciones.',
    href: '/alquiler',
    cta: 'Explorar alquiler',
    items: ['Sonido e iluminación escénica', 'Pantallas LED y proyectores', 'Smart TVs, informática y Starlink'],
  },
  {
    number: '02',
    title: 'Servicios & Producción',
    tagline: 'Operación técnica en vivo',
    description:
      'Streaming, traducción simultánea, conectividad satelital, escenarios y coordinación técnica para eventos.',
    href: '/servicios',
    cta: 'Ver servicios',
    items: ['Transmisión y streaming en vivo', 'Traducción simultánea para congresos', 'Escenarios, tarimas y energía temporal'],
  },
  {
    number: '03',
    title: 'Instalaciones',
    tagline: 'Integración permanente',
    description:
      'Integración de audio, video, automatización, seguridad y control de acceso para espacios corporativos y comerciales.',
    href: '/instalaciones',
    cta: 'Ver instalaciones',
    items: ['Audio y video fijo para auditorios', 'Domótica y control ambiental', 'CCTV y control de acceso seguro'],
  },
]

export function BusinessUnits() {
  return (
    <section className="section-padding mx-auto max-w-[1320px] px-5 lg:px-8">
      <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <span className="eyebrow flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B5D448]" />
            Unidades de Negocio
          </span>
          <h2 className="section-title mt-4">
            Tres áreas de<br />
            <span className="text-white">especialización técnica.</span>
          </h2>
        </div>
        <p className="max-w-[420px] text-sm leading-relaxed text-white/70">
          Infraestructura de alquiler, soporte técnico para producciones en vivo e instalaciones permanentes para empresas y espacios corporativos.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {units.map((unit) => (
          <Link
            key={unit.number}
            href={unit.href}
            className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#111114] p-6 sm:p-7 lg:p-8 transition-all duration-300 hover:border-[#B5D448]/40 hover:bg-[#15151a]"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs tracking-wider text-white/40">
                  UNIDAD · {unit.number}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#B5D448]">
                  {unit.tagline}
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-medium tracking-tight text-white transition-colors group-hover:text-white">
                {unit.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {unit.description}
              </p>

              <div className="mt-6 border-t border-white/[0.06] pt-5">
                <ul className="flex flex-col gap-2">
                  {unit.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-xs text-white/60"
                    >
                      <span className="h-1 w-1 rounded-full bg-[#B5D448]/70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-4">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B5D448] transition-all group-hover:translate-x-1 group-hover:text-white">
                {unit.cta} <ArrowUpRight size={14} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
