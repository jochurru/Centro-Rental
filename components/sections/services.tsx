import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { services } from '@/data/site'

export function Services() {
  return (
    <section
      id="servicios"
      className="section-padding mx-auto max-w-[1320px] px-5 lg:px-8 scroll-mt-[74px]"
    >
      <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <span className="eyebrow">Capacidades & Servicios</span>
          <h2 className="section-title mt-4">
            Una solución para<br />
            <span className="text-white/35">cada momento.</span>
          </h2>
        </div>
        <div className="flex flex-col items-start gap-3 md:items-end">
          <p className="max-w-[330px] text-sm leading-relaxed text-white/45">
            Todo lo que necesitás para crear experiencias memorables, en un solo equipo.
          </p>
          <Link
            href="/alquiler"
            className="flex items-center gap-1.5 text-xs text-violet-300 hover:text-white transition-colors"
          >
            Explorar todas las soluciones <ArrowUpRight size={13} />
          </Link>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {services.map((service) => (
          <Link
            href="/alquiler"
            key={service.number}
            className="service-card group relative min-h-[300px] overflow-hidden rounded-2xl border border-white/10 bg-[#111114] p-6 md:min-h-[340px]"
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover opacity-45 transition duration-700 group-hover:scale-105 group-hover:opacity-65"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/50 to-transparent pointer-events-none" />
            <div className="relative flex h-full flex-col justify-between">
              <span className="text-xs text-white/45">{service.number}</span>
              <div>
                <h3 className="text-2xl font-medium tracking-tight">{service.title}</h3>
                <p className="mt-2 max-w-[280px] text-sm leading-relaxed text-white/55">
                  {service.description}
                </p>
                <span className="mt-5 flex items-center gap-2 text-xs text-white/70 opacity-0 transition group-hover:opacity-100">
                  Conocé más <ArrowUpRight size={14} />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
