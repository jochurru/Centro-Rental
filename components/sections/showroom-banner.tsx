import Link from 'next/link'
import Image from 'next/image'
import { MapPin, ArrowUpRight } from 'lucide-react'

export function ShowroomBanner() {
  return (
    <section className="mx-auto max-w-[1320px] px-4 sm:px-5 py-10 sm:py-14 lg:py-16 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0e0f13] p-5 sm:p-8 lg:p-10">
        {/* Sutil resplandor de acento verde institucional */}
        <div className="pointer-events-none absolute -left-12 -top-12 h-56 w-56 rounded-full bg-[#B5D448]/5 blur-[90px]" />

        <div className="relative grid gap-6 sm:gap-8 lg:grid-cols-12 lg:items-center">
          {/* Columna Izquierda: Información editorial de presencia física */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B5D448]">
                <MapPin size={13} />
                <span>Espacio físico & retiros</span>
              </div>

              <h2 className="mt-2.5 sm:mt-3 text-2xl font-medium tracking-tight text-white sm:text-3xl">
                Visitá nuestro showroom en CABA.
              </h2>

              <p className="mt-2.5 sm:mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
                Conocé equipamiento en exhibición, coordiná retiros de rental o conversá tu proyecto con nuestro equipo técnico.
              </p>

              <div className="mt-4 sm:mt-5 rounded-xl border border-white/10 bg-white/[0.02] p-3.5 sm:p-4 text-xs text-white/70">
                <span className="block font-semibold uppercase tracking-wider text-white">
                  Dirección
                </span>
                <span className="mt-1 block text-sm text-white/90">
                  Av. Belgrano 2450
                </span>
                <span className="text-white/50">
                  Ciudad Autónoma de Buenos Aires
                </span>
              </div>
            </div>

            <div className="mt-5 sm:mt-6 pt-1">
              <Link
                href="/contacto"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-[border-color,background-color,color,box-shadow,transform] duration-150 hover:border-[#B5D448]/50 hover:bg-white/10 hover:text-white hover:shadow-[0_0_20px_-4px_rgba(181,212,72,0.3)] active:scale-[0.98] motion-reduce:active:scale-100"
              >
                Ver contacto y ubicación
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>

          {/* Columna Derecha: Bento de 3 imágenes reales */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-12 sm:h-[340px]">
              {/* Imagen 1: Fachada exterior (alta presencia) */}
              <div className="group relative h-48 sm:h-full sm:col-span-6 overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                <Image
                  src="/images/showroom/showroom-fachada.webp"
                  alt="Fachada exterior de Centro Rental en Av. Belgrano 2450"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                  className="object-cover object-center transition-transform duration-200 ease-out group-hover:scale-[1.02] motion-reduce:transform-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="inline-block rounded bg-black/70 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-white/90 backdrop-blur-sm border border-white/10">
                    Fachada · Belgrano 2450
                  </span>
                </div>
              </div>

              {/* Columna derecha con 2 imágenes secundarias */}
              <div className="flex flex-col gap-3 sm:col-span-6 sm:h-full">
                {/* Imagen 2: Mostrador con Starlink y Gaming */}
                <div className="group relative h-40 sm:h-[calc(50%-6px)] overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                  <Image
                    src="/images/showroom/showroom-starlink-gaming.webp"
                    alt="Exhibición de Starlink, consolas de gaming y audio en showroom"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    className="object-cover object-center transition-transform duration-200 ease-out group-hover:scale-[1.02] motion-reduce:transform-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5">
                    <span className="inline-block rounded bg-black/70 px-2 py-0.5 text-[9px] font-mono uppercase tracking-wider text-white/90 backdrop-blur-sm border border-white/10">
                      Starlink & Gaming
                    </span>
                  </div>
                </div>

                {/* Imagen 3: Mostrador de atención y operación técnica */}
                <div className="group relative h-40 sm:h-[calc(50%-6px)] overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                  <Image
                    src="/images/showroom/showroom-mostrador.webp"
                    alt="Puesto operativo y mostrador de atención en showroom"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    className="object-cover object-center transition-transform duration-200 ease-out group-hover:scale-[1.02] motion-reduce:transform-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5">
                    <span className="inline-block rounded bg-black/70 px-2 py-0.5 text-[9px] font-mono uppercase tracking-wider text-white/90 backdrop-blur-sm border border-white/10">
                      Atención & Retiros
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
