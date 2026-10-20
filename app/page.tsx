import { Hero } from '@/components/sections/hero'
import { RentalQuickLinks } from '@/components/sections/rental-quick-links'
import { BusinessUnits } from '@/components/sections/business-units'
import { SpecialServicesPreview } from '@/components/sections/special-services-preview'
import { Events } from '@/components/sections/events'
import { InstallationsPreview } from '@/components/sections/installations-preview'
import { ClientsPreview } from '@/components/sections/clients-preview'
import { SalesPreview } from '@/components/sections/sales-preview'
import { ShowroomBanner } from '@/components/sections/showroom-banner'
import { CTASection } from '@/components/common/cta-section'
import { siteConfig } from '@/data/site'

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* 1. Hero visual con enfoque comercial ampliado */}
      <Hero />

      {/* 2. Accesos rápidos de alquiler: lo más buscado */}
      <RentalQuickLinks />

      {/* 3. Tres unidades de negocio macro */}
      <BusinessUnits />

      {/* 4. Servicios especiales técnicos destacados */}
      <SpecialServicesPreview />

      {/* 5. Eventos reales destacados en producciones en vivo */}
      <Events />

      {/* 6. Bloque de integración técnica e instalaciones fijas */}
      <InstallationsPreview />

      {/* 7. Clientes y marcas reconocibles */}
      <ClientsPreview />

      {/* 8. Venta compacta de equipamiento por renovación hacia Mercado Libre */}
      <SalesPreview />

      {/* 9. Showroom físico en Av. Belgrano 2450 (CABA) */}
      <ShowroomBanner />

      {/* 10. CTA final de conversión integral */}
      <CTASection
        eyebrow="Presupuesto y asesoramiento"
        title="Contanos qué necesitás. Armamos la solución."
        description="Desde un alquiler puntual hasta una producción completa o una instalación técnica."
        primaryLabel="Solicitar presupuesto"
        primaryHref="/contacto"
        secondaryLabel="Contactar por WhatsApp"
        secondaryHref={siteConfig.whatsappUrl}
      />
    </div>
  )
}
