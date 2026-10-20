import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { CategoryIcon } from '@/components/common/category-icons'

const quickLinks = [
  { label: 'Proyectores', categoryId: 'proyectores-pantallas', iconName: 'Projector' },
  { label: 'Smart TVs', categoryId: 'smart-tvs-soportes', iconName: 'Monitor' },
  { label: 'Pantallas LED', categoryId: 'pantallas-led', iconName: 'Tv' },
  { label: 'Starlink', categoryId: 'starlink', iconName: 'Wifi' },
  { label: 'Notebooks', categoryId: 'notebooks', iconName: 'Laptop' },
  { label: 'PS5 / Xbox', categoryId: 'consolas-gaming', iconName: 'Gamepad' },
  { label: 'Streaming', categoryId: 'streaming-broadcast', iconName: 'Radio' },
  { label: 'Traducción simultánea', categoryId: 'traduccion-simultanea', iconName: 'Headphones' },
]

export function RentalQuickLinks() {
  return (
    <section className="border-y border-white/[0.08] bg-[#0c0d10] py-4 sm:py-5">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Encabezado compacto */}
          <div className="flex items-center gap-2.5 shrink-0">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B5D448]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-white/80">
              Lo más buscado en alquiler
            </span>
          </div>

          {/* Chips compactos y navegables */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {quickLinks.map((item) => (
              <Link
                key={item.label}
                href="/alquiler"
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-1.5 text-xs text-white/70 transition-all duration-200 hover:border-[#B5D448]/50 hover:bg-white/[0.06] hover:text-white"
              >
                <CategoryIcon
                  categoryId={item.categoryId}
                  iconName={item.iconName}
                  className="h-3.5 w-3.5 text-white/50 transition-colors group-hover:text-[#B5D448]"
                />
                <span>{item.label}</span>
              </Link>
            ))}

            <Link
              href="/alquiler"
              className="inline-flex items-center gap-1 pl-1.5 text-xs font-medium text-[#B5D448] transition-colors hover:text-white"
            >
              <span>Ver catálogo completo</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
