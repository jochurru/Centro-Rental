import Link from 'next/link'
import Image from 'next/image'
import { MoveRight } from 'lucide-react'
import { GlowButton } from '@/components/common/glow-button'
import { siteConfig } from '@/data/site'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[760px] items-end overflow-hidden pb-20 pt-32 lg:min-h-screen lg:pb-28 scroll-mt-[74px]"
    >
      <Image
        src="/hero-event.webp"
        alt="Producción técnica de un evento con escenario e iluminación"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-70"
      />
      <div className="hero-grid absolute inset-0 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#09090b] via-[#09090b]/65 to-[#09090b]/10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-[#09090b]/35 pointer-events-none" />
      <div className="ambient-orb absolute -right-20 top-1/3 h-80 w-80 rounded-full bg-violet-500/20 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto w-full max-w-[1320px] px-5 lg:px-8">
        <div className="max-w-[830px]">
          <div className="mb-7 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.28em] text-violet-300">
            <span className="h-px w-8 bg-violet-400" />
            Producción técnica para eventos
          </div>
          <h1 className="text-balance text-[clamp(3.3rem,8vw,7.8rem)] font-medium leading-[0.91] tracking-[-0.07em]">
            Hacemos que tu evento <span className="hero-gradient-text">se vea,</span>
            <br className="hidden sm:block" /> se escuche y{' '}
            <span className="hero-gradient-text">se sienta.</span>
          </h1>
          <p className="mt-8 max-w-[530px] text-base leading-relaxed text-white/60 lg:text-lg">
            Soluciones de sonido, iluminación, pantallas y equipamiento técnico para eventos que dejan marca.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <GlowButton href="/contacto" className="px-6 py-3.5">
              Pedí tu presupuesto
            </GlowButton>
            <Link
              href="/alquiler"
              className="group flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm text-white transition-all hover:border-white/50 hover:bg-white/5"
            >
              Ver equipamiento{' '}
              <MoveRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        <div className="mt-16 flex items-center gap-5 text-[10px] uppercase tracking-[0.2em] text-white/35">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />
            {siteConfig.availability}
          </span>
          <span className="h-3 w-px bg-white/20" />
          <span>{siteConfig.location}</span>
        </div>
      </div>

      <div className="absolute bottom-9 right-8 hidden items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/35 lg:flex">
        <span>Scroll para explorar</span>
        <span className="h-10 w-px bg-gradient-to-b from-violet-400 to-transparent" />
      </div>
    </section>
  )
}
