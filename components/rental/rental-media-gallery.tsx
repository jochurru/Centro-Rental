'use client'

import React, { useState, useRef, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { CategoryIcon } from '@/components/common/category-icons'
import type { RentalGalleryItem } from '@/data/site'

interface RentalMediaGalleryProps {
  categoryId: string
  iconName?: string
  title: string
  items: RentalGalleryItem[]
}

export function RentalMediaGallery({
  categoryId,
  iconName,
  title,
  items,
}: RentalMediaGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const touchStartRef = useRef<{ x: number; y: number } | null>(null)

  const count = items.length

  const goTo = useCallback(
    (nextIdx: number) => {
      if (isTransitioning || nextIdx === currentIndex) return
      setIsTransitioning(true)
      const targetIndex = (nextIdx + count) % count
      setCurrentIndex(targetIndex)
      const timer = setTimeout(() => setIsTransitioning(false), 260)
      return () => clearTimeout(timer)
    },
    [count, currentIndex, isTransitioning]
  )

  const handlePrev = useCallback(
    (e?: React.MouseEvent) => {
      e?.preventDefault()
      e?.stopPropagation()
      goTo(currentIndex - 1)
    },
    [currentIndex, goTo]
  )

  const handleNext = useCallback(
    (e?: React.MouseEvent) => {
      e?.preventDefault()
      e?.stopPropagation()
      goTo(currentIndex + 1)
    },
    [currentIndex, goTo]
  )

  // Keyboard navigation when gallery has focus
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        handlePrev()
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        handleNext()
      }
    },
    [handleNext, handlePrev]
  )

  // Mobile touch gestures with vertical scroll preservation
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

    // Require distinct horizontal swipe (>40px) and greater than vertical displacement
    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY) * 1.3) {
      if (deltaX > 0) {
        handlePrev()
      } else {
        handleNext()
      }
    }
  }

  const currentItem = items[currentIndex] || items[0]

  return (
    <div
      ref={containerRef}
      role="region"
      aria-roledescription="carrusel"
      aria-label={`Galería de fotos de ${title}`}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="group/gallery relative mb-5 h-48 w-full select-none overflow-hidden rounded-xl border border-white/10 bg-black/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B5D448]"
    >
      {/* Slides de imágenes con transiciones y soporte estricto de prefers-reduced-motion */}
      {items.map((item, index) => {
        const isActive = index === currentIndex
        return (
          <div
            key={item.src}
            aria-hidden={!isActive}
            className={cn(
              'absolute inset-0 transition-[opacity,transform] duration-[260ms] ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none',
              isActive
                ? 'z-10 opacity-100 scale-100 motion-reduce:opacity-100 motion-reduce:transform-none'
                : 'z-0 opacity-0 scale-[1.02] pointer-events-none motion-reduce:scale-100 motion-reduce:transform-none'
            )}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 ease-out group-hover/gallery:scale-[1.03] motion-reduce:transition-none motion-reduce:transform-none motion-reduce:group-hover/gallery:scale-100"
            />
          </div>
        )
      })}

      {/* Gradientes sutiles superior e inferior para legibilidad de badges */}
      <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-black/75 via-black/30 to-transparent pointer-events-none z-20" />
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none z-20" />

      {/* Header superior: Contador de fotos y etiqueta de categoría */}
      <div className="absolute top-2.5 inset-x-2.5 z-30 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-1.5 pointer-events-auto">
          <div className="flex h-6 w-6 items-center justify-center rounded-md border border-white/15 bg-black/70 text-zinc-300 backdrop-blur-md">
            <CategoryIcon categoryId={categoryId} iconName={iconName} className="h-3.5 w-3.5" />
          </div>
        </div>

        {/* Contador micro-pill: 1 / N */}
        <div className="flex items-center gap-1 rounded-md border border-white/20 bg-black/75 px-2 py-0.5 text-[10px] font-mono font-medium text-white/90 backdrop-blur-md shadow-md pointer-events-auto">
          <span>{currentIndex + 1}</span>
          <span className="text-white/40">/</span>
          <span className="text-white/60">{count}</span>
        </div>
      </div>

      {/* Flechas de navegación previa y siguiente con hit-target táctil accesible (mínimo 44px en mobile) */}
      {count > 1 && (
        <>
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Ver imagen anterior"
            className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-30 flex h-11 w-11 sm:h-8 sm:w-8 items-center justify-center text-white/80 transition-[transform,opacity] duration-[160ms] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B5D448] sm:opacity-0 sm:group-hover/gallery:opacity-100 sm:focus-visible:opacity-100"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-black/75 backdrop-blur-md transition-[background-color,border-color,color] duration-[160ms] hover:border-[#B5D448]/60 hover:bg-black/90 hover:text-white">
              <ChevronLeft size={16} />
            </span>
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Ver siguiente imagen"
            className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-30 flex h-11 w-11 sm:h-8 sm:w-8 items-center justify-center text-white/80 transition-[transform,opacity] duration-[160ms] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B5D448] sm:opacity-0 sm:group-hover/gallery:opacity-100 sm:focus-visible:opacity-100"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-black/75 backdrop-blur-md transition-[background-color,border-color,color] duration-[160ms] hover:border-[#B5D448]/60 hover:bg-black/90 hover:text-white">
              <ChevronRight size={16} />
            </span>
          </button>
        </>
      )}

      {/* Footer inferior: Etiqueta descriptiva y micro-indicadores */}
      <div className="absolute bottom-2.5 inset-x-2.5 z-30 flex items-center justify-between gap-2">
        {/* Label verificada de la foto actual */}
        {currentItem?.label ? (
          <div className="flex items-center truncate rounded-md border border-white/15 bg-black/80 px-2 py-0.5 text-[10px] font-medium text-white/90 backdrop-blur-md shadow-sm">
            <span className="truncate">{currentItem.label}</span>
          </div>
        ) : (
          <div />
        )}

        {/* Micro-dots de navegación directa con hit-area táctil accesible de 44x44px en mobile */}
        {count > 1 && (
          <div
            className="flex items-center gap-0.5 rounded-full border border-white/15 bg-black/75 px-1 py-0.5 backdrop-blur-md shadow-sm"
            role="tablist"
            aria-label="Indicadores de fotos"
          >
            {items.map((_, dotIdx) => {
              const isDotActive = dotIdx === currentIndex
              return (
                <button
                  key={dotIdx}
                  type="button"
                  role="tab"
                  aria-selected={isDotActive}
                  aria-label={`Ir a foto ${dotIdx + 1} de ${count}`}
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    goTo(dotIdx)
                  }}
                  className="relative flex items-center justify-center p-1 sm:p-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B5D448] rounded-full active:scale-95 before:absolute before:content-[''] before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:h-11 before:w-11 sm:before:hidden"
                >
                  <span
                    className={cn(
                      'block h-1.5 rounded-full transition-[width,background-color,transform] duration-[200ms] ease-out',
                      isDotActive
                        ? 'w-4 bg-[#B5D448]'
                        : 'w-1.5 bg-white/40 hover:bg-white/70'
                    )}
                  />
                </button>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
