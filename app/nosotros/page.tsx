import type { Metadata } from 'next'
import { PageHero } from '@/components/common/page-hero'
import { CTASection } from '@/components/common/cta-section'
import { processSteps } from '@/data/site'
import { Sliders, ShieldCheck, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Nosotros | Centro Rental',
  description:
    'Historia, metodología, capacidad técnica y proceso de trabajo de Centro Rental en producción integral de eventos.',
}

export default function NosotrosPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="Identidad & Trayectoria"
        title={
          <>
            Detrás de escena para que{' '}
            <span className="text-[#B5D448]">todo brille.</span>
          </>
        }
        description="Centro Rental combina equipamiento audiovisual de vanguardia con un equipo técnico comprometido. Convertimos requerimientos complejos en puestas en escena fluidas y sin estrés."
      />

      {/* Filosofía técnica */}
      <section className="section-padding mx-auto max-w-[1320px] px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <span className="eyebrow">Nuestra forma de operar</span>
            <h2 className="section-title mt-4">
              Técnica precisa,{' '}
              <span className="text-white">cero improvisación.</span>
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-white/75">
              Un buen evento no se nota por lo ruidoso, sino por la armonía y la exactitud con la que cada elemento entra en su momento exacto.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Diseñamos cada rider técnico evaluando la acústica del salón, la visibilidad de las pantallas, la temperatura de color de las luminarias y la seguridad estructural del escenario.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3 lg:col-span-7">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#B5D448]/10 text-[#B5D448]">
                <Sliders size={20} />
              </div>
              <h3 className="text-base font-medium text-white">Rigor acústico & visual</h3>
              <p className="mt-2 text-xs leading-relaxed text-white/70">
                Calibración minuciosa de frecuencias y balances lumínicos según el recinto.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#B5D448]/10 text-[#B5D448]">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-base font-medium text-white">Seguridad de montaje</h3>
              <p className="mt-2 text-xs leading-relaxed text-white/70">
                Estructuras homologadas y anclajes con certificación de carga para tranquilidad total.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#B5D448]/10 text-[#B5D448]">
                <Users size={20} />
              </div>
              <h3 className="text-base font-medium text-white">Equipo humano</h3>
              <p className="mt-2 text-xs leading-relaxed text-white/70">
                Operadores y técnicos con experiencia en vivo que resuelven con rapidez y calidez.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso de trabajo: De la primera idea al último aplauso */}
      <section className="border-y border-white/[0.07] bg-[#0d0d10] section-padding">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
          <div className="mb-14 max-w-2xl">
            <span className="eyebrow">Metodología paso a paso</span>
            <h2 className="section-title mt-4">
              De la primera idea<br />
              <span className="text-white">al último aplauso.</span>
            </h2>
            <p className="mt-4 text-sm text-white/75">
              Un flujo de trabajo transparente y coordinado desde el primer contacto hasta el desarme final.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-4">
            {processSteps.map((item) => (
              <div
                key={item.number}
                className="process-card border-t border-white/15 pt-5"
              >
                <span className="text-xs text-[#B5D448] font-medium">{item.number}</span>
                <h3 className="mt-12 text-lg font-medium tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA final */}
      <CTASection
        eyebrow="Hagámoslo realidad"
        title="¿Querés trabajar con nuestro equipo técnico?"
        description="Estamos listos para sumar nuestra infraestructura a tu próxima fecha. Contactanos y coordinamos una reunión previa."
        primaryLabel="Hablar con un asesor"
        primaryHref="/contacto"
        secondaryLabel="Explorar catálogo de alquiler"
        secondaryHref="/alquiler"
      />
    </div>
  )
}
