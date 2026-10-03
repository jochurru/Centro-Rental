import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { saleProducts } from '@/data/site'

export function SalesPreview() {
  const previewList = saleProducts.slice(0, 3)

  return (
    <section className="section-padding mx-auto max-w-[1320px] px-5 lg:px-8">
      <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <span className="eyebrow">Renovación de parque</span>
          <h2 className="section-title mt-4">
            Equipamiento en venta<br />
            <span className="text-white/35">con garantía operativa.</span>
          </h2>
        </div>
        <div className="flex flex-col items-start gap-3 md:items-end">
          <p className="max-w-[320px] text-sm leading-relaxed text-white/45">
            Equipos testeados con compra protegida en nuestra tienda oficial de Mercado Libre.
          </p>
          <Link
            href="/venta"
            className="flex items-center gap-1.5 text-xs text-violet-300 hover:text-white transition-colors"
          >
            Ver productos en venta <ArrowUpRight size={13} />
          </Link>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {previewList.map((prod) => (
          <Link
            key={prod.id}
            href="/venta"
            className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all hover:border-white/20 hover:bg-white/[0.04]"
          >
            <div className="relative aspect-[16/11] w-full bg-black/40">
              <Image
                src={prod.image}
                alt={prod.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute left-3 top-3">
                <span className="rounded-full border border-white/15 bg-black/60 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur-sm">
                  {prod.category}
                </span>
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-between p-6">
              <div>
                <span className="text-[11px] text-emerald-400 font-medium">
                  {prod.status}
                </span>
                <h3 className="mt-1 text-base font-medium text-white group-hover:text-violet-200 transition-colors">
                  {prod.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-white/50 line-clamp-2">
                  {prod.description}
                </p>
              </div>

              <div className="mt-4 flex items-center gap-1 text-xs text-white/60 group-hover:text-white">
                <span>Ver detalles y compra</span>
                <ArrowUpRight size={13} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
