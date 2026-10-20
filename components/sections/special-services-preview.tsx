import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { CategoryIcon } from '@/components/common/category-icons'

const services = [
  {
    id: 'streaming',
    title: 'Streaming & Transmisión en Vivo',
    description:
      'Transmisión de video en vivo para conferencias y presentaciones hacia plataformas web y redes.',
    iconName: 'Radio',
  },
  {
    id: 'traduccion',
    title: 'Traducción Simultánea',
    description:
      'Cabinas para intérpretes, consolas y receptores de audio para congresos y eventos multilingües.',
    iconName: 'Headphones',
  },
  {
    id: 'starlink',
    title: 'Internet Satelital / Starlink',
    description:
      'Provisión de internet satelital para transmisiones, acreditaciones y producción en locación.',
    iconName: 'Wifi',
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
    <section className="border-t border-white/[0.06] bg-white/[0.01] py-12 sm:py-16">
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

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.id}
              href="/servicios"
              className="group relative flex flex-col justify-between rounded-xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:border-[#B5D448]/40 hover:bg-white/[0.04]"
            >
              <div>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-[#0D0E12] transition-colors group-hover:border-[#B5D448]/40 group-hover:bg-[#121318]">
                  <CategoryIcon
                    categoryId={service.id}
                    iconName={service.iconName}
                    className="h-5 w-5 text-zinc-300 transition-colors group-hover:text-white"
                  />
                </div>
                <h3 className="text-base font-medium text-white group-hover:text-zinc-100 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-white/55">
                  {service.description}
                </p>
              </div>

              <div className="mt-5 flex items-center gap-1 text-[11px] font-medium text-white/40 transition-colors group-hover:text-[#B5D448]">
                <span>Detalles del servicio</span>
                <ArrowUpRight size={12} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
