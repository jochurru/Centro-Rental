import type { Metadata } from 'next'
import { PageHero } from '@/components/common/page-hero'
import { CTASection } from '@/components/common/cta-section'
import { processSteps, stats } from '@/data/site'
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
            <span className="hero-gradient-text">todo brille.</span>
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
              <span className="text-white/35">cero improvisación.</span>
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-white/60">
              Un buen evento no se nota por lo ruidoso, sino por la armonía y la exactitud con la que cada elemento entra en su momento exacto.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/40">
              Diseñamos cada rider técnico evaluando la acústica del salón, la visibilidad de las pantallas, la temperatura de color de las luminarias y la seguridad estructural del escenario.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3 lg:col-span-7">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                <Sliders size={20} />
              </div>
              <h3 className="text-base font-medium text-white">Rigor acústico & visual</h3>
              <p className="mt-2 text-xs leading-relaxed text-white/50">
                Calibración minuciosa de frecuencias y balances lumínicos según el recinto.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-base font-medium text-white">Seguridad de montaje</h3>
              <p className="mt-2 text-xs leading-relaxed text-white/50">
                Estructuras homologadas y anclajes con certificación de carga para tranquilidad total.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                <Users size={20} />
              </div>
              <h3 className="text-base font-medium text-white">Equipo humano</h3>
              <p className="mt-2 text-xs leading-relaxed text-white/50">
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
              <span className="text-white/35">al último aplauso.</span>
            </h2>
            <p className="mt-4 text-sm text-white/50">
              Un flujo de trabajo transparente y coordinado desde el primer contacto hasta el desarme final.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-4">
            {processSteps.map((item) => (
              <div
                key={item.number}
                className="process-card border-t border-white/15 pt-5"
              >
                <span className="text-xs text-violet-300 font-medium">{item.number}</span>
                <h3 className="mt-12 text-lg font-medium tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/45">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Métricas e indicadores */}
      <section className="section-padding mx-auto max-w-[1320px] px-5 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <span className="eyebrow">Trayectoria</span>
            <h2 className="section-title mt-4">
              Experiencia que<br />
              <span className="text-white/35">se nota.</span>
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-white/45 md:pb-2">
            Indicadores preparados para respaldar la envergadura y continuidad de cada proyecto que asumimos.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-y-10 border-y border-white/10 py-10 md:grid-cols-4 md:gap-0">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-white/10 md:border-l md:pl-6 first:md:border-0 first:md:pl-0"
            >
              <p className="text-4xl font-medium tracking-[-0.06em] text-white md:text-5xl">
                {stat.number}
              </p>
              <p className="mt-2 text-[10px] uppercase tracking-widest text-white/40">
                {stat.label}
              </p>
            </div>
          ))}
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
