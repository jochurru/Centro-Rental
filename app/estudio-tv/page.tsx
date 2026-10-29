import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowUpRight,
  CheckCircle2,
  Tv,
  Layers,
  Settings,
  MonitorPlay,
  Sparkles,
  Camera,
  Users,
  Radio,
  SlidersHorizontal,
} from 'lucide-react'
import { PageHero } from '@/components/common/page-hero'
import { CTASection } from '@/components/common/cta-section'
import { GlowButton } from '@/components/common/glow-button'

export const metadata: Metadata = {
  title: 'Estudio de TV & Producción Virtual | Centro Rental',
  description:
    'Espacio equipado para grabaciones corporativas, entrevistas, streaming y producciones virtuales con ciclorama verde, iluminación de estudio, control técnico y camarines.',
  alternates: {
    canonical: '/estudio-tv',
  },
}

// Capacidades respaldadas por evidencia forense e histórica
const studioCapabilities = [
  {
    title: 'Ciclorama verde continuo',
    description:
      'Superficie continua en pared y piso para producciones con chroma.',
    icon: Layers,
  },
  {
    title: 'Iluminación de estudio',
    description:
      'Parrilla de iluminación y luminarias de estudio para el set.',
    icon: Sparkles,
  },
  {
    title: 'Control room integrado',
    description:
      'Sala técnica para mezcla de audio, conmutación de video y operación centralizada.',
    icon: SlidersHorizontal,
  },
  {
    title: 'Monitoreo técnico en vivo',
    description:
      'Monitoreo multiview de señales durante la operación.',
    icon: MonitorPlay,
  },
  {
    title: 'Producción virtual',
    description:
      'Producción virtual con composición sobre ciclorama.',
    icon: Tv,
  },
  {
    title: 'Operación técnica en sala',
    description:
      'Operación técnica para grabaciones y transmisiones.',
    icon: Users,
  },
  {
    title: 'Área de maquillaje y camarines',
    description:
      'Espacio acondicionado con puestos de maquillaje y espejos iluminados.',
    icon: CheckCircle2,
  },
]

// Casos de uso típicos
const useCases = [
  {
    title: 'Entrevistas corporativas & Podcasts',
    description: 'Grabación de entrevistas y contenidos de diálogo en set.',
  },
  {
    title: 'Webinars & Capacitaciones',
    description: 'Transmisiones en vivo con soporte de presentaciones y moderación.',
  },
  {
    title: 'Streaming multicanal',
    description: 'Emisión en vivo a plataformas web y canales digitales.',
  },
  {
    title: 'Producciones virtuales & Lanzamientos',
    description: 'Composición con escenografía digital para presentaciones de marca.',
  },
  {
    title: 'Presentaciones institucionales',
    description: 'Grabación de mensajes corporativos y comunicados institucionales.',
  },
  {
    title: 'Contenido audiovisual para marcas',
    description: 'Producción de piezas audiovisuales y material promocional en set.',
  },
]

// Fotos de archivo real para la galería editorial
const galleryPhotos = [
  {
    src: '/images/studio/studio-control-room.webp',
    alt: 'Dirección técnica y consola de sonido en control room de estudio',
    caption: 'Control Room Integrado',
    subtitle: 'Dirección técnica y mezcla de audio en sala de control',
    span: 'lg:col-span-8',
  },
  {
    src: '/images/studio/studio-chroma-interview.webp',
    alt: 'Grabación de entrevista sobre ciclorama verde continuo en estudio',
    caption: 'Set con Ciclorama Verde',
    subtitle: 'Tomas en ciclorama verde para entrevistas y contenidos',
    span: 'lg:col-span-4',
  },
  {
    src: '/images/studio/studio-virtual-production.webp',
    alt: 'Composición y previsualización de set virtual 3D en tiempo real',
    caption: 'Producción Virtual en Vivo',
    subtitle: 'Composición y previsualización de set virtual en tiempo real',
    span: 'lg:col-span-4',
  },
  {
    src: '/images/studio/studio-multiview-control.webp',
    alt: 'Operadores en puestos de control con monitoreo multiview en vivo',
    caption: 'Monitoreo Multiview',
    subtitle: 'Supervisión multiview de señales durante la emisión',
    span: 'lg:col-span-4',
  },
  {
    src: '/images/studio/studio-makeup-room.webp',
    alt: 'Camarines y sala de maquillaje equipada con espejos iluminados',
    caption: 'Camarines & Maquillaje',
    subtitle: 'Puestos de maquillaje con espejos iluminados',
    span: 'lg:col-span-4',
  },
]

// Enlaces a verticales complementarias
const relatedServices = [
  {
    title: 'Streaming & Transmisión',
    description: 'Transmisión en vivo desde el estudio hacia plataformas web y redes.',
    href: '/servicios',
    icon: Radio,
    tag: 'Servicio',
  },
  {
    title: 'Producción Técnica Integral',
    description: 'Coordinación técnica, operadores y soporte durante la grabación.',
    href: '/servicios',
    icon: Settings,
    tag: 'Operación',
  },
  {
    title: 'Cámaras & Video Profesional',
    description: 'Cámaras de video, trípodes y accesorios para registro y cobertura técnica.',
    href: '/alquiler',
    icon: Camera,
    tag: 'Alquiler',
  },
]

export default function EstudioTvPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <PageHero
        eyebrow="Infraestructura & Producción"
        title={
          <>
            Estudio de TV &{' '}
            <span className="text-[#B5D448]">Producción Virtual.</span>
          </>
        }
        description="Grabaciones, entrevistas, contenidos corporativos, streaming y producciones virtuales en un entorno técnico preparado."
      >
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <GlowButton href="/contacto" className="px-7 py-3.5 text-sm font-medium">
            Consultar disponibilidad
          </GlowButton>
          <Link
            href="/servicios"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm text-white transition-[border-color,background-color,transform] duration-150 hover:border-[#B5D448]/50 hover:bg-white/5 active:scale-[0.98] motion-reduce:active:scale-100"
          >
            <span>Ver servicios</span>
            <ArrowUpRight size={14} className="text-white/60 group-hover:text-white transition-colors" />
          </Link>
        </div>
      </PageHero>

      {/* Galería editorial con evidencia fotográfica real */}
      <section className="section-padding mx-auto max-w-[1320px] px-4 sm:px-5 lg:px-8">
        <div className="mb-10">
          <span className="eyebrow flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B5D448]" />
            Evidencia del espacio
          </span>
          <h2 className="section-title mt-4">
            Infraestructura técnica{' '}
            <span className="text-white">en funcionamiento.</span>
          </h2>
          <p className="mt-4 max-w-[580px] text-sm text-white/75">
            Registro fotográfico real de las instalaciones: ciclorama verde continuo, sala de control en vivo, producción virtual y camarines.
          </p>
        </div>

        {/* Bento Grid Editorial */}
        <div className="grid gap-5 grid-cols-1 lg:grid-cols-12">
          {galleryPhotos.map((photo, idx) => (
            <div
              key={photo.src}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-[border-color] duration-200 hover:border-[#B5D448]/40 ${photo.span}`}
            >
              <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-[340px] w-full overflow-hidden bg-black/60">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  priority={idx === 0}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-200 ease-out group-hover:scale-[1.02] motion-reduce:transform-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block rounded-md border border-[#B5D448]/30 bg-black/75 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-[#B5D448] backdrop-blur-sm">
                    {photo.caption}
                  </span>
                  <p className="mt-2 text-xs sm:text-sm text-white/80 font-medium">
                    {photo.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Capacidades técnicas comprobadas */}
      <section className="section-padding border-t border-white/[0.06] bg-white/[0.01]">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-5 lg:px-8">
          <div className="mb-12">
            <span className="eyebrow flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B5D448]" />
              Equipamiento & Espacio
            </span>
            <h2 className="section-title mt-4">
              Capacidades preparadas{' '}
              <span className="text-white">para cada producción.</span>
            </h2>
            <p className="mt-4 max-w-[560px] text-sm text-white/75">
              Espacio técnico acondicionado para grabaciones en set, operación de sonido y conmutación de video.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {studioCapabilities.map((cap) => {
              const IconComp = cap.icon
              return (
                <div
                  key={cap.title}
                  className="group flex flex-col justify-between rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-[border-color,background-color] duration-200 hover:border-[#B5D448]/40 hover:bg-white/[0.04]"
                >
                  <div>
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-[#0D0E12] text-[#B5D448] transition-colors group-hover:border-[#B5D448]/40 group-hover:bg-[#121318]">
                      <IconComp className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-medium text-white transition-colors group-hover:text-zinc-100">
                      {cap.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-white/60">
                      {cap.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="section-padding border-t border-white/[0.06]">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-5 lg:px-8">
          <div className="mb-12">
            <span className="eyebrow flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B5D448]" />
              Formatos de Realización
            </span>
            <h2 className="section-title mt-4">
              Aplicaciones del set{' '}
              <span className="text-white">para empresas y productoras.</span>
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((uc) => (
              <div
                key={uc.title}
                className="rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-colors duration-200 hover:border-white/20"
              >
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#B5D448]" />
                  <h3 className="text-base font-medium text-white">{uc.title}</h3>
                </div>
                <p className="text-xs leading-relaxed text-white/60">
                  {uc.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Relación con otros servicios técnicos */}
      <section className="section-padding border-t border-white/[0.06] bg-white/[0.01]">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-5 lg:px-8">
          <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <span className="eyebrow flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#B5D448]" />
                Servicios integrados
              </span>
              <h2 className="section-title mt-4">
                Complementá tu producción{' '}
                <span className="text-white">con nuestra técnica.</span>
              </h2>
            </div>
            <Link
              href="/servicios"
              className="inline-flex items-center gap-1.5 text-xs text-[#B5D448] hover:text-white transition-colors"
            >
              Explorar todos los servicios
              <ArrowUpRight size={13} />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {relatedServices.map((srv) => {
              const IconComp = srv.icon
              return (
                <Link
                  key={srv.title}
                  href={srv.href}
                  className="group flex flex-col justify-between rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-[border-color,background-color,transform] duration-200 hover:border-[#B5D448]/40 hover:bg-white/[0.04] active:scale-[0.99] motion-reduce:active:scale-100"
                >
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-[#0D0E12] text-[#B5D448]">
                        <IconComp className="h-5 w-5" />
                      </div>
                      <span className="rounded bg-white/5 px-2 py-0.5 text-[10px] font-mono uppercase text-white/50 border border-white/10">
                        {srv.tag}
                      </span>
                    </div>
                    <h3 className="text-base font-medium text-white group-hover:text-zinc-100 transition-colors">
                      {srv.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-white/60">
                      {srv.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-1.5 text-xs text-white/40 group-hover:text-[#B5D448] transition-colors">
                    <span>Ver más</span>
                    <ArrowUpRight size={12} />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <CTASection
        eyebrow="Producción audiovisual"
        title="Contanos qué contenido necesitás producir."
        description="Te asesoramos en la planificación de tu grabación y requerimientos técnicos en estudio."
        primaryLabel="Consultar disponibilidad"
        primaryHref="/contacto"
        secondaryLabel="Ver todos los servicios"
        secondaryHref="/servicios"
      />
    </div>
  )
}
