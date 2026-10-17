import React from 'react'

/**
 * Familia de íconos técnicos audiovisuales para Centro Rental.
 * 
 * Reglas de diseño:
 * - Geometría técnica y proporcional sobre canvas de 24x24 (viewBox="0 0 24 24").
 * - Trazo base consistente (1.75px / 1.5px).
 * - Base neutra en texto claro (currentColor / text-zinc-100).
 * - Acentos funcionales en Verde Centro Rental (#B5D448).
 * - Cero look cartoon, emoji o SaaS genérico.
 */

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string
}

/**
 * Sonido profesional: Line array / stack de PA suspendido con bumper superior y conos de compresión.
 */
export function LineArrayIcon({ className = 'h-6 w-6', ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Bumper y rigging bar de cuelgue */}
      <path d="M4 3h16M12 1v2" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" />
      {/* Cajas acústicas anguladas */}
      <path d="M4 6h16l-1 3.5H5L4 6z" stroke="currentColor" strokeWidth={1.75} strokeLinejoin="round" />
      <path d="M5.2 10.5h13.6l-1.2 3.5H6.4l-1.2-3.5z" stroke="currentColor" strokeWidth={1.75} strokeLinejoin="round" />
      <path d="M6.6 15h10.8l-1.4 3.5H8l-1.4-3.5z" stroke="currentColor" strokeWidth={1.75} strokeLinejoin="round" />
      {/* Guías de onda / drivers acústicos (acento funcional) */}
      <circle cx="12" cy="7.7" r="1" fill="#B5D448" />
      <circle cx="12" cy="12.2" r="1" fill="#B5D448" />
      <circle cx="12" cy="16.7" r="1" fill="#B5D448" />
    </svg>
  )
}

/**
 * Iluminación escénica: Cabezal móvil (moving head beam/spot) con horquilla y haz focalizado.
 */
export function MovingHeadIcon({ className = 'h-6 w-6', ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Base y anclaje omega */}
      <path d="M6 21h12M9 21v-2h6v2" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
      {/* Horquilla de giro / yoke */}
      <path d="M7 19v-6a5 5 0 0 1 10 0v6" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
      {/* Cuerpo del cabezal */}
      <path d="M9.5 7.5a3.5 3.5 0 1 1 5 0l1 3.5h-7l1-3.5z" stroke="currentColor" strokeWidth={1.75} strokeLinejoin="round" />
      {/* Lente frontal y haz lumínico (acento funcional) */}
      <ellipse cx="12" cy="5.5" rx="2" ry="1.2" stroke="#B5D448" strokeWidth={1.5} />
      <path d="M10 2.5L8.5 1M14 2.5L15.5 1M12 2.5V0.5" stroke="#B5D448" strokeWidth={1.25} strokeLinecap="round" />
    </svg>
  )
}

/**
 * Pantallas LED: Gabinete / panel modular con uniones fast-lock y matriz de píxeles.
 */
export function LedPanelIcon({ className = 'h-6 w-6', ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Chasis estructural del gabinete */}
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth={1.75} />
      <path d="M12 3v18M3 12h18" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
      {/* Módulos de píxeles */}
      <circle cx="7.5" cy="7.5" r="1.25" fill="currentColor" fillOpacity="0.35" />
      <circle cx="16.5" cy="7.5" r="1.25" fill="currentColor" fillOpacity="0.35" />
      <circle cx="7.5" cy="16.5" r="1.25" fill="currentColor" fillOpacity="0.35" />
      <circle cx="16.5" cy="16.5" r="1.25" fill="#B5D448" />
      {/* Trabas mecánicas fast-lock de unión modular */}
      <path d="M2 7h2M2 17h2M20 7h2M20 17h2" stroke="#B5D448" strokeWidth={1.5} strokeLinecap="round" />
    </svg>
  )
}

/**
 * Streaming & Broadcast: Cámara broadcast de estudio con visor, tally lamp y montura.
 */
export function BroadcastCameraIcon({ className = 'h-6 w-6', ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Cuerpo de cámara y parasol óptico */}
      <rect x="3" y="8" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth={1.75} />
      <path d="M15 11l6-3.5v9l-6-3.5v-2z" stroke="currentColor" strokeWidth={1.75} strokeLinejoin="round" />
      {/* Visor de producción y anillo del sensor */}
      <path d="M6 5h6v3H6z" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round" />
      <circle cx="9" cy="12.5" r="2.2" stroke="currentColor" strokeWidth={1.5} />
      {/* Luz Tally activa (on-air indicator) */}
      <circle cx="13" cy="5" r="1" fill="#B5D448" />
      {/* Soporte y plato de trípode */}
      <path d="M7 17v4M11 17v4M5 21h8" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
    </svg>
  )
}

/**
 * Estructuras & Rigging: Tramo de truss triangular de celosía con bulones de acople.
 */
export function TrussIcon({ className = 'h-6 w-6', ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Cordones longitudinales de aluminio */}
      <line x1="2" y1="6" x2="22" y2="6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
      <line x1="2" y1="18" x2="22" y2="18" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
      {/* Diagonales de arriostramiento / celosía triangular */}
      <path d="M3 6l4 12 4-12 4 12 4-12 3 9" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round" strokeLinecap="round" />
      {/* Pernos y pasadores de unión (spigots homologados) */}
      <circle cx="7" cy="18" r="1" fill="#B5D448" />
      <circle cx="15" cy="18" r="1" fill="#B5D448" />
      <circle cx="11" cy="6" r="1" fill="#B5D448" />
    </svg>
  )
}

/**
 * Traducción simultánea: Receptor bodypack RF con display LCD y auricular monoaural.
 */
export function TranslationDeviceIcon({ className = 'h-6 w-6', ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Bodypack receptor de petaca y antena RF */}
      <rect x="3" y="7" width="10" height="14" rx="2" stroke="currentColor" strokeWidth={1.75} />
      <line x1="6" y1="7" x2="6" y2="2" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" />
      {/* Display LCD de canal */}
      <rect x="5.5" y="10" width="5" height="3" rx="0.5" stroke="#B5D448" strokeWidth={1.25} fill="#B5D448" fillOpacity="0.15" />
      <circle cx="8" cy="16.5" r="1.5" stroke="currentColor" strokeWidth={1.5} />
      {/* Cable y transductor de conferencia */}
      <path d="M10 7c2-3 5-3 6-1v6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
      <rect x="15" y="11" width="4" height="6" rx="2" stroke="currentColor" strokeWidth={1.75} fill="currentColor" fillOpacity="0.2" />
      <path d="M19 12a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2" stroke="#B5D448" strokeWidth={1.5} strokeLinecap="round" />
    </svg>
  )
}

/**
 * Producción técnica integral: Consola digital FOH con faders motorizados y pantalla táctil.
 */
export function FohConsoleIcon({ className = 'h-6 w-6', ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Chasis de superficie de mezcla */}
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth={1.75} />
      {/* Banco de faders */}
      <line x1="6" y1="8" x2="6" y2="16" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
      <circle cx="6" cy="11" r="1.5" fill="#B5D448" />
      <line x1="10" y1="8" x2="10" y2="16" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
      <circle cx="10" cy="14" r="1.5" fill="currentColor" />
      {/* Pantalla táctil central de monitoreo / RTA */}
      <rect x="14" y="7" width="6" height="5" rx="1" stroke="currentColor" strokeWidth={1.25} fill="currentColor" fillOpacity="0.15" />
      <path d="M15.5 10l1-1.5 1 2 1.5-1" stroke="#B5D448" strokeWidth={1.25} strokeLinecap="round" strokeLinejoin="round" />
      {/* Encoders rotativos */}
      <circle cx="15.5" cy="15" r="1" stroke="currentColor" strokeWidth={1.25} />
      <circle cx="18.5" cy="15" r="1" stroke="currentColor" strokeWidth={1.25} />
    </svg>
  )
}

/**
 * Helper unificado para obtener el ícono técnico correspondiente según ID de categoría.
 */
export function CategoryIcon({
  categoryId,
  iconName,
  className = 'h-6 w-6',
}: {
  categoryId?: string
  iconName?: string
  className?: string
}) {
  switch (categoryId) {
    case 'sonido':
      return <LineArrayIcon className={className} />
    case 'iluminacion':
      return <MovingHeadIcon className={className} />
    case 'pantallas-led':
      return <LedPanelIcon className={className} />
    case 'streaming-broadcast':
      return <BroadcastCameraIcon className={className} />
    case 'estructuras-rigging':
      return <TrussIcon className={className} />
    case 'traduccion-simultanea':
      return <TranslationDeviceIcon className={className} />
    case 'produccion-tecnica':
      return <FohConsoleIcon className={className} />
  }

  // Fallback por iconName histórico
  switch (iconName) {
    case 'Volume2':
      return <LineArrayIcon className={className} />
    case 'Lightbulb':
      return <MovingHeadIcon className={className} />
    case 'Tv':
      return <LedPanelIcon className={className} />
    case 'Radio':
      return <BroadcastCameraIcon className={className} />
    case 'Layers':
      return <TrussIcon className={className} />
    case 'Headphones':
      return <TranslationDeviceIcon className={className} />
    case 'Settings':
    default:
      return <FohConsoleIcon className={className} />
  }
}
