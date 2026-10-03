import { Hero } from '@/components/sections/hero'
import { Ticker } from '@/components/sections/ticker'
import { Intro } from '@/components/sections/intro'
import { Services } from '@/components/sections/services'
import { Equipment } from '@/components/sections/equipment'
import { Events } from '@/components/sections/events'
import { SalesPreview } from '@/components/sections/sales-preview'
import { ClientsPreview } from '@/components/sections/clients-preview'
import { CTASection } from '@/components/common/cta-section'

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* 1. Hero visual de alto impacto */}
      <Hero />

      {/* 2. Ticker de conceptos técnicos */}
      <Ticker />

      {/* 3. Breve presentación editorial */}
      <Intro />

      {/* 4. Capacidades y servicios con derivación a /alquiler */}
      <Services />

      {/* 5. Alquiler destacado de equipamiento con derivación a /alquiler */}
      <Equipment />

      {/* 6. Eventos destacados con derivación a /eventos */}
      <Events />

      {/* 7. Venta destacada con derivación a /venta y Mercado Libre */}
      <SalesPreview />

      {/* 8. Clientes destacados con derivación a /clientes */}
      <ClientsPreview />

      {/* 9. CTA final de conversión con derivación a /contacto */}
      <CTASection
        eyebrow="Hablemos de tu evento"
        title="Tu próximo escenario empieza con una buena conversación."
        description="Contanos la idea, fecha y espacio. Armamos una propuesta técnica adaptada con sonido, luces, pantallas y operación especializada."
        primaryLabel="Solicitar presupuesto"
        primaryHref="/contacto"
        secondaryLabel="Explorar catálogo de alquiler"
        secondaryHref="/alquiler"
      />
    </div>
  )
}
