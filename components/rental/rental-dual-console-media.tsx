'use client'

import React, { useState, useRef, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { CategoryIcon } from '@/components/common/category-icons'

interface ConsoleSlide {
  id: 'ps5' | 'xbox'
  tabLabel: string
  name: string
  src: string
  alt: string
}

const CONSOLES: ConsoleSlide[] = [
  {
    id: 'ps5',
    tabLabel: 'PS5',
    name: 'PlayStation 5',
    src: '/images/rental/consola-playstation-5.webp',
    alt: 'PlayStation 5 disponible para alquiler',
  },
  {
    id: 'xbox',
    tabLabel: 'Xbox Series X',
    name: 'Xbox Series X',
    src: '/images/rental/consola-xbox-series-x.webp',
    alt: 'Xbox Series X disponible para alquiler',
  },
]

export function RentalDualConsoleMedia() {
  const [activeIdx, setActiveIdx] = useState<0 | 1>(0)
  const touchStartRef = useRef<{ x: number; y: number } | null>(null)

  const toggle = useCallback(() => {
    setActiveIdx((prev) => (prev === 0 ? 1 : 0))
  }, [])

  const setIndex = useCallback((idx: 0 | 1) => {
    setActiveIdx(idx)
  }, [])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        e.preventDefault()
        toggle()
      }
    },
    [toggle]
  )

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0]
    touchStartRef.current = { x: touch.clientX, y: touch.clientY }
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartRef.current) return
    const touch = e.changedTouches[0]
    const deltaX = touch.clientX - touchStartRef.current.x
    const deltaY = touch.clientY - touchStartRef.current.y
    touchStartRef.current = null

    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY) * 1.3) {
      if (deltaX > 0) {
        setIndex(0)
      } else {
        setIndex(1)
      }
    }
  }

  const currentConsole = CONSOLES[activeIdx]

  return (
    <div
      role="region"
      aria-roledescription="carrusel"
      aria-label="Galería de consolas PS5 y Xbox Series X"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="group/gallery relative mb-5 h-48 w-full select-none overflow-hidden rounded-xl border border-white/10 bg-black/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B5D448]"
    >
      {/* Slides de imágenes con cross-fade suave (200ms) y soporte prefers-reduced-motion */}
      {CONSOLES.map((consoleItem, index) => {
        const isActive = index === activeIdx
        return (
          <div
            key={consoleItem.id}
            aria-hidden={!isActive}
            className={cn(
              'absolute inset-0 transition-opacity duration-200 ease-out motion-reduce:transition-none',
              isActive
                ? 'z-10 opacity-100'
                : 'z-0 opacity-0 pointer-events-none'
            )}
          >
            <Image
              src={consoleItem.src}
              alt={consoleItem.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center transition-transform duration-200 ease-out group-hover/gallery:scale-[1.02] motion-reduce:transition-none motion-reduce:transform-none motion-reduce:group-hover/gallery:scale-100"
              priority={index === 0}
            />
          </div>
        )
      })}

      {/* Gradientes cinematográficos superior e inferior para legibilidad */}
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/80 via-black/35 to-transparent pointer-events-none z-20" />
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none z-20" />

      {/* Header superior: Icono de categoría a la izquierda y tabs/chips discretos a la derecha */}
      <div className="absolute top-2.5 inset-x-2.5 z-30 flex items-center justify-between pointer-events-none">
        <div className="flex h-7 w-7 items-center justify-center rounded-md border border-white/15 bg-black/75 text-zinc-300 backdrop-blur-md pointer-events-auto">
          <CategoryIcon categoryId="consolas-gaming" iconName="Gamepad" className="h-4 w-4" />
        </div>

        {/* Tabs/chips manuales: [ PS5 ] [ Xbox Series X ] con hit-target táctil >= 44px en mobile */}
        <div
          role="group"
          aria-label="Seleccionar consola"
          className="flex items-center rounded-lg border border-white/20 bg-black/85 p-0.5 backdrop-blur-md shadow-lg pointer-events-auto"
        >
          {CONSOLES.map((consoleItem, index) => {
            const isSelected = activeIdx === index
            return (
              <button
                key={consoleItem.id}
                type="button"
                aria-pressed={isSelected}
                aria-label={`Ver ${consoleItem.name}`}
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  setIndex(index as 0 | 1)
                }}
                className={cn(
                  'flex min-h-[44px] sm:min-h-[28px] items-center justify-center rounded-md px-3 sm:px-2.5 py-1 text-xs sm:text-[11px] font-medium tracking-wide transition-colors duration-150',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B5D448]',
                  isSelected
                    ? 'bg-[#B5D448] text-black font-semibold shadow-sm'
                    : 'text-white/70 hover:text-white hover:bg-white/5 active:bg-white/10'
                )}
              >
                {consoleItem.tabLabel}
              </button>
            )
          })}
        </div>
      </div>

      {/* Flechas de navegación previa y siguiente con hit-target táctil accesible (44px mobile, hover en desktop) */}
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          toggle()
        }}
        aria-label="Ver consola anterior"
        className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-30 flex h-11 w-11 sm:h-8 sm:w-8 items-center justify-center text-white/80 transition-[transform,opacity] duration-[160ms] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B5D448] sm:opacity-0 sm:group-hover/gallery:opacity-100 sm:focus-visible:opacity-100"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-black/75 backdrop-blur-md transition-[background-color,border-color,color] duration-[160ms] hover:border-[#B5D448]/60 hover:bg-black/90 hover:text-white">
          <ChevronLeft size={16} />
        </span>
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          toggle()
        }}
        aria-label="Ver siguiente consola"
        className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-30 flex h-11 w-11 sm:h-8 sm:w-8 items-center justify-center text-white/80 transition-[transform,opacity] duration-[160ms] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B5D448] sm:opacity-0 sm:group-hover/gallery:opacity-100 sm:focus-visible:opacity-100"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-black/75 backdrop-blur-md transition-[background-color,border-color,color] duration-[160ms] hover:border-[#B5D448]/60 hover:bg-black/90 hover:text-white">
          <ChevronRight size={16} />
        </span>
      </button>

      {/* Footer inferior: Etiqueta descriptiva de la consola activa y micro-indicador de 2 posiciones */}
      <div className="absolute bottom-2.5 inset-x-2.5 z-30 flex items-center justify-between gap-2 pointer-events-none">
        <div className="flex items-center truncate rounded-md border border-white/15 bg-black/80 px-2 py-0.5 text-[10px] font-medium text-white/90 backdrop-blur-md shadow-sm pointer-events-auto">
          <span className="truncate">{currentConsole.name}</span>
        </div>

        {/* Micro-dots de 2 posiciones */}
        <div
          className="flex items-center gap-1 rounded-full border border-white/15 bg-black/75 px-1.5 py-1 backdrop-blur-md shadow-sm pointer-events-auto"
          role="tablist"
          aria-label="Selector de consola"
        >
          {CONSOLES.map((c, dotIdx) => {
            const isDotActive = dotIdx === activeIdx
            return (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={isDotActive}
                aria-label={`Ver ${c.name}`}
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  setIndex(dotIdx as 0 | 1)
                }}
                className="relative flex items-center justify-center p-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B5D448] rounded-full active:scale-95"
              >
                <span
                  className={cn(
                    'block h-1.5 rounded-full transition-[width,background-color] duration-200 ease-out',
                    isDotActive
                      ? 'w-4 bg-[#B5D448]'
                      : 'w-1.5 bg-white/40 hover:bg-white/70'
                  )}
                />
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
