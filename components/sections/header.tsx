'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Logo } from '@/components/common/logo'
import { GlowButton } from '@/components/common/glow-button'
import { navItems } from '@/data/site'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.06] bg-[#09090b]/70 backdrop-blur-xl">
      <div className="mx-auto flex h-[74px] max-w-[1320px] items-center justify-between px-5 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => {
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
                  <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-violet-400 shadow-[0_0_8px_#a78bfa]" />
                )}
              </Link>
            )
          })}
        </nav>
        <div className="hidden lg:block">
          <GlowButton href="/contacto" className="px-5 py-2.5 text-[12px]">
            Solicitar presupuesto
          </GlowButton>
        </div>
        <button
          className="text-white lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-white/[0.06] bg-[#09090b] px-5 pb-6 pt-4 lg:hidden">
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
                  className={`flex items-center justify-between rounded-lg px-3 py-3 text-sm transition-colors ${
                    isActive
                      ? 'bg-white/[0.08] font-medium text-white'
                      : 'text-white/70 hover:bg-white/[0.03] hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_6px_#a78bfa]" />
                  )}
                </Link>
              )
            })}
          </div>
          <div className="mt-5 pt-3 border-t border-white/[0.06]">
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
