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
      <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <span className="eyebrow flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B5D448]" />
            Capacidades & Servicios
          </span>
          <h2 className="section-title mt-4">
            Ingeniería técnica para<br />
            <span className="text-white">cada momento.</span>
          </h2>
        </div>
        <div className="flex flex-col items-start gap-3 md:items-end">
          <p className="max-w-[340px] text-sm leading-relaxed text-white/75">
            Sonido, iluminación, pantallas y dirección técnica integrados en un mismo equipo de trabajo.
          </p>
          <Link
            href="/alquiler"
            className="flex items-center gap-1.5 text-xs text-[#B5D448] hover:text-white transition-colors"
          >
            Explorar catálogo de alquiler <ArrowUpRight size={13} />
          </Link>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <Link
            href="/alquiler"
            key={service.number}
            className="service-card group relative min-h-[300px] overflow-hidden rounded-2xl border border-white/10 bg-[#111114] p-7 transition-all duration-500 hover:border-[#B5D448]/40 hover:bg-[#15151a] md:min-h-[330px]"
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover opacity-35 transition duration-700 group-hover:scale-105 group-hover:opacity-55"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/60 to-transparent pointer-events-none" />

            <div className="relative flex h-full flex-col justify-between z-10">
              <span className="text-xs font-mono tracking-wider text-white/40">
                {service.number}
              </span>
              <div>
                <h3 className="text-2xl font-medium tracking-tight text-white transition-colors group-hover:text-white">
                  {service.title}
                </h3>
                <p className="mt-2.5 max-w-[320px] text-sm leading-relaxed text-white/60">
                  {service.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-xs font-medium text-[#B5D448] opacity-80 transition-all group-hover:translate-x-1 group-hover:opacity-100">
                  Ver equipamiento de {service.title.toLowerCase()} <ArrowUpRight size={13} />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
