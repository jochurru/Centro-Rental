import Link from 'next/link'
import Image from 'next/image'
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
    image: '/images/rental/proyector-profesional.webp',
    imageAlt: 'Proyector profesional de alta potencia óptica',
    badge: 'Parque técnico',
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
    image: '/images/services/streaming-operadores.webp',
    imageAlt: 'Operadores técnicos en streaming y conmutación de video',
    badge: 'Operación en vivo',
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
    image: '/images/installations/audio-rack-showroom.webp',
    imageAlt: 'Equipamiento de audio y racks de procesamiento',
    badge: 'Equipamiento e integración',
    items: ['Audio y video fijo para auditorios', 'Domótica y control ambiental', 'CCTV y control de acceso seguro'],
  },
]

export function BusinessUnits() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 mx-auto max-w-[1320px] px-5 lg:px-8">
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
            className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#111114] p-5 sm:p-6 lg:p-7 transition-all duration-300 hover:border-[#B5D448]/40 hover:bg-[#15151a]"
          >
            <div>
              {/* Franja fotográfica editorial */}
              <div className="relative mb-5 h-40 sm:h-44 w-full overflow-hidden rounded-xl border border-white/10 bg-black/40">
                <Image
                  src={unit.image}
                  alt={unit.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111114] via-black/25 to-transparent" />
                <div className="absolute bottom-2.5 left-3">
                  <span className="rounded bg-black/70 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-white/80 backdrop-blur-sm border border-white/10">
                    {unit.badge}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-mono text-xs tracking-wider text-white/50">
                  UNIDAD · {unit.number}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#B5D448]">
                  {unit.tagline}
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-medium tracking-tight text-white transition-colors group-hover:text-white">
                {unit.title}
              </h3>

              <p className="mt-2.5 text-sm leading-relaxed text-white/60">
                {unit.description}
              </p>

              <div className="mt-5 border-t border-white/[0.06] pt-4">
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

            <div className="mt-6 pt-3">
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
