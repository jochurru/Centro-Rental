import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { CategoryIcon } from '@/components/common/category-icons'

const pillars = [
  {
    id: 'audio-video-fijo',
    title: 'Audio & Video Fijo',
    desc: 'Salas de reunión, auditorios y locales comerciales.',
    iconName: 'Tv',
  },
  {
    id: 'domotica-automatizacion',
    title: 'Domótica & Automatización',
    desc: 'Automatización de iluminación y control ambiental.',
    iconName: 'Cpu',
  },
  {
    id: 'camaras-seguridad',
    title: 'Cámaras de Seguridad CCTV',
    desc: 'Circuitos cerrados y sistemas de videovigilancia.',
    iconName: 'Camera',
  },
  {
    id: 'control-acceso',
    title: 'Control de Acceso',
    desc: 'Cerraduras electrónicas y lectores de huella.',
    iconName: 'ShieldCheck',
  },
]

export function InstallationsPreview() {
  return (
    <section className="mx-auto max-w-[1320px] px-5 py-10 sm:py-14 lg:py-16 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] via-[#101115] to-[#0a0a0d] p-6 sm:p-10 lg:p-12">
        {/* Sutil halo ambiental */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-[#B5D448]/5 blur-[100px]" />

        <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
          {/* Columna Izquierda: Información y pilares de integración */}
          <div className="lg:col-span-7">
            <span className="eyebrow flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B5D448]" />
              Integración Permanente
            </span>

            <h2 className="section-title mt-4 text-balance">
              Tecnología que también{' '}
              <span className="text-white">queda instalada.</span>
            </h2>

            <p className="mt-4 max-w-[560px] text-base leading-relaxed text-white/70">
              Soluciones de audio, video, automatización, cámaras de seguridad y control de acceso para espacios corporativos y comerciales.
            </p>

            <div className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2 divide-y sm:divide-y-0 divide-white/[0.06]">
              {pillars.map((pillar) => (
                <div
                  key={pillar.id}
                  className="flex items-start gap-3.5 pt-3 sm:pt-0"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                    <CategoryIcon
                      categoryId={pillar.id}
                      iconName={pillar.iconName}
                      className="h-4 w-4 text-[#B5D448]"
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-medium text-white">{pillar.title}</h4>
                    <p className="mt-0.5 text-xs leading-relaxed text-white/65">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 pt-1">
              <Link
                href="/instalaciones"
                className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-all hover:border-[#B5D448]/50 hover:bg-white/5 hover:text-white"
              >
                Conocer instalaciones
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>

          {/* Columna Derecha: Composición visual y etapas del proyecto */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#121318] p-6 sm:p-7">
              <div className="relative h-48 w-full overflow-hidden rounded-xl border border-white/10 bg-black/40">
                <Image
                  src="/images/installations/audio-rack-showroom.webp"
                  alt="Equipamiento de audio y procesamiento en showroom"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover opacity-85 transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121318] via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 rounded-full border border-white/15 bg-black/75 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-white backdrop-blur-sm">
                  Equipamiento en exhibición
                </div>
              </div>

              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                  Alcance de integración
                </p>
                <ul className="mt-3 flex flex-col gap-2.5">
                  <li className="flex items-center gap-2.5 text-xs text-white/75">
                    <CheckCircle2 size={13} className="text-[#B5D448] shrink-0" />
                    <span>Evaluación de necesidades del espacio</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs text-white/75">
                    <CheckCircle2 size={13} className="text-[#B5D448] shrink-0" />
                    <span>Instalación e interconexión de equipamiento</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs text-white/75">
                    <CheckCircle2 size={13} className="text-[#B5D448] shrink-0" />
                    <span>Configuración y puesta en funcionamiento</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
