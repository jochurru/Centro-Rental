import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { confirmedClients } from '@/data/site'

export function ClientsPreview() {
  const topClients = confirmedClients.slice(0, 8)

  return (
    <section className="border-t border-white/[0.06] bg-white/[0.01] py-14 sm:py-18 lg:py-20">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-5 lg:px-8">
        <div className="mb-8 sm:mb-12 flex flex-col justify-between gap-4 sm:gap-5 md:flex-row md:items-end">
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
              Conocer nuestros clientes y marcas <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>

        {/* Brand wall: grilla limpia de logos reconocibles */}
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-4">
          {topClients.map((client) => (
            <Link
              key={client.id}
              href="/clientes"
              className="group relative flex flex-col items-center justify-center rounded-xl border border-white/[0.08] bg-[#101115] p-3 sm:p-4 transition-[border-color,transform] duration-150 hover:border-white/20 active:scale-[0.98] motion-reduce:active:scale-100"
            >
              {client.logo ? (
                <div className="flex h-14 w-full items-center justify-center rounded-md border border-black/[0.06] bg-[#FCFEFC] px-3.5 py-2">
                  <Image
                    src={client.logo}
                    alt={`Logo de ${client.name}`}
                    width={120}
                    height={46}
                    className="max-h-full max-w-full object-contain filter grayscale contrast-125 opacity-85 transition-opacity duration-200 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                </div>
              ) : null}
              <span className="mt-2.5 text-center text-xs font-medium text-white/60 transition-colors group-hover:text-white">
                {client.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
