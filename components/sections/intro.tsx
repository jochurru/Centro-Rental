import Link from 'next/link'
import { MoveRight, ShieldCheck, Cpu, Sparkles } from 'lucide-react'

export function Intro() {
  return (
    <section className="section-padding mx-auto max-w-[1320px] px-5 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6">
          <span className="eyebrow">Sobre Centro Rental</span>
          <h2 className="section-title mt-4">
            Ingeniería técnica para eventos{' '}
            <span className="text-white/35">de alta exigencia.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/60">
            Acompañamos a productores, empresas y marcas en la materialización de sus eventos con equipamiento de primer nivel y un equipo humano enfocado en la precisión operativa.
          </p>
          <div className="mt-8">
            <Link
              href="/nosotros"
              className="group inline-flex items-center gap-2 text-sm font-medium text-violet-300 transition-colors hover:text-white"
            >
              Conocé nuestra historia y metodología
              <MoveRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:col-span-6">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
            <Cpu className="h-6 w-6 text-violet-400" />
            <h3 className="mt-3 text-sm font-medium text-white">Tecnología de punta</h3>
            <p className="mt-1 text-xs text-white/50">
              Sistemas digitales y equipamiento de primeras marcas.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
            <ShieldCheck className="h-6 w-6 text-emerald-400" />
            <h3 className="mt-3 text-sm font-medium text-white">Seguridad & Backup</h3>
            <p className="mt-1 text-xs text-white/50">
              Redundancia operativa y contingencia en cada montaje.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
            <Sparkles className="h-6 w-6 text-cyan-400" />
            <h3 className="mt-3 text-sm font-medium text-white">Puesta en escena</h3>
            <p className="mt-1 text-xs text-white/50">
              Cuidado estético para que la técnica potencie el evento.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
