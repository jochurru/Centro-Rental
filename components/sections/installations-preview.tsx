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
    <section className="section-padding mx-auto max-w-[1320px] px-5 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] via-[#101115] to-[#0a0a0d] p-8 sm:p-12 lg:p-16">
        {/* Sutil halo ambiental */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-[#B5D448]/5 blur-[100px]" />

        <div className="relative grid gap-10 lg:grid-cols-12 lg:items-center">
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

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {pillars.map((pillar) => (
                <div
                  key={pillar.id}
                  className="flex items-start gap-3 rounded-xl border border-white/[0.07] bg-white/[0.015] p-3.5 transition-colors hover:border-white/20"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-[#0c0d11]">
                    <CategoryIcon
                      categoryId={pillar.id}
                      iconName={pillar.iconName}
                      className="h-4 w-4 text-[#B5D448]"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white">{pillar.title}</h4>
                    <p className="mt-0.5 text-xs text-white/50">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-2">
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
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#121318] p-7">
              <div className="relative h-48 w-full overflow-hidden rounded-xl">
                <Image
                  src="/lighting-rig.webp"
                  alt="Instalación y montaje técnico en espacios"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121318] via-[#121318]/50 to-transparent" />
                <div className="absolute bottom-3 left-3 rounded-full border border-white/15 bg-black/70 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-white backdrop-blur-sm">
                  Espacios Corporativos
                </div>
              </div>

              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                  Alcance del trabajo
                </p>
                <ul className="mt-3 flex flex-col gap-2.5">
                  <li className="flex items-center gap-2.5 text-xs text-white/75">
                    <CheckCircle2 size={13} className="text-[#B5D448] shrink-0" />
                    <span>Relevamiento técnico y diseño del espacio</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs text-white/75">
                    <CheckCircle2 size={13} className="text-[#B5D448] shrink-0" />
                    <span>Tendido de cableado estructurado e interconexión</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs text-white/75">
                    <CheckCircle2 size={13} className="text-[#B5D448] shrink-0" />
                    <span>Puesta en marcha, calibración y entrega</span>
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
