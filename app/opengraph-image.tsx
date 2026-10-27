import { ImageResponse } from 'next/og'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

export const alt = 'Centro Rental — Producción técnica para eventos'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function OpenGraphImage() {
  // Cargar el logotipo oficial @2x de alta resolución en base64
  const logoBuffer = readFileSync(
    join(process.cwd(), 'public/brand/centro-rental-logo-original@2x.png')
  )
  const logoBase64 = `data:image/png;base64,${logoBuffer.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#09090B',
          position: 'relative',
        }}
      >
        {/* Sutil halo ambiental corporativo (#B5D448) */}
        <div
          style={{
            position: 'absolute',
            width: '640px',
            height: '420px',
            borderRadius: '9999px',
            background:
              'radial-gradient(ellipse at center, rgba(181, 212, 72, 0.08) 0%, rgba(9, 9, 11, 0) 70%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />

        {/* Marco técnico perimetral sutil */}
        <div
          style={{
            position: 'absolute',
            inset: 32,
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: 24,
            display: 'flex',
          }}
        />

        {/* Contenedor principal de marca */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Logotipo oficial de Centro Rental */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoBase64}
            alt="Centro Rental"
            width={645}
            height={82}
            style={{
              marginBottom: 44,
            }}
          />

          {/* Subtítulo institucional con acento corporativo */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 24,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: 4,
                backgroundColor: '#B5D448',
              }}
            />
            <span
              style={{
                fontSize: 26,
                fontWeight: 600,
                color: '#ffffff',
                letterSpacing: '-0.02em',
              }}
            >
              Producción técnica para eventos
            </span>
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: 4,
                backgroundColor: '#B5D448',
              }}
            />
          </div>

          {/* Categorías de servicios (jerarquía menor, sobria) */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              fontSize: 16,
              color: 'rgba(255, 255, 255, 0.55)',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}
          >
            <span>Sonido</span>
            <span style={{ color: 'rgba(255, 255, 255, 0.25)' }}>·</span>
            <span>Iluminación</span>
            <span style={{ color: 'rgba(255, 255, 255, 0.25)' }}>·</span>
            <span>Pantallas</span>
            <span style={{ color: 'rgba(255, 255, 255, 0.25)' }}>·</span>
            <span>Streaming</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
