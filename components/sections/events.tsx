import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { events } from '@/data/site'

export function Events() {
  return (
    <section
      id="eventos"
      className="section-padding mx-auto max-w-[1320px] px-5 lg:px-8 scroll-mt-[74px]"
    >
      <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <span className="eyebrow">Hecho realidad</span>
          <h2 className="section-title mt-4">
            Eventos que<br />
            <span className="text-white/35">hablan por sí solos.</span>
          </h2>
        </div>
        <div className="flex flex-col items-start gap-3 md:items-end">
          <p className="max-w-[290px] text-sm leading-relaxed text-white/45">
            Una selección de proyectos donde la técnica se vuelve experiencia.
          </p>
          <Link
            href="/eventos"
            className="flex items-center gap-1.5 text-xs text-violet-300 hover:text-white transition-colors"
          >
            Ver todos los eventos <ArrowUpRight size={13} />
          </Link>
        </div>
      </div>

      <div className="grid auto-rows-[220px] gap-3 md:grid-cols-12 md:auto-rows-[190px]">
        {events.map((event) => (
          <Link
            href="/eventos"
            key={event.type}
            className={`event-card group relative overflow-hidden rounded-2xl ${event.className}`}
          >
            <Image
              src={event.image}
              alt={event.type}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 50vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-5 left-5 z-10">
              <p className="text-sm font-medium">{event.type}</p>
              <p className="mt-1 text-xs text-white/50">{event.location}</p>
            </div>
            <div className="absolute right-4 top-4 z-10 rounded-full border border-white/20 p-2 opacity-0 transition group-hover:opacity-100">
              <ArrowUpRight size={15} />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
