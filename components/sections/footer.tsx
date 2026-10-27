import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'
import { Logo } from '@/components/common/logo'
import { footerNavItems, siteConfig } from '@/data/site'
import {
  InstagramIcon,
  FacebookIcon,
  WhatsAppIcon,
  MercadoLibreIcon,
} from '@/components/common/social-icons'

export function Footer() {
  return (
    <footer className="mx-auto max-w-[1320px] px-4 sm:px-5 pb-8 pt-12 sm:pt-14 lg:px-8">
      <div className="flex flex-col justify-between gap-10 sm:gap-12 md:flex-row">
        <div>
          <Logo />
          <p className="mt-4 sm:mt-5 max-w-[280px] text-sm leading-relaxed text-white/50">
            Producción técnica integral, equipamiento audiovisual y alquiler para eventos.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-3">
          <div>
            <p className="eyebrow mb-3 sm:mb-4">Navegación</p>
            <div className="flex flex-col gap-1.5 sm:gap-2.5 text-sm text-white/50">
              {footerNavItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="inline-block py-1 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow mb-3 sm:mb-4">Contacto Directo</p>
            <div className="flex flex-col gap-2 sm:gap-3 text-sm text-white/60">
              <div className="flex items-start gap-2.5 py-1">
                <MapPin size={15} className="mt-0.5 shrink-0 text-[#B5D448]" />
                <span className="text-white/80 leading-snug">{siteConfig.address}</span>
              </div>
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="flex items-center gap-2.5 py-1 transition-colors hover:text-white"
              >
                <Phone size={15} className="shrink-0 text-[#B5D448]" />
                <span>{siteConfig.phone}</span>
              </a>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 py-1 transition-colors hover:text-white"
              >
                <WhatsAppIcon className="h-3.5 w-3.5 shrink-0 text-[#B5D448]" />
                <span>{siteConfig.whatsappPhone}</span>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2.5 py-1 transition-colors hover:text-white"
              >
                <Mail size={15} className="shrink-0 text-[#B5D448]" />
                <span>{siteConfig.email}</span>
              </a>
            </div>
          </div>

          <div>
            <p className="eyebrow mb-3 sm:mb-4">Canales Oficiales</p>
            <div className="flex flex-col gap-1.5 sm:gap-2.5 text-sm text-white/60">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 py-1 transition-colors hover:text-white"
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0 text-white/60 transition-colors group-hover:text-[#25D366]" />
                <span>WhatsApp</span>
              </a>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 py-1 transition-colors hover:text-white"
              >
                <InstagramIcon className="h-4 w-4 shrink-0 text-white/60 transition-colors group-hover:text-[#E4405F]" />
                <span>Instagram</span>
              </a>
              <a
                href={siteConfig.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 py-1 transition-colors hover:text-white"
              >
                <FacebookIcon className="h-4 w-4 shrink-0 text-white/60 transition-colors group-hover:text-[#1877F2]" />
                <span>Facebook</span>
              </a>
              <a
                href={siteConfig.mercadolibreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 py-1 transition-colors hover:text-white"
              >
                <MercadoLibreIcon className="h-4 w-4 shrink-0 text-white/60 transition-colors group-hover:text-[#FFE600]" />
                <span>Mercado Libre</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14 flex flex-col justify-between gap-3 border-t border-white/10 pt-5 text-[10px] uppercase tracking-widest text-white/30 sm:flex-row">
        <span>© {siteConfig.copyrightYear} Centro Rental · {siteConfig.address}</span>
        <span>Todos los derechos reservados</span>
      </div>
    </footer>
  )
}
