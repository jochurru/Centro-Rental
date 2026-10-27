import React from 'react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { siteConfig } from '@/data/site'
import { InstagramIcon, FacebookIcon } from '@/components/common/social-icons'

export interface SocialBridgeImage {
  src: string
  alt: string
  label?: string
  href?: string
}

export interface SocialPortfolioBridgeProps {
  eyebrow: string
  title: React.ReactNode
  description: string
  instagramUrl?: string
  facebookUrl?: string
  instagramCtaLabel?: string
  facebookCtaLabel?: string
  images?: SocialBridgeImage[]
  showFacebook?: boolean
  className?: string
}

export function SocialPortfolioBridge({
  eyebrow,
  title,
  description,
  instagramUrl = siteConfig.instagramUrl,
  facebookUrl = siteConfig.facebookUrl,
  instagramCtaLabel = 'Ver más trabajos en Instagram',
  facebookCtaLabel = 'También estamos en Facebook',
  images,
  showFacebook = true,
  className = '',
}: SocialPortfolioBridgeProps) {
  const hasImages = Boolean(images && images.length > 0)

  return (
    <section
      aria-label={typeof title === 'string' ? title : eyebrow}
      className={`mx-auto max-w-[1320px] px-4 sm:px-5 lg:px-8 py-6 sm:py-10 ${className}`}
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c0d10] p-6 sm:p-8 lg:p-10">
        {/* Sutil acento de iluminación ambiental en esquina (sin exceso de color) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#B5D448]/[0.03] blur-3xl"
        />

        <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Columna editorial */}
          <div className={hasImages ? 'lg:col-span-7' : 'lg:col-span-12'}>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B5D448]" />
              <span className="eyebrow">{eyebrow}</span>
            </div>

            <h2 className="mt-3 text-2xl font-medium tracking-tight text-white sm:text-3xl">
              {title}
            </h2>

            <p className="mt-3.5 max-w-[560px] text-sm sm:text-base leading-relaxed text-white/65">
              {description}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4">
              {/* CTA Principal: Instagram (jerarquía dominante) */}
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-[44px] items-center gap-2.5 rounded-full border border-white/20 bg-white/[0.05] px-5 py-2.5 text-xs sm:text-sm font-medium text-white transition-[border-color,background-color,transform] duration-150 hover:border-[#B5D448]/60 hover:bg-white/[0.09] active:scale-[0.98] motion-reduce:active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B5D448] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0d10]"
              >
                <InstagramIcon className="h-4 w-4 text-[#B5D448] transition-transform duration-150 group-hover:scale-110 motion-reduce:transform-none" />
                <span>{instagramCtaLabel}</span>
                <ArrowUpRight
                  size={14}
                  className="text-white/50 transition-colors group-hover:text-white"
                />
              </a>

              {/* CTA Secundario: Facebook (mismo tratamiento de botón con acento azulado sobrio) */}
              {showFacebook && facebookUrl && (
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-[44px] items-center gap-2.5 rounded-full border border-white/20 bg-white/[0.05] px-5 py-2.5 text-xs sm:text-sm font-medium text-white transition-[border-color,background-color,transform] duration-150 hover:border-[#60a5fa]/50 hover:bg-white/[0.09] active:scale-[0.98] motion-reduce:active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#60a5fa] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0d10]"
                >
                  <FacebookIcon className="h-4 w-4 text-[#60a5fa] transition-transform duration-150 group-hover:scale-110 motion-reduce:transform-none" />
                  <span>{facebookCtaLabel}</span>
                  <ArrowUpRight
                    size={14}
                    className="text-white/50 transition-colors group-hover:text-white"
                  />
                </a>
              )}
            </div>
          </div>

          {/* Columna de evidencia fotográfica (Frames del portfolio real) */}
          {hasImages && images && (
            <div className="lg:col-span-5">
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {images.slice(0, 3).map((img, idx) => (
                  <a
                    key={idx}
                    href={img.href || instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={
                      img.href
                        ? `Ver publicación en Instagram: ${img.label || img.alt}`
                        : `Abrir Instagram de Centro Rental — ${img.label || img.alt}`
                    }
                    className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10 bg-black/40 transition-[border-color] duration-150 hover:border-[#B5D448]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B5D448]"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 640px) 28vw, (max-width: 1024px) 25vw, 15vw"
                      className="object-cover transition-transform duration-200 ease-out group-hover:scale-[1.03] motion-reduce:transform-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-85 transition-opacity duration-150 group-hover:opacity-70" />

                    {img.label && (
                      <div className="absolute bottom-2 left-2 right-2">
                        <span className="block truncate text-[10px] font-semibold uppercase tracking-wider text-white/80 transition-colors group-hover:text-white">
                          {img.label}
                        </span>
                      </div>
                    )}

                    <div className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-black/60 text-white/60 opacity-0 backdrop-blur-sm transition-opacity duration-150 group-hover:opacity-100">
                      <ArrowUpRight size={11} />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
