import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { events } from '@/data/site'

export function Events() {
  const [featuredEvent, ...otherEvents] = events

  return (
    <section
      id="eventos"
      className="section-padding mx-auto max-w-[1320px] px-5 lg:px-8 scroll-mt-[74px]"
    >
      <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <span className="eyebrow flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B5D448]" />
            Hecho realidad
          </span>
          <h2 className="section-title mt-4">
            Eventos que<br />
            <span className="text-white">hablan por sí solos.</span>
          </h2>
        </div>
        <div className="flex flex-col items-start gap-3 md:items-end">
          <p className="max-w-[320px] text-sm leading-relaxed text-white/75">
            Una selección de proyectos reales donde la técnica se vuelve experiencia.
          </p>
          <Link
            href="/eventos"
            className="flex items-center gap-1.5 text-xs text-[#B5D448] hover:text-white transition-colors"
          >
            Ver todos los eventos <ArrowUpRight size={13} />
          </Link>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-12 md:h-[480px]">
        {/* Evento Principal: Teatro Colón (mayor presencia visual) */}
        {featuredEvent && (
          <Link
            href="/eventos"
            key={featuredEvent.type}
            className="event-card group relative h-[320px] overflow-hidden rounded-2xl border border-white/10 bg-black/40 transition-all duration-500 hover:border-white/25 sm:h-[380px] md:col-span-7 md:h-full"
          >
            <Image
              src={featuredEvent.image}
              alt={featuredEvent.type}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent pointer-events-none" />

            <div className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between gap-4">
              <div>
                <span className="rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-white backdrop-blur-md">
                  Gala Institucional
                </span>
                <h3 className="mt-3 text-xl font-medium text-white sm:text-2xl">
                  {featuredEvent.type}
                </h3>
                <p className="mt-1 text-xs text-white/60">
                  {featuredEvent.location}
                </p>
              </div>
              <div className="rounded-full border border-white/20 bg-black/50 p-2.5 text-white/80 opacity-80 backdrop-blur-md transition-all group-hover:border-[#B5D448]/50 group-hover:bg-[#B5D448] group-hover:text-black group-hover:opacity-100">
                <ArrowUpRight size={16} />
              </div>
            </div>
          </Link>
        )}

        {/* Columna Derecha: 2 eventos secundarios */}
        <div className="flex flex-col gap-4 md:col-span-5 md:h-full">
          {otherEvents.map((event) => (
            <Link
              href="/eventos"
              key={event.type}
              className="event-card group relative h-[220px] overflow-hidden rounded-2xl border border-white/10 bg-black/40 transition-all duration-500 hover:border-white/25 md:h-[calc(50%-8px)]"
            >
              <Image
                src={event.image}
                alt={event.type}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

              <div className="absolute bottom-5 left-5 right-5 z-10 flex items-end justify-between gap-4">
                <div>
                  <h3 className="text-base font-medium text-white sm:text-lg">
                    {event.type}
                  </h3>
                  <p className="mt-1 text-xs text-white/60">
                    {event.location}
                  </p>
                </div>
                <div className="rounded-full border border-white/20 bg-black/50 p-2 text-white/80 opacity-80 backdrop-blur-md transition-all group-hover:border-[#B5D448]/50 group-hover:bg-[#B5D448] group-hover:text-black group-hover:opacity-100">
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
