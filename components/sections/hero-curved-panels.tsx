'use client'

import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react'
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

// Mobile Lite V4.3.2: 5 fotografías curadas de máxima nitidez, contraste y legibilidad rápida
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
    id: 'pantalla-led-auditorio',
    title: 'Auditorio Corporativo · Pantalla LED Curva',
    src: '/images/rental/pantalla-led-auditorio.webp',
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
// PARÁMETROS GEOMÉTRICOS DEL ARCO MODULAR — MOBILE V4.3.2 (CURVA SUAVE CONTINUA)
// =============================================================================
const MOBILE_ARC_CONFIG = {
  radius: 12.0, // Radio adaptado a vertical: curvatura visible sin efecto túnel
  eventWidth: 3.8, // Escala de panel para mostrar 2-3 eventos en pantalla vertical
  panelHeight: 3.4, // Altura equilibrada para fondo escénico
  internalSegments: 16, // 16 subdivisiones internas por foto: curva analíticamente suave (1.13° entre vértices, cero facetas)
  eventGap: 0.025, // Micro-junta técnica proporcional
  centerAngle: 0.10, // Ángulo focal desplazado hacia el centro-derecha
  cycleDuration: 14.0, // Misma cadencia pesada, lenta y solemne (14 segundos)
}

// =============================================================================
// PRECOMPUTACIÓN DE CONSTANTES MATEMÁTICAS FUERA DEL RENDER LOOP
// =============================================================================
const DESKTOP_MATH = (() => {
  const N = DESKTOP_PANELS_DATA.length
  const config = DESKTOP_ARC_CONFIG
  const eventAngle = 2 * Math.asin(config.eventWidth / (2 * config.radius))
  const eventGapAngle = config.eventGap / config.radius
  const eventStep = eventAngle + eventGapAngle
  const totalSpan = N * eventStep
  const halfSpan = totalSpan / 2
  const minAngle = config.centerAngle - halfSpan
  const angularSpeed = eventStep / config.cycleDuration
  return { N, config, eventStep, totalSpan, halfSpan, minAngle, angularSpeed }
})()

const MOBILE_MATH = (() => {
  const N = MOBILE_PANELS_DATA.length
  const config = MOBILE_ARC_CONFIG
  const eventAngle = 2 * Math.asin(config.eventWidth / (2 * config.radius))
  const eventGapAngle = config.eventGap / config.radius
  const eventStep = eventAngle + eventGapAngle
  const totalSpan = N * eventStep
  const halfSpan = totalSpan / 2
  const minAngle = config.centerAngle - halfSpan
  const angularSpeed = eventStep / config.cycleDuration
  return { N, config, eventStep, totalSpan, halfSpan, minAngle, angularSpeed }
})()

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
// PANEL INDIVIDUAL DESKTOP (REGISTRO DIRECTO DE MESH SIN USEFRAME HIJO)
// =============================================================================
interface CurvedEventItemProps {
  index: number
  src: string
  geometry: THREE.PlaneGeometry
  onMeshMount: (index: number, mesh: THREE.Mesh | null) => void
}

function CurvedEventItem({
  index,
  src,
  geometry,
  onMeshMount,
}: CurvedEventItemProps) {
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

  if (!material) return null

  return (
    <mesh
      ref={(mesh) => onMeshMount(index, mesh)}
      geometry={geometry}
      material={material}
    />
  )
}

// =============================================================================
// ESCENA DESKTOP OPTIMIZADA: SINGLE USEFRAME COORDINADO A ~30 FPS
// =============================================================================
interface SceneProps {
  reducedMotion: boolean
  isActiveRef: React.MutableRefObject<boolean>
}

function DesktopCurvedPanelsScene({ reducedMotion, isActiveRef }: SceneProps) {
  const { N, config, eventStep, totalSpan, minAngle, angularSpeed } = DESKTOP_MATH
  const radius = config.radius

  const globalOffsetRef = useRef(0)
  const meshRefs = useRef<(THREE.Mesh | null)[]>([])
  const lastRenderTimeRef = useRef(0)
  const lastTimeRef = useRef<number | null>(null)
  const hasRenderedStaticRef = useRef(false)

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

  const onMeshMount = useCallback(
    (index: number, mesh: THREE.Mesh | null) => {
      meshRefs.current[index] = mesh
      if (mesh) {
        const offset = globalOffsetRef.current
        const baseAngle = index * eventStep - offset
        const eventAngle =
          (((baseAngle - minAngle) % totalSpan + totalSpan) % totalSpan) + minAngle
        mesh.position.set(
          Math.sin(eventAngle) * radius,
          0,
          Math.cos(eventAngle) * radius - radius
        )
        mesh.rotation.y = eventAngle
        hasRenderedStaticRef.current = false
      }
    },
    [eventStep, minAngle, totalSpan, radius]
  )

  // Bucle de renderizado único coordinado con Priority 1 (30 FPS controlado)
  useFrame((state) => {
    // 1. Si el Hero está fuera del viewport o la pestaña oculta, detener todo cálculo y render
    if (!isActiveRef.current) {
      lastTimeRef.current = null
      return
    }

    // 2. Modo accesibilidad prefers-reduced-motion: render estático único, cero animación
    if (reducedMotion) {
      if (!hasRenderedStaticRef.current) {
        state.gl.render(state.scene, state.camera)
        hasRenderedStaticRef.current = true
      }
      return
    }

    const now = performance.now()

    // Inicialización suave en el primer frame tras montar o reanudar (evita saltos temporales)
    if (lastTimeRef.current === null) {
      lastTimeRef.current = now
      lastRenderTimeRef.current = now
      state.gl.render(state.scene, state.camera)
      return
    }

    // Throttling preciso a ~30 FPS (~33.33ms entre cuadros, margen de 1.5ms)
    const elapsedSinceRender = now - lastRenderTimeRef.current
    if (elapsedSinceRender < 31.8) {
      return // Omite cuadro sin consumo de CPU/GPU
    }

    // Separación estricta entre cadencia de render y velocidad temporal de rotación
    const elapsedDelta = Math.min((now - lastTimeRef.current) / 1000, 0.1)
    lastTimeRef.current = now
    lastRenderTimeRef.current = now - (elapsedSinceRender % 33.33)

    // Avance angular continuo exactamente al ritmo visual aprobado
    globalOffsetRef.current =
      (globalOffsetRef.current + angularSpeed * elapsedDelta) % totalSpan
    const offset = globalOffsetRef.current

    // Actualización de posición y orientación en un solo for-loop sin asignación de objetos
    const meshes = meshRefs.current
    for (let i = 0; i < N; i++) {
      const mesh = meshes[i]
      if (!mesh) continue

      const baseAngle = i * eventStep - offset
      const eventAngle =
        (((baseAngle - minAngle) % totalSpan + totalSpan) % totalSpan) + minAngle

      mesh.position.set(
        Math.sin(eventAngle) * radius,
        0,
        Math.cos(eventAngle) * radius - radius
      )
      mesh.rotation.y = eventAngle
    }

    // Renderizado único hacia WebGL
    state.gl.render(state.scene, state.camera)
  }, 1)

  return (
    <group>
      {DESKTOP_PANELS_DATA.map((panel, idx) => (
        <CurvedEventItem
          key={panel.id}
          index={idx}
          src={panel.src}
          geometry={sharedGeometry}
          onMeshMount={onMeshMount}
        />
      ))}
    </group>
  )
}

// =============================================================================
// PANEL INDIVIDUAL MOBILE (SHARED MATERIAL & COVER MAPPING)
// =============================================================================
interface MobileCurvedEventItemProps {
  index: number
  src: string
  geometry: THREE.PlaneGeometry
  panelWidth: number
  panelHeight: number
  onMeshMount: (index: number, mesh: THREE.Mesh | null) => void
}

function MobileCurvedEventItem({
  index,
  src,
  geometry,
  panelWidth,
  panelHeight,
  onMeshMount,
}: MobileCurvedEventItemProps) {
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
      tex.anisotropy = 4

      // COVER MAPPING: Preserva proporciones reales 1:1, evita deformación o estiramiento
      const img = tex.image
      if (img && img.width && img.height) {
        const imgAspect = img.width / img.height
        const panelAspect = panelWidth / panelHeight
        if (imgAspect > panelAspect) {
          const scaleU = panelAspect / imgAspect
          tex.repeat.set(scaleU, 1)
          tex.offset.set((1 - scaleU) / 2, 0)
        } else {
          const scaleV = imgAspect / panelAspect
          tex.repeat.set(1, scaleV)
          tex.offset.set(0, (1 - scaleV) / 2)
        }
      }

      tex.needsUpdate = true
      setTexture(tex)
    })
    return () => {
      active = false
    }
  }, [src, panelWidth, panelHeight])

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

  if (!material) return null

  return (
    <mesh
      ref={(mesh) => onMeshMount(index, mesh)}
      geometry={geometry}
      material={material}
    />
  )
}

// =============================================================================
// ESCENA MOBILE OPTIMIZADA: SINGLE USEFRAME COORDINADO A ~30 FPS
// =============================================================================
function MobileCurvedPanelsScene({ reducedMotion, isActiveRef }: SceneProps) {
  const { N, config, eventStep, totalSpan, minAngle, angularSpeed } = MOBILE_MATH
  const radius = config.radius

  const globalOffsetRef = useRef(0)
  const meshRefs = useRef<(THREE.Mesh | null)[]>([])
  const lastRenderTimeRef = useRef(0)
  const lastTimeRef = useRef<number | null>(null)
  const hasRenderedStaticRef = useRef(false)

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

  const onMeshMount = useCallback(
    (index: number, mesh: THREE.Mesh | null) => {
      meshRefs.current[index] = mesh
      if (mesh) {
        const offset = globalOffsetRef.current
        const baseAngle = index * eventStep - offset
        const eventAngle =
          (((baseAngle - minAngle) % totalSpan + totalSpan) % totalSpan) + minAngle
        mesh.position.set(
          Math.sin(eventAngle) * radius,
          0,
          Math.cos(eventAngle) * radius - radius
        )
        mesh.rotation.y = eventAngle
        hasRenderedStaticRef.current = false
      }
    },
    [eventStep, minAngle, totalSpan, radius]
  )

  useFrame((state) => {
    if (!isActiveRef.current) {
      lastTimeRef.current = null
      return
    }

    if (reducedMotion) {
      if (!hasRenderedStaticRef.current) {
        state.gl.render(state.scene, state.camera)
        hasRenderedStaticRef.current = true
      }
      return
    }

    const now = performance.now()

    if (lastTimeRef.current === null) {
      lastTimeRef.current = now
      lastRenderTimeRef.current = now
      state.gl.render(state.scene, state.camera)
      return
    }

    const elapsedSinceRender = now - lastRenderTimeRef.current
    if (elapsedSinceRender < 31.8) {
      return
    }

    const elapsedDelta = Math.min((now - lastTimeRef.current) / 1000, 0.1)
    lastTimeRef.current = now
    lastRenderTimeRef.current = now - (elapsedSinceRender % 33.33)

    globalOffsetRef.current =
      (globalOffsetRef.current + angularSpeed * elapsedDelta) % totalSpan
    const offset = globalOffsetRef.current

    const meshes = meshRefs.current
    for (let i = 0; i < N; i++) {
      const mesh = meshes[i]
      if (!mesh) continue

      const baseAngle = i * eventStep - offset
      const eventAngle =
        (((baseAngle - minAngle) % totalSpan + totalSpan) % totalSpan) + minAngle

      mesh.position.set(
        Math.sin(eventAngle) * radius,
        0,
        Math.cos(eventAngle) * radius - radius
      )
      mesh.rotation.y = eventAngle
    }

    state.gl.render(state.scene, state.camera)
  }, 1)

  return (
    <group scale={1.30} position={[0, 0.12, 0]}>
      {MOBILE_PANELS_DATA.map((panel, idx) => (
        <MobileCurvedEventItem
          key={panel.id}
          index={idx}
          src={panel.src}
          geometry={sharedGeometry}
          panelWidth={config.eventWidth}
          panelHeight={config.panelHeight}
          onMeshMount={onMeshMount}
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
  const containerRef = useRef<HTMLDivElement>(null)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [webGLAvailable, setWebGLAvailable] = useState(true)
  const isActiveRef = useRef(true)

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

    // 4. Control coordinado de actividad: IntersectionObserver (viewport) + Page Visibility API (pestaña)
    let isIntersecting = true
    let isTabVisible = document.visibilityState === 'visible'

    const updateActiveState = () => {
      isActiveRef.current = isIntersecting && isTabVisible
    }

    const handleVisibility = () => {
      isTabVisible = document.visibilityState === 'visible'
      updateActiveState()
    }
    document.addEventListener('visibilitychange', handleVisibility)

    let observer: IntersectionObserver | null = null
    if ('IntersectionObserver' in window && containerRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0]
          isIntersecting = entry ? entry.isIntersecting : true
          updateActiveState()
        },
        {
          root: null,
          rootMargin: '100px 0px 100px 0px', // Pre-activa 100px antes para reanudar sin parpadeos
          threshold: 0,
        }
      )
      observer.observe(containerRef.current)
    }

    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange)
      mobileQuery.removeEventListener('change', handleMobileChange)
      window.removeEventListener('resize', checkMobile)
      window.removeEventListener('orientationchange', checkMobile)
      document.removeEventListener('visibilitychange', handleVisibility)
      if (observer) observer.disconnect()
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
      <div ref={containerRef} className="relative w-full h-full">
        <Canvas
          camera={{
            // CÁMARA MOBILE VERTICAL V4.3.2 (PROTAGONISTA, SUAVE Y NÍTIDA):
            position: [-1.35, 0.10, 7.2],
            fov: 48,
          }}
          dpr={[1, 1.5]} // DPR moderado: 1.5 en pantallas de alta densidad (Retina/OLED)
          gl={{
            antialias: true, // Hardware MSAA: bordes suaves sin escalones ni serrucho
            powerPreference: 'high-performance',
            alpha: true,
          }}
          onCreated={({ camera, gl }) => {
            camera.lookAt(0.85, -0.05, -0.3)
            camera.updateMatrixWorld()
            gl.domElement.addEventListener('webglcontextlost', (e) => {
              e.preventDefault()
              setWebGLAvailable(false)
            })
          }}
          style={{ width: '100%', height: '100%' }}
        >
          <MobileCurvedPanelsScene
            reducedMotion={reducedMotion}
            isActiveRef={isActiveRef}
          />
        </Canvas>
      </div>
    )
  }

  // DESKTOP/TABLET (>= 640px): Escena monumental completa de 7 eventos (100% INTACTA)
  return (
    <div ref={containerRef} className="relative w-full h-full">
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
        onCreated={({ camera, gl }) => {
          camera.lookAt(1.4, 0.0, -0.4)
          camera.updateMatrixWorld()
          gl.domElement.addEventListener('webglcontextlost', (e) => {
            e.preventDefault()
            setWebGLAvailable(false)
          })
        }}
        style={{ width: '100%', height: '100%' }}
      >
        <DesktopCurvedPanelsScene
          reducedMotion={reducedMotion}
          isActiveRef={isActiveRef}
        />
      </Canvas>
    </div>
  )
}
