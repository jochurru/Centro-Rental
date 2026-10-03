import React from 'react'
import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Centro Rental inicio">
      <span className="logo-mark">
        <span />
        <span />
        <span />
      </span>
      <span className="text-[15px] font-semibold tracking-[-0.03em] text-white">
        CENTRO<span className="text-white/40">.</span>RENTAL
      </span>
    </Link>
  )
}
