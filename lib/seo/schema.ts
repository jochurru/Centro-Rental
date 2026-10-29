const BASE_URL = 'https://centrorental.com.ar'

export const ORGANIZATION_ID = `${BASE_URL}/#organization`
export const WEBSITE_ID = `${BASE_URL}/#website`

/**
 * Esquema Global de Organización & LocalBusiness unificado.
 * Sin datos no confirmados (sin horario, coordenadas, CUIT, ni ratings).
 */
export const globalSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'LocalBusiness'],
      '@id': ORGANIZATION_ID,
      name: 'Centro Rental',
      url: BASE_URL,
      logo: `${BASE_URL}/brand/centro-rental-logo-dark-3d.png`,
      image: `${BASE_URL}/opengraph-image`,
      email: 'info@centrorental.com.ar',
      telephone: '+5491144294224',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Av. Belgrano 2450',
        addressLocality: 'Ciudad Autónoma de Buenos Aires',
        addressCountry: 'AR',
      },
      sameAs: [
        'https://www.instagram.com/centrorental',
        'https://www.facebook.com/CentroRental.com.ar',
        'https://listado.mercadolibre.com.ar/_CustId_5954543',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: BASE_URL,
      name: 'Centro Rental',
      publisher: {
        '@id': ORGANIZATION_ID,
      },
      inLanguage: 'es-AR',
    },
  ],
}

/**
 * Helper para crear BreadcrumbList de 2 niveles (Inicio > Subpágina)
 */
export function createBreadcrumb(slug: string, name: string) {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${BASE_URL}${slug}#breadcrumb`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: BASE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name,
        item: `${BASE_URL}${slug}`,
      },
    ],
  }
}

/**
 * Esquemas específicos por página
 */
export const pagesSchema = {
  home: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${BASE_URL}/#webpage`,
        url: BASE_URL,
        name: 'Centro Rental | Producción Técnica para Eventos en Buenos Aires',
        description:
          'Sonido, iluminación, pantallas LED, streaming y producción técnica integral para eventos corporativos y grandes producciones en Buenos Aires.',
        isPartOf: {
          '@id': WEBSITE_ID,
        },
        about: {
          '@id': ORGANIZATION_ID,
        },
        inLanguage: 'es-AR',
      },
    ],
  },
  alquiler: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${BASE_URL}/alquiler#webpage`,
        url: `${BASE_URL}/alquiler`,
        name: 'Alquiler de Equipamiento Audiovisual en Buenos Aires | Centro Rental',
        description:
          'Alquiler de sonido profesional, iluminación, pantallas LED, proyectores, Smart TVs y equipamiento audiovisual para eventos en Buenos Aires.',
        isPartOf: {
          '@id': WEBSITE_ID,
        },
        about: {
          '@id': ORGANIZATION_ID,
        },
        inLanguage: 'es-AR',
        breadcrumb: {
          '@id': `${BASE_URL}/alquiler#breadcrumb`,
        },
      },
      createBreadcrumb('/alquiler', 'Alquiler'),
      {
        '@type': 'Service',
        '@id': `${BASE_URL}/alquiler#service`,
        name: 'Alquiler de equipamiento audiovisual',
        serviceType: 'Alquiler de equipamiento audiovisual para eventos',
        provider: {
          '@id': ORGANIZATION_ID,
        },
        areaServed: 'Buenos Aires',
        url: `${BASE_URL}/alquiler`,
        description:
          'Alquiler de sonido profesional, iluminación, pantallas LED, proyectores, Smart TVs y equipamiento audiovisual para eventos en Buenos Aires.',
      },
    ],
  },
  servicios: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${BASE_URL}/servicios#webpage`,
        url: `${BASE_URL}/servicios`,
        name: 'Producción Técnica para Eventos en Buenos Aires | Centro Rental',
        description:
          'Producción técnica integral para eventos: streaming, operadores, traducción simultánea, conectividad, escenarios y soporte audiovisual profesional.',
        isPartOf: {
          '@id': WEBSITE_ID,
        },
        about: {
          '@id': ORGANIZATION_ID,
        },
        inLanguage: 'es-AR',
        breadcrumb: {
          '@id': `${BASE_URL}/servicios#breadcrumb`,
        },
      },
      createBreadcrumb('/servicios', 'Servicios'),
      {
        '@type': 'Service',
        '@id': `${BASE_URL}/servicios#service`,
        name: 'Producción técnica para eventos',
        serviceType: 'Producción técnica integral para eventos',
        provider: {
          '@id': ORGANIZATION_ID,
        },
        areaServed: 'Buenos Aires',
        url: `${BASE_URL}/servicios`,
        description:
          'Producción técnica integral para eventos: streaming, operadores, traducción simultánea, conectividad, escenarios y soporte audiovisual profesional.',
      },
    ],
  },
  instalaciones: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${BASE_URL}/instalaciones#webpage`,
        url: `${BASE_URL}/instalaciones`,
        name: 'Instalaciones Audiovisuales e Integración en Buenos Aires | Centro Rental',
        description:
          'Diseño e instalación de audio, video, automatización, cámaras, control de acceso y tecnología audiovisual para empresas, auditorios y espacios corporativos.',
        isPartOf: {
          '@id': WEBSITE_ID,
        },
        about: {
          '@id': ORGANIZATION_ID,
        },
        inLanguage: 'es-AR',
        breadcrumb: {
          '@id': `${BASE_URL}/instalaciones#breadcrumb`,
        },
      },
      createBreadcrumb('/instalaciones', 'Instalaciones'),
      {
        '@type': 'Service',
        '@id': `${BASE_URL}/instalaciones#service`,
        name: 'Instalaciones audiovisuales e integración',
        serviceType: 'Integración audiovisual e instalaciones técnicas permanentes',
        provider: {
          '@id': ORGANIZATION_ID,
        },
        areaServed: 'Buenos Aires',
        url: `${BASE_URL}/instalaciones`,
        description:
          'Diseño e instalación de audio, video, automatización, cámaras, control de acceso y tecnología audiovisual para empresas, auditorios y espacios corporativos.',
      },
    ],
  },
  eventos: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['WebPage', 'CollectionPage'],
        '@id': `${BASE_URL}/eventos#webpage`,
        url: `${BASE_URL}/eventos`,
        name: 'Eventos y Producciones Audiovisuales | Centro Rental',
        description:
          'Conocé eventos, congresos, lanzamientos y producciones realizadas por Centro Rental con sonido, iluminación, pantallas y soporte técnico audiovisual.',
        isPartOf: {
          '@id': WEBSITE_ID,
        },
        about: {
          '@id': ORGANIZATION_ID,
        },
        inLanguage: 'es-AR',
        breadcrumb: {
          '@id': `${BASE_URL}/eventos#breadcrumb`,
        },
      },
      createBreadcrumb('/eventos', 'Eventos'),
    ],
  },
  venta: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['WebPage', 'CollectionPage'],
        '@id': `${BASE_URL}/venta#webpage`,
        url: `${BASE_URL}/venta`,
        name: 'Venta de Equipamiento Audiovisual Profesional | Centro Rental',
        description:
          'Equipamiento profesional de audio, iluminación y video en venta. Productos revisados y comercializados mediante la tienda oficial de Centro Rental en Mercado Libre.',
        isPartOf: {
          '@id': WEBSITE_ID,
        },
        about: {
          '@id': ORGANIZATION_ID,
        },
        inLanguage: 'es-AR',
        breadcrumb: {
          '@id': `${BASE_URL}/venta#breadcrumb`,
        },
      },
      createBreadcrumb('/venta', 'Venta'),
    ],
  },
  clientes: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['WebPage', 'CollectionPage'],
        '@id': `${BASE_URL}/clientes#webpage`,
        url: `${BASE_URL}/clientes`,
        name: 'Clientes y Empresas que Confían en Centro Rental',
        description:
          'Empresas, productoras, hoteles e instituciones confían en Centro Rental para eventos, montajes y soluciones técnicas audiovisuales de alta exigencia.',
        isPartOf: {
          '@id': WEBSITE_ID,
        },
        about: {
          '@id': ORGANIZATION_ID,
        },
        inLanguage: 'es-AR',
        breadcrumb: {
          '@id': `${BASE_URL}/clientes#breadcrumb`,
        },
      },
      createBreadcrumb('/clientes', 'Clientes'),
    ],
  },
  nosotros: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['WebPage', 'AboutPage'],
        '@id': `${BASE_URL}/nosotros#webpage`,
        url: `${BASE_URL}/nosotros`,
        name: 'Sobre Centro Rental | Trayectoria Audiovisual en Buenos Aires',
        description:
          'Conocé la trayectoria, metodología y capacidad técnica de Centro Rental en producción de eventos, alquiler audiovisual e instalaciones profesionales.',
        isPartOf: {
          '@id': WEBSITE_ID,
        },
        about: {
          '@id': ORGANIZATION_ID,
        },
        inLanguage: 'es-AR',
        breadcrumb: {
          '@id': `${BASE_URL}/nosotros#breadcrumb`,
        },
      },
      createBreadcrumb('/nosotros', 'Nosotros'),
    ],
  },
  contacto: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['WebPage', 'ContactPage'],
        '@id': `${BASE_URL}/contacto#webpage`,
        url: `${BASE_URL}/contacto`,
        name: 'Contacto y Presupuestos | Centro Rental Buenos Aires',
        description:
          'Contactá a Centro Rental para solicitar presupuesto de sonido, iluminación, pantallas LED, streaming, alquiler audiovisual o producción técnica para eventos.',
        isPartOf: {
          '@id': WEBSITE_ID,
        },
        about: {
          '@id': ORGANIZATION_ID,
        },
        inLanguage: 'es-AR',
        breadcrumb: {
          '@id': `${BASE_URL}/contacto#breadcrumb`,
        },
      },
      createBreadcrumb('/contacto', 'Contacto'),
    ],
  },
  estudioTv: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${BASE_URL}/estudio-tv#webpage`,
        url: `${BASE_URL}/estudio-tv`,
        name: 'Estudio de TV y Streaming en Buenos Aires | Centro Rental',
        description:
          'Estudio equipado con ciclorama verde, iluminación, control técnico, camarines y streaming para grabaciones, entrevistas y producciones corporativas.',
        isPartOf: {
          '@id': WEBSITE_ID,
        },
        about: {
          '@id': ORGANIZATION_ID,
        },
        inLanguage: 'es-AR',
        breadcrumb: {
          '@id': `${BASE_URL}/estudio-tv#breadcrumb`,
        },
      },
      createBreadcrumb('/estudio-tv', 'Estudio de TV'),
      {
        '@type': 'Service',
        '@id': `${BASE_URL}/estudio-tv#service`,
        name: 'Estudio de TV y producción audiovisual',
        serviceType: 'Estudio de TV, streaming y producción virtual',
        provider: {
          '@id': ORGANIZATION_ID,
        },
        areaServed: 'Buenos Aires',
        url: `${BASE_URL}/estudio-tv`,
        description:
          'Estudio equipado con ciclorama verde, iluminación, control técnico, camarines y streaming para grabaciones, entrevistas y producciones corporativas.',
      },
    ],
  },
}
