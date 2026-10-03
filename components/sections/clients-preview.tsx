import Link from 'next/link'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { featuredClients } from '@/data/site'

export function ClientsPreview() {
  const previewClients = featuredClients.slice(0, 4)

  return (
    <section className="section-padding border-t border-white/[0.06] bg-white/[0.01]">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">Clientes & Sectores</span>
            <h2 className="section-title mt-4">
              Quienes confían en<br />
              <span className="text-white/35">nuestra solvencia.</span>
            </h2>
          </div>
          <div className="flex flex-col items-start gap-3 md:items-end">
            <p className="max-w-[320px] text-sm leading-relaxed text-white/45">
              Desde recintos históricos hasta eventos masivos y lanzamientos de primer nivel.
            </p>
            <Link
              href="/clientes"
              className="flex items-center gap-1.5 text-xs text-violet-300 hover:text-white transition-colors"
            >
              Conocer nuestros clientes <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {previewClients.map((client) => (
            <Link
              key={client.id}
              href="/clientes"
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-white/20 hover:bg-white/[0.04]"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-violet-300">
                  {client.category}
                </span>
                <CheckCircle2 size={13} className="text-emerald-400" />
              </div>
              <h3 className="mt-3 text-lg font-medium text-white group-hover:text-violet-200 transition-colors">
                {client.name}
              </h3>
              {client.description && (
                <p className="mt-2 text-xs text-white/50 line-clamp-2">
                  {client.description}
                </p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
