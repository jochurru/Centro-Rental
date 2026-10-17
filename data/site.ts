/**
 * Datos estáticos del sitio Centro Rental.
 * Contenido comercial verificado y saneado según fuentes históricas y catálogo oficial.
 */

export interface NavItem {
  label: string
  href: string
}

export interface ServiceItem {
  number: string
  title: string
  description: string
  image: string
  color: string
}

export interface EquipmentItem {
  title: string
  category: string
  description: string
  image: string
}

export interface EventItem {
  image: string
  type: string
  location: string
  className: string
}

export interface ProcessStep {
  number: string
  title: string
  text: string
}

export interface StatItem {
  number: string
  label: string
}

export interface RentalCategory {
  id: string
  title: string
  description: string
  specs: string[]
  iconName?: string
}

export interface SaleProduct {
  id: string
  title: string
  category: string
  description: string
  image: string
  status: string
  mercadolibreUrl: string
}

export interface ClientItem {
  id: string
  name: string
  category: string
  logo?: string
  description?: string
}

export const siteConfig = {
  name: 'Centro Rental',
  // Canales oficiales confirmados
  address: 'Av. Belgrano 2450, Capital Federal',
  phone: '(011) 15-4429-4224',
  phoneTel: '+5491144294224',
  whatsappPhone: '+5491144294224',
  whatsappUrl:
    'https://wa.me/5491144294224?text=Hola%20Centro%20Rental%2C%20quiero%20consultar%20por%20un%20evento.',
  email: 'info@centrorental.com.ar',
  instagramUrl: 'https://www.instagram.com/centrorental',
  facebookUrl: 'https://www.facebook.com/CentroRental.com.ar',
  mercadolibreUrl: 'https://listado.mercadolibre.com.ar/_CustId_5954543',
  location: 'Av. Belgrano 2450, Capital Federal',
  locationShort: 'Capital Federal, Buenos Aires',
  availability: 'Disponibilidad 2026',
  copyrightYear: 2026,
}

export const navItems: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Eventos', href: '/eventos' },
  { label: 'Alquiler', href: '/alquiler' },
  { label: 'Venta', href: '/venta' },
  { label: 'Clientes', href: '/clientes' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Contacto', href: '/contacto' },
]

export const footerNavItems: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Eventos', href: '/eventos' },
  { label: 'Alquiler', href: '/alquiler' },
  { label: 'Venta', href: '/venta' },
  { label: 'Clientes', href: '/clientes' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Contacto', href: '/contacto' },
]

export const tickerItems: string[] = [
  'Sonido de precisión',
  'Diseño de iluminación',
  'Visuales que impactan',
  'Operación integral',
]

// [PLACEHOLDER] Servicios genéricos
export const services: ServiceItem[] = [
  {
    number: '01',
    title: 'Sonido profesional',
    description: 'Sistemas de audio que llenan cada espacio con claridad y potencia.',
    image: '/sound-system.webp',
    color: 'green',
  },
  {
    number: '02',
    title: 'Iluminación',
    description: 'Diseñamos atmósferas que transforman la energía de tu evento.',
    image: '/lighting-rig.webp',
    color: 'amber',
  },
  {
    number: '03',
    title: 'Pantallas LED',
    description: 'Contenido que impacta. Resolución y escala para hacerte ver.',
    image: '/led-screen.webp',
    color: 'cyan',
  },
  {
    number: '04',
    title: 'Producción técnica',
    description: 'Una mirada integral para que todo funcione como fue pensado.',
    image: '/hero-event.webp',
    color: 'rose',
  },
]

export const equipment: EquipmentItem[] = [
  {
    title: 'Sistema Line Array',
    category: 'Audio',
    description: 'Cobertura uniforme para eventos de gran escala.',
    image: '/sound-system.webp',
  },
  {
    title: 'Cabezal Móvil Beam',
    category: 'Iluminación',
    description: 'Precisión y movimiento para crear escenas únicas.',
    image: '/lighting-rig.webp',
  },
  {
    title: 'Pantalla LED Modular',
    category: 'Video',
    description: 'Alta definición para interiores y exteriores.',
    image: '/led-screen.webp',
  },
]

export const events: EventItem[] = [
  {
    image: '/events/teatro-colon-unicef.jpg',
    type: 'Teatro Colón · Gala UNICEF',
    location: 'Teatro Colón · Buenos Aires',
    className: 'md:col-span-7 md:row-span-2',
  },
  {
    image: '/events/versace-sofitel.jpg',
    type: 'Versace · Lanzamiento Perfume Eros',
    location: 'Hotel Sofitel · Buenos Aires',
    className: 'md:col-span-5',
  },
  {
    image: '/events/teatro-nd.jpg',
    type: 'Teatro ND · Pantalla LED 5x3',
    location: 'Teatro ND Ateneo · CABA',
    className: 'md:col-span-5',
  },
]

// Pasos de proceso de trabajo
export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Contanos qué necesitás',
    text: 'Escuchamos la idea, el espacio y los objetivos de tu evento.',
  },
  {
    number: '02',
    title: 'Diseñamos la solución',
    text: 'Nuestro equipo transforma el brief en una propuesta técnica clara.',
  },
  {
    number: '03',
    title: 'Coordinamos todo',
    text: 'Logística, montaje y operación. Nos ocupamos de cada detalle.',
  },
  {
    number: '04',
    title: 'Tu evento está listo',
    text: 'Disfrutá el resultado. Nosotros estamos detrás de escena.',
  },
]

export const rentalCategories: RentalCategory[] = [
  {
    id: 'sonido',
    title: 'Sonido profesional',
    description: 'Sistemas line array, microfonía inalámbrica, consolas digitales y monitoreo para eventos corporativos y masivos.',
    specs: ['Sistemas Line Array', 'Consolas digitales', 'Microfonía inalámbrica', 'Sistemas de PA'],
    iconName: 'Volume2',
  },
  {
    id: 'iluminacion',
    title: 'Iluminación escénica y ambiental',
    description: 'Cabezales móviles, luminarias LED, wash, efectos beam, consolas de iluminación DMX y diseño lumínico integral.',
    specs: ['Cabezales móviles Beam y Spot', 'Barras LED Wash', 'Control DMX profesional', 'Iluminación perimetral'],
    iconName: 'Lightbulb',
  },
  {
    id: 'pantallas-led',
    title: 'Pantallas LED',
    description: 'Módulos LED de alta resolución para interior y exterior, procesadores de video y configuración a medida.',
    specs: ['Módulos indoor de pitch fino', 'Sistemas modulares para exterior', 'Procesamiento de video', 'Estructuras de montaje'],
    iconName: 'Tv',
  },
  {
    id: 'streaming-broadcast',
    title: 'Streaming & Broadcast',
    description: 'Cámaras para producción multicámara, switchers de video, encoders de transmisión y enlace directo para eventos híbridos.',
    specs: ['Cámaras para producción multicámara', 'Switchers y enrutamiento de video', 'Encoders dedicados', 'Monitoreo multiview'],
    iconName: 'Radio',
  },
  {
    id: 'estructuras-rigging',
    title: 'Estructuras & Rigging',
    description: 'Trusses de aluminio, sistemas de elevación, torres, escenarios modulares y soluciones de anclaje para montaje técnico.',
    specs: ['Estructuras de montaje profesional', 'Sistemas de elevación', 'Tarimas y escenarios modulares', 'Sistemas de anclaje y seguridad'],
    iconName: 'Layers',
  },
  {
    id: 'traduccion-simultanea',
    title: 'Traducción simultánea',
    description: 'Cabinas insonorizadas, receptores infrarrojos/RF y equipamiento para conferencias internacionales multilingües.',
    specs: ['Cabinas acústicas', 'Receptores multicanal', 'Consolas para intérpretes', 'Distribución RF/IR'],
    iconName: 'Headphones',
  },
  {
    id: 'produccion-tecnica',
    title: 'Producción técnica integral',
    description: 'Dirección de técnica general, coordinación de escenario, supervisión operativa y soporte de principio a fin.',
    specs: ['Coordinación de escenario', 'Dirección técnica', 'Operadores especializados', 'Planificación previa'],
    iconName: 'Settings',
  },
]

/**
 * Categorías generales para la sección /venta.
 * Catálogo honesto con derivación al canal oficial de Mercado Libre donde se publican las unidades individuales.
 */
export const saleProducts: SaleProduct[] = [
  {
    id: 'cat-audio',
    title: 'Sistemas de Audio & Sonido',
    category: 'Audio Profesional',
    description: 'Consolas de mezcla, procesadores, potencias y cajas acústicas disponibles por renovación de parque.',
    image: '/sound-system.webp',
    status: 'Catálogo oficial en Mercado Libre',
    mercadolibreUrl: siteConfig.mercadolibreUrl,
  },
  {
    id: 'cat-iluminacion',
    title: 'Iluminación Escénica & Robótica',
    category: 'Iluminación',
    description: 'Cabezales móviles, reflectores LED, control DMX y accesorios de iluminación.',
    image: '/lighting-rig.webp',
    status: 'Catálogo oficial en Mercado Libre',
    mercadolibreUrl: siteConfig.mercadolibreUrl,
  },
  {
    id: 'cat-pantallas',
    title: 'Pantallas LED & Procesamiento',
    category: 'Video',
    description: 'Módulos LED modulares, procesadores de video y accesorios de montaje para instalaciones fijas o eventos.',
    image: '/led-screen.webp',
    status: 'Catálogo oficial en Mercado Libre',
    mercadolibreUrl: siteConfig.mercadolibreUrl,
  },
  {
    id: 'cat-estructuras',
    title: 'Estructuras, Rigging & Cables',
    category: 'Estructuras & Escenario',
    description: 'Tramos de truss de aluminio, bases, elevadores, mangueras multipar y cableado técnico.',
    image: '/hero-event.webp',
    status: 'Catálogo oficial en Mercado Libre',
    mercadolibreUrl: siteConfig.mercadolibreUrl,
  },
]

/**
 * Clientes confirmados provenientes de la sección /clientes histórica del sitio original.
 */
export const confirmedClients: ClientItem[] = [
  { id: 'afa', name: 'AFA', category: 'Institución & Deporte', logo: '/clients/afa.gif' },
  { id: 'playstation', name: 'PlayStation / Sony', category: 'Tecnología & Entretenimiento', logo: '/clients/playstation.gif' },
  { id: 'loreal', name: "L'Oréal", category: 'Cosmética & Belleza', logo: '/clients/loreal.gif' },
  { id: 'mcdonalds', name: "McDonald's", category: 'Gastronomía & Franquicias', logo: '/clients/mcdonalds.gif' },
  { id: 'citroen', name: 'Citroën', category: 'Automotriz', logo: '/clients/citroen.gif' },
  { id: 'mini', name: 'MINI / BMW Group', category: 'Automotriz', logo: '/clients/mini.gif' },
  { id: 'sheraton', name: 'Sheraton Hotel', category: 'Hotelería & Convenciones', logo: '/clients/sheraton.gif' },
  { id: 'banco-credicoop', name: 'Banco Credicoop', category: 'Banca & Finanzas', logo: '/clients/banco-credicoop.gif' },
  { id: 'correo-argentino', name: 'Correo Argentino', category: 'Servicios Postales & Logística', logo: '/clients/correo-argentino.gif' },
  { id: 'autopistas-del-sol', name: 'Autopistas del Sol', category: 'Infraestructura & Concesiones', logo: '/clients/autopistas-del-sol.gif' },
  { id: 'eli-lilly', name: 'Eli Lilly', category: 'Farmacéutica & Salud', logo: '/clients/eli-lilly.gif' },
  { id: 'sol-melia', name: 'Sol Meliá', category: 'Hotelería & Resorts', logo: '/clients/sol-melia.gif' },
  { id: 'trilenium', name: 'Trilenium Casino', category: 'Entretenimiento & Eventos', logo: '/clients/trilenium.gif' },
  { id: 'acde', name: 'ACDE', category: 'Asociaciones Empresariales', logo: '/clients/acde.gif' },
  { id: 'aaba', name: 'AABA', category: 'Colegios Profesionales', logo: '/clients/aaba.gif' },
  { id: 'atvc', name: 'ATVC', category: 'Telecomunicaciones & Cable', logo: '/clients/atvc.gif' },
  { id: 'lidherma', name: 'Lidherma', category: 'Dermoestética & Cosmética', logo: '/clients/lidherma.gif' },
  { id: 'megatlon', name: 'Megatlon', category: 'Fitness & Centros Deportivos', logo: '/clients/megatlon.gif' },
]

export const featuredClients = confirmedClients
