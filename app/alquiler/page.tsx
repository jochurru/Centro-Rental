import type { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'
import { PageHero } from '@/components/common/page-hero'
import { CTASection } from '@/components/common/cta-section'
import { rentalCategories, equipment } from '@/data/site'
import { CategoryIcon } from '@/components/common/category-icons'

export const metadata: Metadata = {
  title: 'Alquiler de Equipamiento | Centro Rental',
  description:
    'Alquiler de sistemas de sonido, iluminación, pantallas LED, streaming y estructuras técnicas para eventos en Buenos Aires.',
}

export default function AlquilerPage() {
  return (
    <div className="min-h-screen">
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
      <section className="section-padding mx-auto max-w-[1320px] px-5 lg:px-8">
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
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition-all hover:border-white/20 hover:bg-white/[0.04]"
              >
                <div>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#0D0E12] transition-colors group-hover:border-[#B5D448]/40 group-hover:bg-[#121318]">
                    <CategoryIcon
                      categoryId={cat.id}
                      iconName={cat.iconName}
                      className="h-6 w-6 text-zinc-200 transition-colors group-hover:text-white"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-white group-hover:text-zinc-100 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">
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
        <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
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
