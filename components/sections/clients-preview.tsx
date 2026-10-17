import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { confirmedClients } from '@/data/site'

export function ClientsPreview() {
  const topClients = confirmedClients.slice(0, 8)

  return (
    <section className="section-padding border-t border-white/[0.06] bg-white/[0.01]">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <span className="eyebrow flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B5D448]" />
              Clientes & Marcas
            </span>
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

        {/* Brand wall: grilla limpia de logos reconocibles */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {topClients.map((client) => (
            <Link
              key={client.id}
              href="/clientes"
              className="group relative flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:border-[#B5D448]/40 hover:bg-white/[0.04]"
            >
              {client.logo ? (
                <div className="flex h-16 w-full items-center justify-center rounded-xl bg-white px-4 py-2 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                  <Image
                    src={client.logo}
                    alt={`Logo de ${client.name}`}
                    width={120}
                    height={46}
                    className="max-h-full max-w-full object-contain filter grayscale contrast-125 opacity-80 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                </div>
              ) : null}
              <span className="mt-3 text-center text-xs font-medium text-white/50 transition-colors group-hover:text-white">
                {client.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
