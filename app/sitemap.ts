import type { MetadataRoute } from 'next'

const BASE_URL = 'https://centrorental.com.ar'

/**
 * Sitemap oficial de Centro Rental 2.0.
 * Contiene exclusivamente las 10 rutas públicas canónicas indexables.
 * Sin marcas artificiales de tiempo ni prioridades decorativas ficticias.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/alquiler',
    '/servicios',
    '/instalaciones',
    '/eventos',
    '/venta',
    '/clientes',
    '/nosotros',
    '/contacto',
    '/estudio-tv',
  ]

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
  }))
}
