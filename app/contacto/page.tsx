import type { Metadata } from 'next'
import Image from 'next/image'
import {
  MessageCircle,
  Mail,
  MapPin,
  Phone,
  Clock,
  ArrowUpRight,
} from 'lucide-react'
import { PageHero } from '@/components/common/page-hero'
import { GlowButton } from '@/components/common/glow-button'
import { ContactForm } from '@/components/sections/contact-form'
import { siteConfig } from '@/data/site'
import {
  InstagramIcon,
  FacebookIcon,
  WhatsAppIcon,
  MercadoLibreIcon,
} from '@/components/common/social-icons'

export const metadata: Metadata = {
  title: 'Contacto | Centro Rental',
  description:
    'Contactá a Centro Rental. Solicitá presupuestos para sonido, iluminación, pantallas y logística técnica para eventos.',
  alternates: {
    canonical: '/contacto',
  },
}

export default function ContactoPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="Contacto & Presupuestos"
        title={
          <>
            Empecemos a planificar{' '}
            <span className="text-[#B5D448]">tu fecha.</span>
          </>
        }
        description="Estamos a tu disposición para evaluar requerimientos de riders, disponibilidad de fechas, presupuestos a medida y asesoramiento técnico directo."
      />

      <section className="section-padding mx-auto max-w-[1320px] px-4 sm:px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Canales directos de contacto */}
          <div className="flex flex-col justify-between gap-8 lg:col-span-5">
            <div>
              <span className="eyebrow">Canales directos</span>
              <h2 className="section-title mt-4">
                Respuestas ágiles,{' '}
                <span className="text-white">trato directo.</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/75">
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

              {/* Datos de contacto oficiales */}
              <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-8">
                <div className="flex flex-col gap-3">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#B5D448]/30 bg-white/[0.03] text-[#B5D448]">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-white/70">
                        Showroom & Dirección
                      </p>
                      <p className="mt-1 text-sm font-medium text-white">
                        {siteConfig.address}
                      </p>
                      <p className="text-xs text-white/60">
                        Atención personalizada, retiros de rental y showroom técnico en CABA.
                      </p>
                    </div>
                  </div>

                  {/* Fotografía real de la fachada para reconocimiento visual */}
                  <div className="relative mt-1 h-44 w-full overflow-hidden rounded-xl border border-white/10 bg-black/40">
                    <Image
                      src="/images/showroom/showroom-fachada.webp"
                      alt="Fachada del showroom de Centro Rental en Av. Belgrano 2450"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-2.5 left-3 right-3">
                      <span className="rounded bg-black/75 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-white/90 backdrop-blur-sm border border-white/10">
                        Fachada Oficial · Av. Belgrano 2450
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#B5D448]/30 bg-white/[0.03] text-[#B5D448]">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/70">
                      Teléfono
                    </p>
                    <a
                      href={`tel:${siteConfig.phoneTel}`}
                      className="mt-1 block text-sm font-medium text-white transition-colors hover:text-[#B5D448]"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#B5D448]/30 bg-white/[0.03] text-[#B5D448]">
                    <WhatsAppIcon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/70">
                      WhatsApp directo
                    </p>
                    <a
                      href={siteConfig.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-sm font-medium text-white transition-colors hover:text-[#B5D448]"
                    >
                      {siteConfig.whatsappPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#B5D448]/30 bg-white/[0.03] text-[#B5D448]">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/70">
                      Correo electrónico
                    </p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="mt-1 block text-sm font-medium text-white transition-colors hover:text-[#B5D448]"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/80">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/70">
                      Disponibilidad técnica
                    </p>
                    <p className="mt-1 text-sm font-medium text-white">
                      Lunes a Viernes · 9:00 a 19:00 hs
                    </p>
                    <p className="text-xs text-white/60">
                      Guardias operativas y soporte técnico durante días de evento.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Canales oficiales verificados con íconos vectoriales */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/70">
                Redes y canales oficiales
              </p>
              <div className="mt-4 flex flex-col gap-3 text-sm">
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between text-white/80 transition-colors hover:text-white"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] text-white/70 transition-colors group-hover:border-[#25D366]/40 group-hover:text-[#25D366]">
                      <WhatsAppIcon className="h-3.5 w-3.5" />
                    </span>
                    WhatsApp oficial
                  </span>
                  <ArrowUpRight size={14} className="text-white/40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                </a>

                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between text-white/80 transition-colors hover:text-white"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] text-white/70 transition-colors group-hover:border-[#E4405F]/40 group-hover:text-[#E4405F]">
                      <InstagramIcon className="h-3.5 w-3.5" />
                    </span>
                    Instagram oficial
                  </span>
                  <ArrowUpRight size={14} className="text-white/40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                </a>

                <a
                  href={siteConfig.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between text-white/80 transition-colors hover:text-white"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] text-white/70 transition-colors group-hover:border-[#1877F2]/40 group-hover:text-[#1877F2]">
                      <FacebookIcon className="h-3.5 w-3.5" />
                    </span>
                    Facebook oficial
                  </span>
                  <ArrowUpRight size={14} className="text-white/40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                </a>

                <a
                  href={siteConfig.mercadolibreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between text-white/80 transition-colors hover:text-white"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] text-white/70 transition-colors group-hover:border-[#FFE600]/40 group-hover:text-[#FFE600]">
                      <MercadoLibreIcon className="h-3.5 w-3.5" />
                    </span>
                    Tienda en Mercado Libre
                  </span>
                  <ArrowUpRight size={14} className="text-white/40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
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
