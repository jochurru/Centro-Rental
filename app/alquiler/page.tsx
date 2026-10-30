import { JsonLd } from '@/components/seo/json-ld'
import { pagesSchema } from '@/lib/seo/schema'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ArrowUpRight } from 'lucide-react'
import { PageHero } from '@/components/common/page-hero'
import { CTASection } from '@/components/common/cta-section'
import { rentalCategories, equipment } from '@/data/site'
import { CategoryIcon } from '@/components/common/category-icons'
import { RentalCardMedia } from '@/components/rental/rental-card-media'
import { RentalMediaGallery } from '@/components/rental/rental-media-gallery'
import { RentalDualConsoleMedia } from '@/components/rental/rental-dual-console-media'

export const metadata: Metadata = {
  title: 'Alquiler de Equipamiento Audiovisual en Buenos Aires | Centro Rental',
  description:
    'Alquiler de sonido profesional, iluminación, pantallas LED, proyectores, Smart TVs y equipamiento audiovisual para eventos en Buenos Aires.',
  alternates: {
    canonical: '/alquiler',
  },
  openGraph: {
    title: 'Alquiler de Equipamiento Audiovisual | Centro Rental',
    description:
      'Sonido, iluminación, pantallas LED, proyectores y tecnología audiovisual para eventos de cualquier escala.',
    url: 'https://centrorental.com.ar/alquiler',
    siteName: 'Centro Rental',
    locale: 'es_AR',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Centro Rental — Tecnología y Producción para Eventos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alquiler de Equipamiento Audiovisual | Centro Rental',
    description:
      'Sonido, iluminación, pantallas LED, proyectores y tecnología audiovisual para eventos de cualquier escala.',
    images: ['/opengraph-image'],
  },
}

export default function AlquilerPage() {
  return (
    <div className="min-h-screen">
      <JsonLd data={pagesSchema.alquiler} />
      <PageHero
        eyebrow="Soluciones de Alquiler"
        title={
          <>
            Equipamiento técnico para{' '}
            <span className="text-[#B5D448]">cada escala.</span>
          </>
        }
        description="Proveemos sistemas de sonido de precisión, iluminación de diseño, pantallas LED, conectividad satelital y equipamiento audiovisual para eventos corporativos y masivos."
      />

      {/* Catálogo ampliado de categorías de alquiler */}
      <section className="section-padding mx-auto max-w-[1320px] px-4 sm:px-5 lg:px-8">
        <div className="mb-12">
          <span className="eyebrow flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B5D448]" />
            Catálogo de alquiler
          </span>
          <h2 className="section-title mt-4">
            Equipamiento técnico para{' '}
            <span className="text-white">cada necesidad.</span>
          </h2>
          <p className="mt-4 max-w-[560px] text-sm text-white/75">
            Sonido, pantallas, proyectores, conectividad satelital, informática y estructuras preparadas para montajes exigentes.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rentalCategories.map((cat) => {
            return (
              <div
                key={cat.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-7 transition-[border-color,background-color] duration-200 hover:border-[#B5D448]/40 hover:bg-white/[0.04]"
              >
                <div>
                  {/* Galería moderna con fotos reales históricas (emil-design-eng) o fallback dual / icono */}
                  {cat.id === 'consolas-gaming' ? (
                    <RentalDualConsoleMedia />
                  ) : cat.gallery && cat.gallery.length > 0 ? (
                    <RentalMediaGallery
                      categoryId={cat.id}
                      iconName={cat.iconName}
                      title={cat.title}
                      items={cat.gallery}
                    />
                  ) : cat.image ? (
                    <RentalCardMedia
                      categoryId={cat.id}
                      iconName={cat.iconName}
                      primaryImage={cat.image}
                      primaryAlt={cat.imageAlt || cat.title}
                      secondaryImage={cat.secondaryImage}
                      secondaryAlt={cat.secondaryImageAlt}
                    />
                  ) : (
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#0D0E12] transition-colors group-hover:border-[#B5D448]/40 group-hover:bg-[#121318]">
                      <CategoryIcon
                        categoryId={cat.id}
                        iconName={cat.iconName}
                        className="h-6 w-6 text-zinc-200 transition-colors group-hover:text-white"
                      />
                    </div>
                  )}

                  <h3 className="text-lg font-medium text-white group-hover:text-zinc-100 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/55">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-white/[0.06] pt-5">
                  <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-white/40">
                    Equipamiento incluido
                  </p>
                  <ul className="flex flex-col gap-2">
                    {cat.specs.map((spec) => (
                      <li
                        key={spec}
                        className="flex items-center gap-2 text-xs text-white/70"
                      >
                        <CheckCircle2 size={13} className="text-[#B5D448] shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Muestra de equipamiento destacado */}
      <section className="section-padding border-t border-white/[0.06] bg-white/[0.01]">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-5 lg:px-8">
          <div className="mb-10">
            <span className="eyebrow">Equipos destacados</span>
            <h2 className="section-title mt-4">
              Calidad de audio, luz y video.
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {equipment.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]"
              >
                <div className="relative aspect-[16/10] w-full bg-black/40">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/60 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                    {item.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-base font-medium text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/50">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Puente contextual: Alquiler -> Servicios de producción técnica */}
      <section className="mx-auto max-w-[1320px] px-4 sm:px-5 pb-6 pt-2 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-7">
          <div className="max-w-[640px]">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#B5D448]">
              Soporte y operación técnica
            </span>
            <p className="mt-1 text-sm text-white/70">
              ¿Además del equipamiento necesitás personal técnico calificado para montaje, operación de sonido, luces o streaming durante el evento?
            </p>
          </div>
          <Link
            href="/servicios"
            className="group shrink-0 inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-[border-color,background-color,color,box-shadow,transform] duration-150 hover:border-[#B5D448]/50 hover:bg-white/10 hover:text-white hover:shadow-[0_0_20px_-4px_rgba(181,212,72,0.3)] active:scale-[0.98] motion-reduce:active:scale-100"
          >
            Ver servicios de producción técnica
            <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </section>

      {/* CTA final */}
      <CTASection
        eyebrow="Cotización a medida"
        title="¿Buscás equipamiento para tu evento?"
        description="Detallanos tus necesidades técnicas o locación y te enviamos un presupuesto rápido con soporte y logística incluidos."
        primaryLabel="Pedir cotización de alquiler"
        primaryHref="/contacto"
        secondaryLabel="Ver eventos realizados"
        secondaryHref="/eventos"
      />
    </div>
  )
}
