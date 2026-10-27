import React from 'react'

interface PageHeroProps {
  eyebrow?: string
  title: React.ReactNode
  description: string
  children?: React.ReactNode
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.06] pb-16 pt-36 lg:pb-24 lg:pt-40">
      {/* Background ambience */}
      <div className="hero-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#09090b]/40 to-[#09090b]" />
      <div className="ambient-orb pointer-events-none absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#0284C7]/8 blur-[140px]" />
      <div className="ambient-orb pointer-events-none absolute -top-10 right-1/4 h-64 w-64 rounded-full bg-[#B5D448]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-[1320px] px-5 lg:px-8">
        <div className="max-w-[850px]">
          {eyebrow && (
            <div className="mb-6 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/75">
              <span className="h-px w-8 bg-[#B5D448]" />
              {eyebrow}
            </div>
          )}
          <h1 className="text-balance text-[clamp(2.4rem,5.5vw,4.8rem)] font-medium leading-[0.95] tracking-[-0.05em] text-white">
            {title}
          </h1>
          <p className="mt-6 max-w-[620px] text-base leading-relaxed text-white/75 lg:text-lg">
            {description}
          </p>
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  )
}
