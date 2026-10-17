import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { siteConfig } from '@/data/site'

interface GlowButtonProps {
  children: React.ReactNode
  href?: string
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'outline'
  className?: string
  onClick?: () => void
  target?: string
  rel?: string
  showArrow?: boolean
  disabled?: boolean
}

export function GlowButton({
  children,
  href,
  type,
  variant = 'primary',
  className = '',
  onClick,
  target,
  rel,
  showArrow = true,
  disabled = false,
}: GlowButtonProps) {
  const baseClasses = `glow-button group ${variant === 'outline' ? 'glow-button-outline' : ''} ${className}`
  const content = (
    <span className="relative z-10 flex items-center justify-center gap-2">
      {children}
      {showArrow && (
        <ArrowUpRight
          size={16}
          strokeWidth={1.8}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </span>
  )

  if (type) {
    return (
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={baseClasses}
      >
        {content}
      </button>
    )
  }

  return (
    <a
      href={href ?? siteConfig.whatsappUrl}
      onClick={onClick}
      target={target}
      rel={rel}
      className={baseClasses}
    >
      {content}
    </a>
  )
}

