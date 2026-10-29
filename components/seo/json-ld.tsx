import React from 'react'

interface JsonLdProps {
  data: Record<string, unknown>
}

/**
 * Componente Server-Side para inyectar datos estructurados JSON-LD.
 * Serializa de forma segura evitando inyecciones de `<` mediante escape unicode `\u003c`.
 */
export function JsonLd({ data }: JsonLdProps) {
  const jsonString = JSON.stringify(data).replace(/</g, '\\u003c')

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonString }}
    />
  )
}
