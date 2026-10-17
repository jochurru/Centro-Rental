import Link from 'next/link'
import { MoveRight } from 'lucide-react'

export function Intro() {
  return (
    <section className="section-padding mx-auto max-w-[1320px] px-5 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
        {/* Columna Izquierda: Encabezado Editorial */}
        <div className="lg:col-span-5">
          <div className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
            <span className="h-2 w-2 rounded-full bg-[#B5D448]" />
            Sobre Centro Rental
          </div>
          <h2 className="mt-5 text-balance text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-[2.6rem] lg:leading-[1.1]">
            Soluciones técnicas integrales para escenarios reales.
          </h2>
        </div>

        {/* Columna Derecha: Texto editorial breve, confiable y directo */}
        <div className="flex flex-col justify-between gap-6 border-t border-white/10 pt-8 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0 lg:col-span-7 lg:pl-12">
          <p className="text-balance text-lg font-normal leading-relaxed text-white/85 lg:text-xl">
            Centro Rental desarrolla la infraestructura audiovisual y técnica de eventos corporativos, espectáculos y actos institucionales.
          </p>
          <p className="text-base leading-relaxed text-white/60">
            Sonido, iluminación, pantallas LED y coordinación técnica unificados en un mismo equipo operativo, garantizando precisión de montaje y respuesta en vivo.
          </p>
          <div className="pt-2">
            <Link
              href="/nosotros"
              className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B5D448] transition-colors hover:text-white"
            >
              Conocé nuestra historia y trayectoria
              <MoveRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
