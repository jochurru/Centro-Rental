'use client'

import React, { useEffect, useRef, useState, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// =============================================================================
// SELECCIÓN OFICIAL DE FOTOGRAFÍAS — DESKTOP (7) Y MOBILE LITE (5)
// =============================================================================
const DESKTOP_PANELS_DATA = [
  {
    id: 'teatro-colon',
    title: 'Teatro Colón · Gala Anual UNICEF',
    src: '/events/teatro-colon-unicef.jpg',
  },
  {
    id: 'versace-sofitel',
    title: 'Versace · Presentación Perfume Eros',
    src: '/events/versace-sofitel.jpg',
  },
  {
    id: 'pantalla-led-congreso',
    title: 'Cumbre Internacional · Pantalla LED Curva',
    src: '/images/rental/pantalla-led-congreso.webp',
  },
  {
    id: 'hero-event',
    title: 'Producción Técnica en Vivo · Concierto Principal',
    src: '/hero-event.webp',
  },
  {
    id: 'hotel-hilton',
    title: 'Hotel Hilton · Gran Salón Pacífico',
    src: '/events/hotel-hilton.jpg',
  },
  {
    id: 'nike-planta-exolog',
    title: 'Nike · Lanzamiento Corporativo Planta Exolog',
    src: '/images/events/nike-planta-exolog.webp',
  },
  {
    id: 'embajada-israel',
    title: 'Gala Institucional · Embajada de Israel',
    src: '/events/embajada-israel.jpg',
  },
]

// Mobile Lite: 5 fotografías de máximo impacto visual sin cargar las 2 restantes
const MOBILE_PANELS_DATA = [
  {
    id: 'teatro-colon',
    title: 'Teatro Colón · Gala Anual UNICEF',
    src: '/events/teatro-colon-unicef.jpg',
  },
  {
    id: 'versace-sofitel',
    title: 'Versace · Presentación Perfume Eros',
    src: '/events/versace-sofitel.jpg',
  },
  {
    id: 'pantalla-led-congreso',
    title: 'Cumbre Internacional · Pantalla LED Curva',
    src: '/images/rental/pantalla-led-congreso.webp',
  },
  {
    id: 'hero-event',
    title: 'Producción Técnica en Vivo · Concierto Principal',
    src: '/hero-event.webp',
  },
  {
    id: 'hotel-hilton',
    title: 'Hotel Hilton · Gran Salón Pacífico',
    src: '/events/hotel-hilton.jpg',
  },
]

// =============================================================================
// PARÁMETROS GEOMÉTRICOS DEL ARCO MODULAR — DESKTOP V4.2 (INTACTO)
// =============================================================================
const DESKTOP_ARC_CONFIG = {
  radius: 22.0, // Radio del cilindro espacial
  eventWidth: 5.6, // Ancho de cuerda de cada evento modular
  panelHeight: 4.6, // Altura monumental de pantalla escénica
  internalSegments: 10, // 10 subdivisiones internas por foto (1.46° entre vértices)
  eventGap: 0.035, // Micro-junta técnica entre eventos distintos
  centerAngle: 0.08, // Ángulo focal óptico (~4.6° en centro-derecha)
  cycleDuration: 14.0, // 14 segundos por cambio de evento
}

// =============================================================================
// PARÁMETROS GEOMÉTRICOS DEL ARCO MODULAR — MOBILE LITE V4.2
// =============================================================================
const MOBILE_ARC_CONFIG = {
  radius: 12.0, // Radio adaptado a vertical: curvatura visible sin efecto túnel
  eventWidth: 3.8, // Escala de panel para mostrar 2-3 eventos en pantalla vertical
  panelHeight: 3.4, // Altura equilibrada para fondo escénico
  internalSegments: 5, // 5 facetas internas por foto (ultra liviano: 25 quads total)
  eventGap: 0.025, // Micro-junta técnica proporcional
  centerAngle: 0.10, // Ángulo focal desplazado hacia el centro-derecha
  cycleDuration: 14.0, // Misma cadencia pesada, lenta y solemne (14 segundos)
}

// =============================================================================
// CREACIÓN DE GEOMETRÍA CURVA CONTINUA INTERNA POR EVENTO
// =============================================================================
function createCurvedEventGeometry(
  width: number,
  height: number,
  segments: number,
  radius: number
) {
  const geom = new THREE.PlaneGeometry(width, height, segments, 1)
  const pos = geom.attributes.position
  const halfAngle = Math.asin(width / (2 * radius))

  for (let i = 0; i < pos.count; i++) {
    const xFlat = pos.getX(i)
    const y = pos.getY(i)
    const uFrac = xFlat / width
    const phi = uFrac * (2 * halfAngle)

    const curvedX = radius * Math.sin(phi)
    const curvedZ = radius * (Math.cos(phi) - 1.0)

    pos.setXYZ(i, curvedX, y, curvedZ)
  }

  pos.needsUpdate = true
  geom.computeVertexNormals()
  return geom
}

// =============================================================================
// PANEL INDIVIDUAL (SHARED MATERIAL & TEXTURE DISPOSAL)
// =============================================================================
interface CurvedEventItemProps {
  index: number
  src: string
  globalOffsetRef: React.MutableRefObject<number>
  eventStep: number
  totalSpan: number
  halfSpan: number
  centerAngle: number
  radius: number
  geometry: THREE.PlaneGeometry
}

function CurvedEventItem({
  index,
  src,
  globalOffsetRef,
  eventStep,
  totalSpan,
  halfSpan,
  centerAngle,
  radius,
  geometry,
}: CurvedEventItemProps) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const [texture, setTexture] = useState<THREE.Texture | null>(null)

  useEffect(() => {
    let active = true
    const loader = new THREE.TextureLoader()
    loader.load(src, (tex) => {
      if (!active) {
        tex.dispose()
        return
      }
      tex.colorSpace = THREE.SRGBColorSpace
      tex.wrapS = THREE.ClampToEdgeWrapping
      tex.wrapT = THREE.ClampToEdgeWrapping
      tex.minFilter = THREE.LinearMipmapLinearFilter
      tex.magFilter = THREE.LinearFilter
      tex.generateMipmaps = true
      tex.needsUpdate = true
      setTexture(tex)
    })
    return () => {
      active = false
    }
  }, [src])

  useEffect(() => {
    return () => {
      if (texture) texture.dispose()
    }
  }, [texture])

  const material = useMemo(() => {
    if (!texture) return null
    return new THREE.MeshBasicMaterial({
      map: texture,
      toneMapped: false,
      side: THREE.DoubleSide,
    })
  }, [texture])

  useEffect(() => {
    return () => {
      if (material) material.dispose()
    }
  }, [material])

  useFrame(() => {
    if (typeof document !== 'undefined' && document.visibilityState !== 'visible') {
      return
    }
    if (!meshRef.current) return

    const offset = globalOffsetRef.current
    const baseAngle = index * eventStep - offset

    const minAngle = centerAngle - halfSpan
    const eventAngle =
      (((baseAngle - minAngle) % totalSpan + totalSpan) % totalSpan) + minAngle

    const x = Math.sin(eventAngle) * radius
    const z = Math.cos(eventAngle) * radius - radius

    meshRef.current.position.set(x, 0, z)
    meshRef.current.rotation.y = eventAngle
  })

  if (!material) return null

  return <mesh ref={meshRef} geometry={geometry} material={material} />
}

// =============================================================================
// ESCENA DESKTOP (7 FOTOGRAFÍAS, R=22, 10 SEGMENTOS) — 100% INTACTA
// =============================================================================
interface SceneProps {
  reducedMotion: boolean
  isVisibleRef: React.MutableRefObject<boolean>
}

function DesktopCurvedPanelsScene({ reducedMotion, isVisibleRef }: SceneProps) {
  const N = DESKTOP_PANELS_DATA.length
  const config = DESKTOP_ARC_CONFIG

  const eventAngle = 2 * Math.asin(config.eventWidth / (2 * config.radius))
  const eventGapAngle = config.eventGap / config.radius
  const eventStep = eventAngle + eventGapAngle
  const totalSpan = N * eventStep
  const halfSpan = totalSpan / 2
  const angularSpeed = eventStep / config.cycleDuration

  const globalOffsetRef = useRef(0)

  const sharedGeometry = useMemo(
    () =>
      createCurvedEventGeometry(
        config.eventWidth,
        config.panelHeight,
        config.internalSegments,
        config.radius
      ),
    [config]
  )

  useEffect(() => {
    return () => {
      sharedGeometry.dispose()
    }
  }, [sharedGeometry])

  useFrame((_, delta) => {
    if (typeof document !== 'undefined' && document.visibilityState !== 'visible') {
      return
    }
    if (!reducedMotion && isVisibleRef.current) {
      globalOffsetRef.current =
        (globalOffsetRef.current + angularSpeed * delta) % totalSpan
    }
  })

  return (
    <group>
      {DESKTOP_PANELS_DATA.map((panel, idx) => (
        <CurvedEventItem
          key={panel.id}
          index={idx}
          src={panel.src}
          globalOffsetRef={globalOffsetRef}
          eventStep={eventStep}
          totalSpan={totalSpan}
          halfSpan={halfSpan}
          centerAngle={config.centerAngle}
          radius={config.radius}
          geometry={sharedGeometry}
        />
      ))}
    </group>
  )
}

// =============================================================================
// ESCENA MOBILE LITE (5 FOTOGRAFÍAS, R=12, 5 SEGMENTOS, CARGA LIVIANA)
// =============================================================================
function MobileCurvedPanelsScene({ reducedMotion, isVisibleRef }: SceneProps) {
  const N = MOBILE_PANELS_DATA.length
  const config = MOBILE_ARC_CONFIG

  const eventAngle = 2 * Math.asin(config.eventWidth / (2 * config.radius))
  const eventGapAngle = config.eventGap / config.radius
  const eventStep = eventAngle + eventGapAngle
  const totalSpan = N * eventStep
  const halfSpan = totalSpan / 2
  const angularSpeed = eventStep / config.cycleDuration

  const globalOffsetRef = useRef(0)

  const sharedGeometry = useMemo(
    () =>
      createCurvedEventGeometry(
        config.eventWidth,
        config.panelHeight,
        config.internalSegments,
        config.radius
      ),
    [config]
  )

  useEffect(() => {
    return () => {
      sharedGeometry.dispose()
    }
  }, [sharedGeometry])

  useFrame((_, delta) => {
    if (typeof document !== 'undefined' && document.visibilityState !== 'visible') {
      return
    }
    if (!reducedMotion && isVisibleRef.current) {
      globalOffsetRef.current =
        (globalOffsetRef.current + angularSpeed * delta) % totalSpan
    }
  })

  return (
    <group>
      {MOBILE_PANELS_DATA.map((panel, idx) => (
        <CurvedEventItem
          key={panel.id}
          index={idx}
          src={panel.src}
          globalOffsetRef={globalOffsetRef}
          eventStep={eventStep}
          totalSpan={totalSpan}
          halfSpan={halfSpan}
          centerAngle={config.centerAngle}
          radius={config.radius}
          geometry={sharedGeometry}
        />
      ))}
    </group>
  )
}

// =============================================================================
// FALLBACK ELEGANTE EN CSS (SOLO ANTE FALLA REAL DE WEBGL)
// =============================================================================
function LocalHeroFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#09090B]">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: `url('/images/rental/pantalla-led-congreso.webp')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#09090B] via-[#09090B]/80 to-transparent" />
    </div>
  )
}

// Helper para verificar soporte WebGL nativo
function isWebGLSupported(): boolean {
  if (typeof window === 'undefined') return true
  try {
    const canvas = document.createElement('canvas')
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    )
  } catch {
    return false
  }
}

// =============================================================================
// COMPONENTE PRINCIPAL R3F CANVAS CLIENT-SIDE
// =============================================================================
export function HeroCurvedPanels() {
  const [reducedMotion, setReducedMotion] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [webGLAvailable, setWebGLAvailable] = useState(true)
  const isVisibleRef = useRef(true)

  useEffect(() => {
    // 1. Detección de soporte WebGL
    if (!isWebGLSupported()) {
      setWebGLAvailable(false)
      return
    }

    // 2. Detección de Reduced Motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mediaQuery.matches)

    const handleMotionChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleMotionChange)

    // 3. Detección de viewport móvil reactiva vía matchMedia y resize
    const mobileQuery = window.matchMedia('(max-width: 639px)')
    setIsMobile(mobileQuery.matches)
    const handleMobileChange = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mobileQuery.addEventListener('change', handleMobileChange)

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640 || mobileQuery.matches)
    }
    window.addEventListener('resize', checkMobile, { passive: true })
    window.addEventListener('orientationchange', checkMobile, { passive: true })

    // 4. Pausar animación cuando la pestaña o app no está visible (Page Visibility API)
    const handleVisibility = () => {
      isVisibleRef.current = document.visibilityState === 'visible'
    }
    document.addEventListener('visibilitychange', handleVisibility)

    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange)
      mobileQuery.removeEventListener('change', handleMobileChange)
      window.removeEventListener('resize', checkMobile)
      window.removeEventListener('orientationchange', checkMobile)
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [])

  // Si el hardware no soporta WebGL o falla el contexto, usar fallback CSS
  if (!webGLAvailable) {
    return <LocalHeroFallback />
  }

  // ===========================================================================
  // RENDERIZADO CONDICIONAL: MOBILE LITE (< 640px) vs DESKTOP/TABLET (>= 640px)
  // ===========================================================================
  if (isMobile) {
    return (
      <div className="relative w-full h-full">
        <Canvas
          camera={{
            // CÁMARA MOBILE VERTICAL:
            // Posición optimizada para 390-430px de ancho y relación ~9:19.5
            position: [-1.4, 0.35, 8.8],
            fov: 48,
          }}
          dpr={1} // Pixel Ratio FIJO en 1: mínimo consumo de memoria y fill-rate en mobile
          gl={{
            antialias: false, // Máximo rendimiento y menor uso de memoria de textura
            powerPreference: 'high-performance',
            alpha: true,
          }}
          onCreated={({ camera, gl, scene }) => {
            camera.lookAt(0.9, 0.0, -0.3)
            camera.updateMatrixWorld()
            if (typeof window !== 'undefined') {
              ;(window as any).__THREE_HERO__ = {
                gl,
                scene,
                camera,
                mode: 'mobile-lite',
                getInfo: () => ({
                  calls: gl.info.render.calls,
                  triangles: gl.info.render.triangles,
                  geometries: gl.info.memory.geometries,
                  textures: gl.info.memory.textures,
                }),
              }
            }
            gl.domElement.addEventListener('webglcontextlost', (e) => {
              e.preventDefault()
              setWebGLAvailable(false)
            })
          }}
          style={{ width: '100%', height: '100%' }}
        >
          <MobileCurvedPanelsScene
            reducedMotion={reducedMotion}
            isVisibleRef={isVisibleRef}
          />
        </Canvas>
      </div>
    )
  }

  // DESKTOP/TABLET (>= 640px): Escena monumental completa de 7 eventos (100% INTACTA)
  return (
    <div className="relative w-full h-full">
      <Canvas
        camera={{
          position: [-2.2, 0.05, 9.2],
          fov: 40,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          powerPreference: 'high-performance',
          alpha: true,
        }}
        onCreated={({ camera, gl, scene }) => {
          camera.lookAt(1.4, 0.0, -0.4)
          camera.updateMatrixWorld()
          if (typeof window !== 'undefined') {
            ;(window as any).__THREE_HERO__ = {
              gl,
              scene,
              camera,
              mode: 'desktop',
              getInfo: () => ({
                calls: gl.info.render.calls,
                triangles: gl.info.render.triangles,
                geometries: gl.info.memory.geometries,
                textures: gl.info.memory.textures,
              }),
            }
          }
          gl.domElement.addEventListener('webglcontextlost', (e) => {
            e.preventDefault()
            setWebGLAvailable(false)
          })
        }}
        style={{ width: '100%', height: '100%' }}
      >
        <DesktopCurvedPanelsScene
          reducedMotion={reducedMotion}
          isVisibleRef={isVisibleRef}
        />
      </Canvas>
    </div>
  )
}
