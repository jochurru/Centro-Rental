import Link from 'next/link'
import { Logo } from '@/components/common/logo'
import { footerNavItems, siteConfig } from '@/data/site'

export function Footer() {
  return (
    <footer className="mx-auto max-w-[1320px] px-5 pb-8 pt-14 lg:px-8">
      <div className="flex flex-col justify-between gap-12 md:flex-row">
        <div>
          <Logo />
          <p className="mt-5 max-w-[250px] text-sm leading-relaxed text-white/40">
            Producción técnica para eventos que se sienten.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-16 gap-y-8 sm:grid-cols-3">
          <div>
            <p className="eyebrow mb-4">Navegación</p>
            <div className="flex flex-col gap-3 text-sm text-white/50">
              {footerNavItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow mb-4">Contacto</p>
            <div className="flex flex-col gap-3 text-sm text-white/50">
              <a href={siteConfig.whatsappUrl} className="hover:text-white">
                WhatsApp
              </a>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                Email
              </a>
              <span>{siteConfig.locationShort}</span>
            </div>
          </div>

          <div>
            <p className="eyebrow mb-4">Canales</p>
            <div className="flex flex-col gap-3 text-sm text-white/50">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <span className="flex h-4 w-4 items-center justify-center rounded-[5px] border border-current text-[9px]">
                  ◎
                </span>
                Instagram
              </a>
              <a
                href={siteConfig.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <span className="flex h-4 w-4 items-center justify-center rounded-[5px] border border-current text-[9px] font-bold">
                  f
                </span>
                Facebook
              </a>
              <a
                href={siteConfig.mercadolibreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <span className="flex h-4 w-4 items-center justify-center rounded-[5px] border border-current text-[8px] font-bold">
                  ML
                </span>
                Mercado Libre
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14 flex flex-col justify-between gap-3 border-t border-white/10 pt-5 text-[10px] uppercase tracking-widest text-white/25 sm:flex-row">
        <span>© {siteConfig.copyrightYear} Centro Rental</span>
        <span>Todos los derechos reservados</span>
      </div>
    </footer>
  )
}
