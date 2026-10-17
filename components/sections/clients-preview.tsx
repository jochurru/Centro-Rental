import Link from 'next/link'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { featuredClients } from '@/data/site'

export function ClientsPreview() {
  const previewClients = featuredClients.slice(0, 8)

  return (
    <section className="section-padding border-t border-white/[0.06] bg-white/[0.01]">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">Clientes & Trayectoria</span>
            <h2 className="section-title mt-4">
              Marcas que confían en<br />
              <span className="text-white">nuestra solvencia.</span>
            </h2>
          </div>
          <div className="flex flex-col items-start gap-3 md:items-end">
            <p className="max-w-[320px] text-sm leading-relaxed text-white/75">
              Empresas, productoras e instituciones que eligen precisión técnica y respaldo operativo.
            </p>
            <Link
              href="/clientes"
              className="flex items-center gap-1.5 text-xs text-[#B5D448] hover:text-white transition-colors"
            >
              Ver todos los clientes <ArrowUpRight size={13} />
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
                <span className="text-[10px] font-semibold uppercase tracking-wider text-white/50">
                  {client.category}
                </span>
                <ArrowUpRight
                  size={14}
                  className="text-white/40 opacity-0 transition-opacity group-hover:opacity-100 group-hover:text-white"
                />
              </div>
              <h3 className="mt-3 text-lg font-medium text-white group-hover:text-zinc-100 transition-colors">
                {client.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
