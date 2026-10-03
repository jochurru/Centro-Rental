'use client'

import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { equipment, siteConfig } from '@/data/site'

export function Equipment() {
  const [activeEquipment, setActiveEquipment] = useState(0)
  const currentItem = equipment[activeEquipment]

  return (
    <section
      id="equipamiento"
      className="border-y border-white/[0.07] bg-[#0d0d10] section-padding scroll-mt-[74px]"
    >
      <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <span className="eyebrow">El equipo detrás</span>
            <h2 className="section-title mt-4">
              Equipamiento que<br />
              <span className="text-white/35">hace la diferencia.</span>
            </h2>
          </div>
          <Link
            href="/alquiler"
            className="hidden items-center gap-2 text-xs text-white/60 transition hover:text-white sm:flex"
          >
            Explorar alquiler <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="equipment-feature group relative min-h-[420px] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src={currentItem.image}
              alt={currentItem.title}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent pointer-events-none" />
            <div className="relative flex h-full flex-col justify-between p-6 md:p-8">
              <span className="self-end rounded-full border border-white/20 px-3 py-1 text-[10px] uppercase tracking-widest text-white/65">
                {String(activeEquipment + 1).padStart(2, '0')} / {String(equipment.length).padStart(2, '0')}
              </span>
              <div>
                <span className="text-xs uppercase tracking-widest text-violet-300">
                  {currentItem.category}
                </span>
                <h3 className="mt-2 text-3xl font-medium">{currentItem.title}</h3>
                <p className="mt-2 text-sm text-white/55">{currentItem.description}</p>
                <a
                  href={siteConfig.whatsappUrl}
                  className="mt-5 inline-flex items-center gap-2 text-xs text-white"
                >
                  Consultar disponibilidad <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {equipment.map((item, i) => (
              <button
                key={item.title}
                onClick={() => setActiveEquipment(i)}
                className={`group flex items-center gap-4 rounded-xl border p-3 text-left transition ${
                  activeEquipment === i
                    ? 'border-violet-400/60 bg-violet-500/10'
                    : 'border-white/10 bg-[#111114] hover:border-white/25'
                }`}
              >
                <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="96px"
                    className="object-cover opacity-75"
                  />
                </div>
                <span className="flex-1">
                  <span className="block text-[10px] uppercase tracking-widest text-white/40">
                    {item.category}
                  </span>
                  <span className="mt-1 block text-sm font-medium">{item.title}</span>
                </span>
                <ArrowUpRight
                  size={15}
                  className="mr-2 text-white/35 transition group-hover:text-white"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
