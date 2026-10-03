import type { Metadata } from 'next'
import Image from 'next/image'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import { PageHero } from '@/components/common/page-hero'
import { CTASection } from '@/components/common/cta-section'

export const metadata: Metadata = {
  title: 'Eventos y Producciones | Centro Rental',
  description:
    'Portfolio de eventos corporativos, festivales, shows y conferencias técnicas producidas por Centro Rental.',
}

interface PortfolioEvent {
  slug: string
  title: string
  category: string
  location: string
  image: string
  highlights: string[]
  isFeatured?: boolean
}

// Catálogo estructural preparado para futuras rutas individuales /eventos/[slug]
const portfolioEvents: PortfolioEvent[] = [
  {
    slug: 'gala-corporativa-buenos-aires',
    title: 'Gala Anual Corporativa',
    category: 'Corporativo',
    location: 'Buenos Aires',
    image: '/event-1.webp',
    highlights: ['Pantalla LED central', 'Iluminación perimetral', 'Microfonía inalámbrica'],
    isFeatured: true,
  },
  {
    slug: 'festival-musica-san-isidro',
    title: 'Festival & Concierto en Vivo',
    category: 'Festivales & Shows',
    location: 'San Isidro',
    image: '/event-2.webp',
    highlights: ['Line Array suspendido', 'Consola digital', 'Cabezales móviles Beam'],
  },
  {
    slug: 'lanzamiento-automotriz-palermo',
    title: 'Lanzamiento de Marca & Experiencia',
    category: 'Lanzamientos',
    location: 'Palermo',
    image: '/event-3.webp',
    highlights: ['Iluminación de producto', 'Sonido envolvente', 'Pantallas de apoyo'],
  },
  {
    slug: 'cumbre-institucional-conferencias',
    title: 'Cumbre Institucional & Plenario',
    category: 'Institucional',
    location: 'Buenos Aires',
    image: '/hero-event.webp',
    highlights: ['Traducción simultánea', 'Streaming multicámara', 'Monitoreo de escenario'],
  },
]

export default function EventosPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="Portfolio & Casos Reales"
        title={
          <>
            Producciones que{' '}
            <span className="hero-gradient-text">dejan marca.</span>
          </>
        }
        description="Desde congresos y galas corporativas hasta recitales y lanzamientos exclusivos. Conocé cómo desplegamos nuestra infraestructura técnica en cada escenario."
      >
        <div className="flex flex-wrap items-center gap-2">
          {['Todos los eventos', 'Corporativos', 'Festivales & Recitales', 'Lanzamientos', 'Institucionales'].map(
            (tag, idx) => (
              <span
                key={tag}
                className={`rounded-full px-3.5 py-1.5 text-xs transition-colors ${
                  idx === 0
                    ? 'bg-white/10 text-white font-medium border border-white/20'
                    : 'bg-white/[0.03] text-white/50 border border-white/[0.06] hover:text-white'
                }`}
              >
                {tag}
              </span>
            )
          )}
        </div>
      </PageHero>

      {/* Grid de eventos */}
      <section className="section-padding mx-auto max-w-[1320px] px-5 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <p className="text-xs uppercase tracking-widest text-white/40">
            Mostrando casos seleccionados
          </p>
          <div className="flex items-center gap-2 text-xs text-violet-300">
            <Sparkles size={13} />
            <span>Producción técnica integral</span>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {portfolioEvents.map((item) => (
            <article
              key={item.slug}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all hover:border-white/20 hover:bg-white/[0.04]"
            >
              {/* Image banner */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/40">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-80" />

                <div className="absolute left-4 top-4">
                  <span className="rounded-full border border-white/15 bg-black/60 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-white backdrop-blur-md">
                    {item.category}
                  </span>
                </div>

                <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/60 p-2 text-white opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
                  <ArrowUpRight size={16} />
                </div>
              </div>

              {/* Event information */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-violet-300">
                    {item.location}
                  </p>
                  <h2 className="mt-2 text-xl font-medium tracking-tight text-white group-hover:text-violet-200 transition-colors">
                    {item.title}
                  </h2>
                </div>

                <div className="mt-5 flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                  {item.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-md border border-white/[0.08] bg-white/[0.02] px-2.5 py-1 text-[11px] text-white/55"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <CTASection
        eyebrow="Tu próximo escenario"
        title="Diseñemos la técnica de tu evento"
        description="Coordinamos sonido, iluminación, pantallas y logística técnica para que tu producción brille con tranquilidad absoluta."
        primaryLabel="Solicitar presupuesto"
        primaryHref="/contacto"
        secondaryLabel="Ver equipamiento disponible"
        secondaryHref="/alquiler"
      />
    </div>
  )
}
