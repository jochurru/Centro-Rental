import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { siteConfig } from '@/data/site'

interface GlowButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'outline'
  className?: string
  onClick?: () => void
  target?: string
  rel?: string
}

export function GlowButton({
  children,
  href = siteConfig.whatsappUrl,
  variant = 'primary',
  className = '',
  onClick,
  target,
  rel,
}: GlowButtonProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      target={target}
      rel={rel}
      className={`glow-button group ${variant === 'outline' ? 'glow-button-outline' : ''} ${className}`}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
        <ArrowUpRight
          size={16}
          strokeWidth={1.8}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </span>
    </a>
  )
}
