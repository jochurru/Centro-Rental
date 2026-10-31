import Link from 'next/link'
import { GlowButton } from '@/components/common/glow-button'

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
      <span className="eyebrow">Error 404</span>
      <h1 className="mt-4 text-3xl font-medium tracking-tight text-white sm:text-4xl md:text-5xl">
        Página no <span className="text-[#B5D448]">encontrada</span>
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60 sm:text-base">
        El enlace que seguiste no existe o fue reubicado. Podés volver al inicio o consultar nuestro catálogo de equipamiento.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <GlowButton href="/" className="px-6 py-3 text-sm">
          Volver al inicio
        </GlowButton>
        <Link
          href="/alquiler"
          className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-white/80 transition-colors hover:border-white/20 hover:text-white"
        >
          Ver equipamiento en alquiler
        </Link>
      </div>
    </div>
  )
}
