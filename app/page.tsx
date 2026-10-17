import { Hero } from '@/components/sections/hero'
import { Intro } from '@/components/sections/intro'
import { Services } from '@/components/sections/services'
import { Events } from '@/components/sections/events'
import { ClientsPreview } from '@/components/sections/clients-preview'
import { SalesPreview } from '@/components/sections/sales-preview'
import { CTASection } from '@/components/common/cta-section'

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* 1. Hero visual cinematográfico */}
      <Hero />

      {/* 2. Intro editorial breve y directa */}
      <Intro />

      {/* 3. Servicios y 4 capacidades principales con derivación a /alquiler */}
      <Services />

      {/* 4. Eventos reales destacados con derivación a /eventos */}
      <Events />

      {/* 5. Clientes y marcas reconocibles con derivación a /clientes */}
      <ClientsPreview />

      {/* 6. Venta compacta de equipamiento por renovación hacia Mercado Libre */}
      <SalesPreview />

      {/* 7. CTA final de conversión con GlowButton RGB aprobado */}
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
