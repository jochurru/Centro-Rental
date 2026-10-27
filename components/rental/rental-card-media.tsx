'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { CategoryIcon } from '@/components/common/category-icons'

interface RentalCardMediaProps {
  categoryId: string
  iconName?: string
  primaryImage: string
  primaryAlt: string
  secondaryImage?: string
  secondaryAlt?: string
}

export function RentalCardMedia({
  categoryId,
  iconName,
  primaryImage,
  primaryAlt,
  secondaryImage,
  secondaryAlt,
}: RentalCardMediaProps) {
  const [activeView, setActiveView] = useState<0 | 1>(0)

  // Vista estándar para categorías con imagen única
  if (!secondaryImage) {
    return (
      <div className="relative mb-5 h-44 w-full overflow-hidden rounded-xl border border-white/10 bg-black/40">
        <Image
          src={primaryImage}
          alt={primaryAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-200 ease-out group-hover:scale-[1.02] motion-reduce:transform-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
        <div className="absolute bottom-3 left-3 flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-black/70 text-zinc-200 backdrop-blur-sm group-hover:border-[#B5D448]/40 group-hover:text-white transition-colors">
          <CategoryIcon categoryId={categoryId} iconName={iconName} className="h-4 w-4" />
        </div>
      </div>
    )
  }

  // Vista interactiva dual (Equipo + Aplicación real en evento)
  return (
    <div className="relative mb-5 h-44 w-full overflow-hidden rounded-xl border border-white/10 bg-black/40 group/media">
      {/* Imagen primaria (Equipo) */}
      <div
        className={cn(
          'absolute inset-0 transition-opacity duration-300 ease-in-out',
          activeView === 0 ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
        )}
      >
        <Image
          src={primaryImage}
          alt={primaryAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-200 ease-out group-hover:scale-[1.02] motion-reduce:transform-none"
        />
      </div>

      {/* Imagen secundaria (Contexto real en evento) */}
      <div
        className={cn(
          'absolute inset-0 transition-opacity duration-300 ease-in-out',
          activeView === 1 ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
        )}
      >
        <Image
          src={secondaryImage}
          alt={secondaryAlt || primaryAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-200 ease-out group-hover:scale-[1.02] motion-reduce:transform-none"
        />
      </div>

      {/* Gradiente ambiental */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent z-20 pointer-events-none" />

      {/* Icono de categoría (inferior izquierda) */}
      <div className="absolute bottom-3 left-3 z-30 flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-black/70 text-zinc-200 backdrop-blur-sm group-hover:border-[#B5D448]/40 group-hover:text-white transition-colors">
        <CategoryIcon categoryId={categoryId} iconName={iconName} className="h-4 w-4" />
      </div>

      {/* Badge contextual al visualizar evento */}
      {activeView === 1 && (
        <div className="absolute bottom-3 left-13 z-30 hidden sm:flex items-center rounded-md border border-[#B5D448]/30 bg-black/80 px-2 py-0.5 text-[10px] font-medium text-[#B5D448] backdrop-blur-sm animate-in fade-in duration-200">
          En evento real
        </div>
      )}

      {/* Selector micro-pill superior derecho */}
      <div className="absolute top-2.5 right-2.5 z-30 flex items-center rounded-lg border border-white/20 bg-black/80 p-0.5 backdrop-blur-md shadow-lg">
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            setActiveView(0)
          }}
          onMouseEnter={() => setActiveView(0)}
          className={cn(
            'flex items-center gap-1 rounded-md px-2 py-1 text-[10px] font-medium tracking-wide transition-colors duration-150',
            activeView === 0
              ? 'bg-[#B5D448] text-black font-semibold shadow-sm'
              : 'text-white/60 hover:text-white'
          )}
          aria-label="Ver equipamiento"
        >
          Equipo
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            setActiveView(1)
          }}
          onMouseEnter={() => setActiveView(1)}
          className={cn(
            'flex items-center gap-1 rounded-md px-2 py-1 text-[10px] font-medium tracking-wide transition-colors duration-150',
            activeView === 1
              ? 'bg-[#B5D448] text-black font-semibold shadow-sm'
              : 'text-white/60 hover:text-white'
          )}
          aria-label="Ver en evento"
        >
          En evento
        </button>
      </div>

      {/* Miniatura interactiva de alternancia rápida / mobile */}
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          setActiveView(activeView === 0 ? 1 : 0)
        }}
        className="absolute bottom-2.5 right-2.5 z-30 flex items-center gap-1.5 rounded-md border border-white/25 bg-black/75 p-1 backdrop-blur-md shadow-md transition-[border-color,transform] duration-150 hover:border-[#B5D448]/70 hover:scale-[1.03] active:scale-[0.97] motion-reduce:transform-none"
        title={activeView === 0 ? 'Ver en evento' : 'Ver equipo'}
        aria-label={activeView === 0 ? 'Ver en evento' : 'Ver equipo'}
      >
        <div className="relative h-6 w-9 overflow-hidden rounded border border-white/20 bg-black">
          <Image
            src={activeView === 0 ? secondaryImage : primaryImage}
            alt="Miniatura alternativa"
            fill
            sizes="36px"
            className="object-cover"
          />
        </div>
        <span className="pr-1 text-[9px] font-medium text-white/80">
          {activeView === 0 ? 'Contexto' : 'Equipo'}
        </span>
      </button>
    </div>
  )
}
