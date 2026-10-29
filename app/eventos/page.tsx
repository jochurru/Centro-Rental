import type { Metadata } from 'next'
import Image from 'next/image'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import { PageHero } from '@/components/common/page-hero'
import { CTASection } from '@/components/common/cta-section'
import { SocialPortfolioBridge, type SocialBridgeImage } from '@/components/common/social-portfolio-bridge'

export const metadata: Metadata = {
  title: 'Eventos y Producciones | Centro Rental',
  description:
    'Portfolio de eventos corporativos, festivales, shows y conferencias técnicas producidas por Centro Rental.',
  alternates: {
    canonical: '/eventos',
  },
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
    slug: 'teatro-colon-gala-unicef',
    title: 'Teatro Colón · Gala UNICEF',
    category: 'Institucional & Gala',
    location: 'Teatro Colón · Ciudad de Buenos Aires',
    image: '/events/teatro-colon-unicef.jpg',
    highlights: ['Gala institucional', 'Puesta en sala'],
    isFeatured: true,
  },
  {
    slug: 'hotel-hilton-evento-corporativo',
    title: 'Hotel Hilton · Evento Corporativo',
    category: 'Corporativo & Congresos',
    location: 'Hotel Hilton · Puerto Madero',
    image: '/events/hotel-hilton.jpg',
    highlights: ['Convención corporativa', 'Montaje en salón'],
    isFeatured: true,
  },
  {
    slug: 'versace-sofitel-lanzamiento-eros',
    title: 'Versace · Presentación Perfume Eros',
    category: 'Lanzamiento de Marca',
    location: 'Hotel Sofitel · Buenos Aires',
    image: '/events/versace-sofitel.jpg',
    highlights: ['Lanzamiento de producto', 'Puesta en salón'],
    isFeatured: true,
  },
  {
    slug: 'nokia-hotel-scala-convencion',
    title: 'Nokia · Convención Corporativa',
    category: 'Corporativo & Telecomunicaciones',
    location: 'Hotel Scala · Ciudad de Buenos Aires',
    image: '/images/events/nokia-hotel-scala.webp',
    highlights: ['Convención corporativa', 'Pantalla LED en salón'],
  },
  {
    slug: 'congreso-internacional-de-leasing',
    title: 'Congreso Internacional de Leasing',
    category: 'Congresos & Finanzas',
    location: 'Hotel Sheraton · Buenos Aires',
    image: '/events/congreso-leasing.jpg',
    highlights: ['Congreso internacional', 'Soporte audiovisual'],
  },
  {
    slug: 'embajada-de-marruecos-acto-protocolar',
    title: 'Embajada del Reino de Marruecos · Acto Oficial',
    category: 'Diplomático & Protocolar',
    location: 'Sede Diplomática · Buenos Aires',
    image: '/images/events/embajada-marruecos.webp',
    highlights: ['Acto institucional', 'Pantalla LED y sonido'],
  },
  {
    slug: 'teatro-nd-pantalla-led',
    title: 'Teatro ND · Pantalla LED 5x3',
    category: 'Shows & Visuales',
    location: 'Teatro ND Ateneo · CABA',
    image: '/events/teatro-nd.jpg',
    highlights: ['Pantalla LED 2.8 (5x3 m)', 'Puesta escénica'],
  },
  {
    slug: 'embajada-de-israel-transmision-oficial',
    title: 'Embajada de Israel · Acto Conmemorativo',
    category: 'Diplomático & Protocolar',
    location: 'Plaza Embajada de Israel · CABA',
    image: '/events/embajada-israel.jpg',
    highlights: ['Transmisión por streaming', 'Acto conmemorativo'],
  },
  {
    slug: 'sandra-mihanovich-auditorio-belgrano',
    title: 'Sandra Mihanovich en Vivo',
    category: 'Recitales & Espectáculos',
    location: 'Auditorio Belgrano · Buenos Aires',
    image: '/events/sandra-mihanovich.jpg',
    highlights: ['Recital en vivo', 'Puesta escénica'],
  },
  {
    slug: 'alvear-palace-hotel-casamiento',
    title: 'Alvear Palace Hotel · Casamiento',
    category: 'Social & Institucional',
    location: 'Alvear Palace Hotel · Recoleta',
    image: '/events/alvear-palace.jpg',
    highlights: ['Celebración social', 'Puesta en salón'],
  },
  {
    slug: 'planta-nike-exo-logistica',
    title: 'Planta Nike · Exo Logística',
    category: 'Corporativo & Industrial',
    location: 'Centro de Distribución · Esteban Echeverría',
    image: '/images/events/nike-planta-exolog.webp',
    highlights: ['Evento industrial', 'Sonido y proyección técnica'],
  },
]

const socialBridgeImages: SocialBridgeImage[] = [
  {
    src: '/images/services/produccion-backstage.webp',
    alt: 'Backstage de producción técnica con monitores de control y cableado',
    label: 'Backstage',
  },
  {
    src: '/images/rental/sonido-consola-operador.webp',
    alt: 'Operadores técnicos en consola de audio en evento',
    label: 'Operación en vivo',
  },
  {
    src: '/images/rental/pantalla-led-montaje.webp',
    alt: 'Estructura de montaje y armado de pantalla LED',
    label: 'Montaje técnico',
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
            <span className="text-[#B5D448]">dejan marca.</span>
          </>
        }
        description="Desde congresos y galas corporativas hasta recitales y lanzamientos exclusivos. Conocé cómo desplegamos nuestra infraestructura técnica en cada escenario."
      />

      {/* Grid de eventos */}
      <section className="section-padding mx-auto max-w-[1320px] px-4 sm:px-5 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <p className="text-xs uppercase tracking-widest text-white/40">
            Mostrando casos seleccionados
          </p>
          <div className="flex items-center gap-2 text-xs text-[#B5D448]">
            <Sparkles size={13} />
            <span>Producción técnica integral</span>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {portfolioEvents.map((item) => (
            <article
              key={item.slug}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-[border-color,background-color] duration-200 hover:border-white/20 hover:bg-white/[0.04]"
            >
              {/* Image banner */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/40">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-200 ease-out group-hover:scale-[1.02] motion-reduce:transform-none"
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
                  <p className="text-xs font-medium uppercase tracking-wider text-white/60">
                    {item.location}
                  </p>
                  <h2 className="mt-2 text-xl font-medium tracking-tight text-white group-hover:text-zinc-100 transition-colors">
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

      {/* Extensión editorial en redes: Instagram & Facebook */}
      <SocialPortfolioBridge
        eyebrow="PORTFOLIO EN MOVIMIENTO"
        title="El trabajo continúa fuera del escenario."
        description="Esta es una selección de nuestros eventos. En Instagram compartimos montajes, operación técnica, backstage y producciones recientes."
        instagramCtaLabel="Ver más trabajos en Instagram"
        facebookCtaLabel="También estamos en Facebook"
        images={socialBridgeImages}
      />

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
