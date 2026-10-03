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
      <div className="ambient-orb pointer-events-none absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-600/15 blur-[130px]" />

      <div className="relative mx-auto max-w-[1320px] px-5 lg:px-8">
        <div className="max-w-[850px]">
          {eyebrow && (
            <div className="mb-6 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.28em] text-violet-300">
              <span className="h-px w-8 bg-violet-400" />
              {eyebrow}
            </div>
          )}
          <h1 className="text-balance text-[clamp(2.4rem,5.5vw,4.8rem)] font-medium leading-[0.95] tracking-[-0.05em]">
            {title}
          </h1>
          <p className="mt-6 max-w-[620px] text-base leading-relaxed text-white/60 lg:text-lg">
            {description}
          </p>
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  )
}
