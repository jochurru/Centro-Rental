import type { Metadata } from 'next'
import {
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
} from 'lucide-react'
import { PageHero } from '@/components/common/page-hero'
import { GlowButton } from '@/components/common/glow-button'
import { ContactForm } from '@/components/sections/contact-form'
import { siteConfig } from '@/data/site'

export const metadata: Metadata = {
  title: 'Contacto | Centro Rental',
  description:
    'Contactá a Centro Rental. Solicitá presupuestos para sonido, iluminación, pantallas y logística técnica para eventos.',
}

export default function ContactoPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="Contacto & Presupuestos"
        title={
          <>
            Empecemos a planificar{' '}
            <span className="hero-gradient-text">tu fecha.</span>
          </>
        }
        description="Estamos a tu disposición para evaluar requerimientos de riders, disponibilidad de fechas, presupuestos a medida y asesoramiento técnico directo."
      />

      <section className="section-padding mx-auto max-w-[1320px] px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Canales directos de contacto */}
          <div className="flex flex-col justify-between gap-8 lg:col-span-5">
            <div>
              <span className="eyebrow">Canales directos</span>
              <h2 className="section-title mt-4">
                Respuestas ágiles,{' '}
                <span className="text-white/35">trato directo.</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/55">
                Para consultas inmediatas de disponibilidad o coordinación de urgencia, nuestro canal más directo es WhatsApp.
              </p>

              {/* Botón destacado WhatsApp */}
              <div className="mt-8">
                <GlowButton
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full justify-center py-4 text-sm sm:w-auto"
                >
                  <MessageCircle size={18} />
                  Consultar por WhatsApp
                </GlowButton>
              </div>

              {/* Datos de contacto */}
              <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-violet-400">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                      Correo electrónico
                    </p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="mt-1 text-sm font-medium text-white transition-colors hover:text-violet-300"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-emerald-400">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                      Ubicación operativa
                    </p>
                    <p className="mt-1 text-sm font-medium text-white">
                      {siteConfig.location}
                    </p>
                    <p className="text-xs text-white/45">
                      Montajes en CABA, GBA y traslados a todo el territorio nacional.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-amber-400">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                      Disponibilidad técnica
                    </p>
                    <p className="mt-1 text-sm font-medium text-white">
                      Lunes a Viernes · 9:00 a 19:00 hs
                    </p>
                    <p className="text-xs text-white/45">
                      Guardias operativas y soporte 24/7 durante días de función/evento.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Canales oficiales verificados */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                Redes y canales oficiales
              </p>
              <div className="mt-4 flex flex-col gap-3 text-sm">
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-white/60 transition-colors hover:text-white"
                >
                  <span className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded border border-white/20 text-[10px]">
                      ◎
                    </span>
                    Instagram oficial
                  </span>
                  <ArrowUpRight size={14} />
                </a>

                <a
                  href={siteConfig.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-white/60 transition-colors hover:text-white"
                >
                  <span className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded border border-white/20 text-[10px] font-bold">
                      f
                    </span>
                    Facebook oficial
                  </span>
                  <ArrowUpRight size={14} />
                </a>

                <a
                  href={siteConfig.mercadolibreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-white/60 transition-colors hover:text-white"
                >
                  <span className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded border border-yellow-500/40 text-[9px] font-bold text-yellow-300">
                      ML
                    </span>
                    Tienda en Mercado Libre
                  </span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Formulario de presupuesto / contacto */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
