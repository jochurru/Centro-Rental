'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Logo } from '@/components/common/logo'
import { GlowButton } from '@/components/common/glow-button'
import { primaryNavItems, moreNavItems, navItems } from '@/data/site'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pathname = usePathname()

  function openMoreMenu() {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setMoreOpen(true)
  }

  function scheduleCloseMoreMenu() {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
    }

    closeTimeoutRef.current = setTimeout(() => {
      setMoreOpen(false)
    }, 180)
  }

  // Cleanup del timeout al desmontar
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current)
      }
    }
  }, [])

  // Sincronizar estado de scroll para header dinámico
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Cerrar dropdown al presionar tecla Escape
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape' && moreOpen) {
        if (closeTimeoutRef.current) {
          clearTimeout(closeTimeoutRef.current)
          closeTimeoutRef.current = null
        }
        setMoreOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [moreOpen])

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        if (closeTimeoutRef.current) {
          clearTimeout(closeTimeoutRef.current)
          closeTimeoutRef.current = null
        }
        setMoreOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const isMoreActive = moreNavItems.some((item) => pathname.startsWith(item.href))

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-200 ease-out motion-reduce:transition-none ${
        isScrolled
          ? 'border-b border-white/10 bg-[#09090b]/92 backdrop-blur-md'
          : 'border-b border-white/[0.06] bg-[#09090b]/70 backdrop-blur-xl'
      }`}
    >
      <div className="mx-auto flex h-[68px] sm:h-[80px] lg:h-[92px] max-w-[1320px] items-center justify-between px-4 sm:px-5 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-6 xl:gap-7 lg:flex">
          {primaryNavItems.map((item) => {
            const isActive =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href)

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative py-1 text-[12px] transition-colors ${
                  isActive
                    ? 'font-medium text-white'
                    : 'text-white/55 hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 h-[2px] w-4 -translate-x-1/2 rounded-full bg-[#B5D448] shadow-[0_0_8px_rgba(181,212,72,0.6)]" />
                )}
              </Link>
            )
          })}

          {/* Menú desplegable "Más" para páginas secundarias */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={openMoreMenu}
            onMouseLeave={scheduleCloseMoreMenu}
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                if (closeTimeoutRef.current) {
                  clearTimeout(closeTimeoutRef.current)
                  closeTimeoutRef.current = null
                }
                setMoreOpen(false)
              }
            }}
          >
            <button
              type="button"
              onClick={() => {
                if (closeTimeoutRef.current) {
                  clearTimeout(closeTimeoutRef.current)
                  closeTimeoutRef.current = null
                }
                setMoreOpen((prev) => !prev)
              }}
              aria-expanded={moreOpen}
              aria-haspopup="menu"
              className={`relative flex items-center gap-1 py-1 text-[12px] transition-colors ${
                isMoreActive
                  ? 'font-medium text-white'
                  : 'text-white/55 hover:text-white'
              }`}
            >
              <span>Más</span>
              <ChevronDown
                size={12}
                className={`transition-transform duration-200 ${
                  moreOpen ? 'rotate-180 text-white' : 'text-white/50'
                }`}
              />
              {isMoreActive && (
                <span className="absolute -bottom-1 left-1/2 h-[2px] w-4 -translate-x-1/2 rounded-full bg-[#B5D448] shadow-[0_0_8px_rgba(181,212,72,0.6)]" />
              )}
            </button>

            {moreOpen && (
              <div
                className="absolute right-0 top-full pt-2 z-50 animate-menu-dropdown"
                onMouseEnter={openMoreMenu}
                onMouseLeave={scheduleCloseMoreMenu}
              >
                <div
                  role="menu"
                  className="w-44 rounded-xl border border-white/10 bg-[#09090b]/95 p-1.5 shadow-2xl backdrop-blur-xl"
                >
                  {moreNavItems.map((subItem) => {
                    const isSubActive = pathname.startsWith(subItem.href)
                    return (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        role="menuitem"
                        onClick={() => {
                          if (closeTimeoutRef.current) {
                            clearTimeout(closeTimeoutRef.current)
                            closeTimeoutRef.current = null
                          }
                          setMoreOpen(false)
                        }}
                        className={`flex items-center justify-between rounded-lg px-3 py-2 text-[12px] transition-colors ${
                          isSubActive
                            ? 'bg-white/[0.08] font-medium text-white'
                            : 'text-white/70 hover:bg-white/[0.04] hover:text-white'
                        }`}
                      >
                        <span>{subItem.label}</span>
                        {isSubActive && (
                          <span className="h-1.5 w-1.5 rounded-full bg-[#B5D448] shadow-[0_0_6px_#B5D448]" />
                        )}
                      </Link>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        </nav>

        <div className="hidden lg:block">
          <GlowButton href="/contacto" className="px-5 py-2.5 text-[12px]">
            Solicitar presupuesto
          </GlowButton>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-lg text-white transition-[background-color,transform] duration-150 hover:bg-white/5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B5D448] lg:hidden motion-reduce:active:scale-100"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="animate-mobile-menu max-h-[calc(100dvh-64px)] overflow-y-auto border-t border-white/[0.06] bg-[#09090b] px-4 sm:px-5 pb-6 pt-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.href)

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex min-h-[44px] items-center justify-between rounded-lg px-3 py-2.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B5D448] ${
                    isActive
                      ? 'bg-white/[0.08] font-medium text-white border-l-2 border-[#B5D448]'
                      : 'text-white/70 hover:bg-white/[0.03] hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#B5D448] shadow-[0_0_6px_#B5D448]" />
                  )}
                </Link>
              )
            })}
          </div>
          <div className="mt-5 border-t border-white/[0.06] pt-3">
            <GlowButton
              href="/contacto"
              className="w-full"
              onClick={() => setMobileOpen(false)}
            >
              Solicitar presupuesto
            </GlowButton>
          </div>
        </nav>
      )}
    </header>
  )
}
