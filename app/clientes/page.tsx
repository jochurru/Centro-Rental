import type { Metadata } from 'next'
import { CheckCircle2, ShieldCheck, Award, Zap } from 'lucide-react'
import { PageHero } from '@/components/common/page-hero'
import { CTASection } from '@/components/common/cta-section'
import { featuredClients } from '@/data/site'

export const metadata: Metadata = {
  title: 'Clientes y Confianza | Centro Rental',
  description:
    'Marcas, productoras e instituciones que confían en los servicios técnicos y equipamiento de Centro Rental.',
}

export default function ClientesPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="Clientes & Trayectoria"
        title={
          <>
            La confianza de quienes{' '}
            <span className="hero-gradient-text">no pueden fallar.</span>
          </>
        }
        description="Trabajamos junto a productoras, instituciones, empresas y hoteles de primer nivel. En eventos de alta visibilidad, la solvencia técnica y el backup en vivo son indispensables."
      />

      {/* Grid de clientes y sectores */}
      <section className="section-padding mx-auto max-w-[1320px] px-5 lg:px-8">
        <div className="mb-12">
          <span className="eyebrow">Sectores e instituciones</span>
          <h2 className="section-title mt-4">
            Presencia en los escenarios{' '}
            <span className="text-white/35">más exigentes.</span>
          </h2>
          <p className="mt-4 max-w-[560px] text-sm text-white/50">
            Nuestra estructura técnica se adapta tanto a la sobriedad protocolar de un teatro como a la potencia de un festival o la elegancia de una gala corporativa.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredClients.map((client) => (
            <div
              key={client.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition-all hover:border-white/20 hover:bg-white/[0.04]"
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-[11px] font-medium text-violet-300">
                    {client.category}
                  </span>
                  {client.verified && (
                    <span className="flex items-center gap-1 text-[11px] text-emerald-400">
                      <CheckCircle2 size={13} />
                      Confirmado
                    </span>
                  )}
                </div>

                <h3 className="mt-2 text-xl font-medium text-white group-hover:text-violet-200 transition-colors">
                  {client.name}
                </h3>

                {client.description && (
                  <p className="mt-3 text-sm leading-relaxed text-white/55">
                    {client.description}
                  </p>
                )}
              </div>

              <div className="mt-6 border-t border-white/[0.06] pt-4 text-[11px] uppercase tracking-wider text-white/35">
                Producción & Cobertura técnica
              </div>
            </div>
          ))}
        </div>

        {/* Factores de fiabilidad */}
        <div className="mt-20 rounded-3xl border border-white/10 bg-white/[0.02] p-8 sm:p-12">
          <div className="mx-auto max-w-[700px] text-center">
            <span className="eyebrow">Compromiso técnico</span>
            <h3 className="mt-3 text-2xl font-medium text-white sm:text-3xl">
              ¿Por qué nos eligen las producciones?
            </h3>
            <p className="mt-4 text-sm text-white/55">
              La diferencia no es solo contar con buenos equipos, sino saber resolver imprevistos antes de que el público los note.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="flex flex-col items-center text-center p-4">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-violet-400">
                <ShieldCheck size={22} />
              </div>
              <h4 className="text-base font-medium text-white">Redundancia y Backup</h4>
              <p className="mt-2 text-xs leading-relaxed text-white/50">
                Líneas de audio redundantes y contingencia eléctrica en puntos críticos del evento.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-emerald-400">
                <Zap size={22} />
              </div>
              <h4 className="text-base font-medium text-white">Montaje y Desmontaje Ágil</h4>
              <p className="mt-2 text-xs leading-relaxed text-white/50">
                Tiempos de prueba rigurosos y coordinación ajustada a los horarios de cada locación.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-amber-400">
                <Award size={22} />
              </div>
              <h4 className="text-base font-medium text-white">Operadores Especializados</h4>
              <p className="mt-2 text-xs leading-relaxed text-white/50">
                Técnicos dedicados por área: sonido de sala, monitores, luces, pantallas y switchers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <CTASection
        eyebrow="Nueva alianza"
        title="Sumá solvencia técnica a tu próxima producción"
        description="Conversemos sobre las necesidades de tu marca o agencia. Ofrecemos trato directo, cotizaciones ágiles y confidencialidad."
        primaryLabel="Contactar a nuestro equipo"
        primaryHref="/contacto"
        secondaryLabel="Ver cartera de eventos"
        secondaryHref="/eventos"
      />
    </div>
  )
}
