'use client'

import React, { useEffect, useRef, useState, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// =============================================================================
// SELECCIÓN DE 7 FOTOGRAFÍAS OFICIALES — MÁXIMO IMPACTO VISUAL Y ESCALA
// =============================================================================
const PANELS_DATA = [
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

// =============================================================================
// PARÁMETROS GEOMÉTRICOS DEL ARCO MODULAR (SIN QUIEBRES VISIBLES)
// 7 eventos modulares, cada uno con 10 segmentos internos = 70 facetas suaves
// =============================================================================
const ARC_CONFIG = {
  radius: 22.0, // Radio del cilindro espacial
  eventWidth: 5.6, // Ancho de cuerda de cada evento modular
  panelHeight: 4.6, // Altura monumental de pantalla escénica
  internalSegments: 10, // 10 subdivisiones internas por foto (1.46° entre vértices)
  eventGap: 0.035, // Micro-junta técnica entre eventos distintos (~2-3px en pantalla)
  centerAngle: 0.08, // Ángulo focal óptico (~4.6° en centro-derecha)
  cycleDuration: 14.0, // Un evento atraviesa la zona focal cada 14 segundos
}

// =============================================================================
// CREACIÓN DE GEOMETRÍA CURVA CONTINUA INTERNA POR EVENTO
// Subdivide horizontalmente en 10 facetas unificadas en un único BufferGeometry.
// Elimina quiebres, dobles aristas, seams y gaps dentro de la fotografía.
// =============================================================================
function createCurvedEventGeometry(
  width = 5.6,
  height = 4.6,
  segments = 10,
  radius = 22.0
) {
  const geom = new THREE.PlaneGeometry(width, height, segments, 1)
  const pos = geom.attributes.position
  const halfAngle = Math.asin(width / (2 * radius))

  // Mapeo de cada vértice plano al cilindro cilíndrico exacto en espacio local:
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

  // Carga de textura optimizada con filtrado continuo para evitar seams
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

  // En cada frame: actualización de la posición y rotación del panel sobre el arco global
  useFrame(() => {
    if (!meshRef.current) return

    const offset = globalOffsetRef.current
    const baseAngle = index * eventStep - offset

    // Normalización modular continua en la ventana angular
    const minAngle = centerAngle - halfSpan
    const eventAngle =
      (((baseAngle - minAngle) % totalSpan + totalSpan) % totalSpan) + minAngle

    // Posición cilíndrica global:
    const x = Math.sin(eventAngle) * radius
    const z = Math.cos(eventAngle) * radius - radius

    meshRef.current.position.set(x, 0, z)
    meshRef.current.rotation.y = eventAngle
  })

  if (!material) return null

  return <mesh ref={meshRef} geometry={geometry} material={material} />
}

// =============================================================================
// ESCENA DE PANELES 3D CON ORQUESTACIÓN DE DESPLAZAMIENTO LENTO Y PESADO
// =============================================================================
interface SceneProps {
  reducedMotion: boolean
}

function CurvedPanelsScene({ reducedMotion }: SceneProps) {
  const N = PANELS_DATA.length

  // Cálculo angular analítico sobre el arco cilíndrico de radio R = 22
  const eventAngle = 2 * Math.asin(ARC_CONFIG.eventWidth / (2 * ARC_CONFIG.radius)) // ~14.60°
  const eventGapAngle = ARC_CONFIG.eventGap / ARC_CONFIG.radius // ~0.09°
  const eventStep = eventAngle + eventGapAngle // ~14.69°
  const totalSpan = N * eventStep // ~102.83°
  const halfSpan = totalSpan / 2

  // Velocidad angular pesada: exactamente 1 evento completo cada 14 segundos
  const angularSpeed = eventStep / ARC_CONFIG.cycleDuration

  const globalOffsetRef = useRef(0)

  // Geometría unificada compartida por los 7 eventos (10 segmentos por panel)
  const sharedGeometry = useMemo(
    () =>
      createCurvedEventGeometry(
        ARC_CONFIG.eventWidth,
        ARC_CONFIG.panelHeight,
        ARC_CONFIG.internalSegments,
        ARC_CONFIG.radius
      ),
    []
  )

  useEffect(() => {
    return () => {
      sharedGeometry.dispose()
    }
  }, [sharedGeometry])

  useFrame((_, delta) => {
    if (!reducedMotion) {
      globalOffsetRef.current =
        (globalOffsetRef.current + angularSpeed * delta) % totalSpan
    }
  })

  return (
    <group>
      {PANELS_DATA.map((panel, idx) => (
        <CurvedEventItem
          key={panel.id}
          index={idx}
          src={panel.src}
          globalOffsetRef={globalOffsetRef}
          eventStep={eventStep}
          totalSpan={totalSpan}
          halfSpan={halfSpan}
          centerAngle={ARC_CONFIG.centerAngle}
          radius={ARC_CONFIG.radius}
          geometry={sharedGeometry}
        />
      ))}
    </group>
  )
}

// =============================================================================
// COMPONENTE PRINCIPAL R3F CANVAS CLIENT-SIDE
// =============================================================================
export function HeroCurvedPanels() {
  const [reducedMotion, setReducedMotion] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mediaQuery.matches)

    const handleMotionChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleMotionChange)

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile, { passive: true })

    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  // Mobile (< 640px): Fallback ultraliviano estático en CSS
  if (isMobile) {
    return (
      <div className="absolute inset-0 overflow-hidden bg-[#09090B]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: `url('/images/rental/pantalla-led-congreso.webp')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#09090B] via-[#09090B]/80 to-transparent" />
      </div>
    )
  }

  return (
    <div className="relative w-full h-full">
      <Canvas
        camera={{
          // CÁMARA OBLICUA FUNDAMENTAL:
          // Desplazada a la izquierda (x = -2.2) y mirando hacia el centro-derecha (x = 1.4)
          position: [-2.2, 0.05, 9.2],
          fov: 40,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          powerPreference: 'high-performance',
          alpha: true,
        }}
        onCreated={({ camera }) => {
          camera.lookAt(1.4, 0.0, -0.4)
          camera.updateMatrixWorld()
        }}
        style={{ width: '100%', height: '100%' }}
      >
        <CurvedPanelsScene reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  )
}
