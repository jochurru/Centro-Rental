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
  // Cargar el logotipo oficial 3D oscuro aprobado en base64
  const logoBuffer = readFileSync(
    join(process.cwd(), 'public/brand/centro-rental-logo-dark-3d.png')
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
          backgroundColor: '#000000',
          position: 'relative',
        }}
      >
        {/* Marco perimetral sutil sobrio y técnico */}
        <div
          style={{
            position: 'absolute',
            inset: 28,
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: 20,
            display: 'flex',
          }}
        />

        {/* Acento lumínico en la base inferior del card */}
        <div
          style={{
            position: 'absolute',
            bottom: 28,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '400px',
            height: '2px',
            background:
              'linear-gradient(90deg, rgba(181, 212, 72, 0) 0%, rgba(181, 212, 72, 0.6) 50%, rgba(181, 212, 72, 0) 100%)',
            display: 'flex',
          }}
        />

        {/* Contenedor central de marca */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Logotipo oficial 3D oscuro de Centro Rental — fusión óptica 100% pura con #000000 */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoBase64}
            alt="Centro Rental"
            width={436}
            height={225}
            style={{
              marginBottom: 34,
            }}
          />

          {/* Subtítulo institucional con acento corporativo */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              marginBottom: 18,
            }}
          >
            <div
              style={{
                width: 7,
                height: 7,
                borderRadius: 4,
                backgroundColor: '#B5D448',
              }}
            />
            <span
              style={{
                fontSize: 27,
                fontWeight: 600,
                color: '#ffffff',
                letterSpacing: '-0.02em',
              }}
            >
              Tecnología y Producción para Eventos
            </span>
            <div
              style={{
                width: 7,
                height: 7,
                borderRadius: 4,
                backgroundColor: '#B5D448',
              }}
            />
          </div>

          {/* Categorías de servicios técnicos */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              fontSize: 14,
              color: 'rgba(255, 255, 255, 0.50)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            <span>Sonido</span>
            <span style={{ color: 'rgba(255, 255, 255, 0.22)' }}>·</span>
            <span>Iluminación</span>
            <span style={{ color: 'rgba(255, 255, 255, 0.22)' }}>·</span>
            <span>Pantallas LED</span>
            <span style={{ color: 'rgba(255, 255, 255, 0.22)' }}>·</span>
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
