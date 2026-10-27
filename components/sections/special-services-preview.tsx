import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Zap } from 'lucide-react'
import { CategoryIcon } from '@/components/common/category-icons'

const services = [
  {
    id: 'estudio-tv',
    title: 'Estudio de TV & Producción Virtual',
    description:
      'Set con ciclorama verde continuo, iluminación de estudio, control técnico y camarines para grabaciones y streaming.',
    iconName: 'Camera',
    image: '/images/studio/studio-chroma-interview.webp',
    imageAlt: 'Set de grabación en ciclorama verde para entrevistas y contenidos corporativos',
    label: 'Set & Croma',
    href: '/estudio-tv',
  },
  {
    id: 'streaming',
    title: 'Streaming & Transmisión en Vivo',
    description:
      'Transmisión de video en vivo para conferencias y presentaciones hacia plataformas web y redes.',
    iconName: 'Radio',
    image: '/images/services/streaming-operadores.webp',
    imageAlt: 'Operadores técnicos en consolas de transmisión en vivo',
    label: 'Control técnico',
  },
  {
    id: 'traduccion',
    title: 'Traducción Simultánea',
    description:
      'Cabinas para intérpretes, consolas y receptores de audio para congresos y eventos multilingües.',
    iconName: 'Headphones',
    image: '/images/services/traduccion-simultanea-oei.webp',
    imageAlt: 'Cumbre internacional con equipamiento de traducción simultánea OEI',
    label: 'Cumbre OEI',
  },
  {
    id: 'starlink',
    title: 'Internet Satelital / Starlink',
    description:
      'Provisión de internet satelital para transmisiones, acreditaciones y producción en locación.',
    iconName: 'Wifi',
    image: '/images/services/starlink-instalacion-exterior.webp',
    imageAlt: 'Antena Starlink instalada para cobertura satelital de eventos',
    label: 'Conectividad en campo',
  },
  {
    id: 'grupos-electrogenos',
    title: 'Grupos Electrógenos & Energía',
    description:
      'Generadores eléctricos y tableros de distribución técnica para soporte de energía en eventos.',
    iconName: 'Zap',
  },
]

export function SpecialServicesPreview() {
  return (
    <section className="border-t border-white/[0.06] bg-white/[0.01] py-14 sm:py-18 lg:py-20">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="eyebrow flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B5D448]" />
              Servicios Especiales
            </span>
            <h2 className="section-title mt-4">
              Capacidades técnicas<br />
              <span className="text-white">para demandas específicas.</span>
            </h2>
          </div>
          <div className="flex flex-col items-start gap-2 md:items-end">
            <Link
              href="/servicios"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#B5D448] transition-colors hover:text-white"
            >
              Explorar todos los servicios <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {services.map((service, index) => (
            <Link
              key={service.id}
              href={service.href || '/servicios'}
              className={`group relative flex flex-col justify-between rounded-xl border border-white/10 bg-white/[0.02] p-4 sm:p-5 transition-all duration-300 hover:border-[#B5D448]/40 hover:bg-white/[0.04] ${
                index === 4
                  ? 'sm:col-span-2 lg:col-span-3'
                  : index === 3
                    ? 'sm:col-span-1 lg:col-span-3'
                    : 'sm:col-span-1 lg:col-span-2'
              }`}
            >
              <div>
                {/* Header visual: Foto real donde hay evidencia, o bloque técnico iconográfico */}
                {service.image ? (
                  <div className="relative mb-4 h-32 w-full overflow-hidden rounded-lg border border-white/10 bg-black/40">
                    <Image
                      src={service.image}
                      alt={service.imageAlt || service.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between">
                      <span className="rounded bg-black/70 px-2 py-0.5 text-[9px] font-mono uppercase tracking-wider text-white/80 backdrop-blur-sm border border-white/10">
                        {service.label}
                      </span>
                      <div className="flex h-6 w-6 items-center justify-center rounded bg-black/60 text-[#B5D448] backdrop-blur-sm">
                        <CategoryIcon
                          categoryId={service.id}
                          iconName={service.iconName}
                          className="h-3.5 w-3.5"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative mb-4 flex h-32 w-full flex-col justify-between rounded-lg border border-white/10 bg-[#0e0f13] p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-white/50">
                        Generación & Tableros
                      </span>
                      <div className="flex h-7 w-7 items-center justify-center rounded-md border border-white/10 bg-[#14151b] text-[#B5D448]">
                        <Zap className="h-3.5 w-3.5" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="rounded bg-black/60 px-2 py-0.5 text-[9px] font-mono uppercase tracking-wider text-white/70 backdrop-blur-sm border border-white/10">
                        Infraestructura
                      </span>
                      <span className="text-[10px] text-white/40 font-mono">Soporte 24/7</span>
                    </div>
                  </div>
                )}

                <h3 className="text-base font-medium text-white group-hover:text-zinc-100 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-white/55">
                  {service.description}
                </p>
              </div>

              <div className="mt-5 flex items-center gap-1 text-[11px] font-medium text-white/60 transition-colors group-hover:text-[#B5D448]">
                <span>{service.href ? 'Ver estudio y set' : 'Detalles del servicio'}</span>
                <ArrowUpRight size={12} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
