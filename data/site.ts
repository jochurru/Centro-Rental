/**
 * Datos estáticos del sitio Centro Rental.
 *
 * NOTA IMPORTANTE SOBRE PLACEHOLDERS:
 * Todos los datos marcados con [PLACEHOLDER] son valores genéricos o ficticios
 * pendientes de ser confirmados/reemplazados por los datos comerciales del cliente.
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
  verified: boolean
  description?: string
}

export const siteConfig = {
  name: 'Centro Rental',
  // [PLACEHOLDER] Número de WhatsApp de ejemplo
  whatsappPhone: '5491100000000',
  whatsappUrl:
    'https://wa.me/5491100000000?text=Hola%20Centro%20Rental%2C%20quiero%20consultar%20por%20un%20evento.',
  // [PLACEHOLDER] Email de contacto de ejemplo
  email: 'hola@centrorental.com.ar',
  // Canales oficiales confirmados
  instagramUrl: 'https://www.instagram.com/centrorental',
  facebookUrl: 'https://www.facebook.com/CentroRental.com.ar',
  mercadolibreUrl: 'https://listado.mercadolibre.com.ar/_CustId_5954543',
  // [PLACEHOLDER] Ubicación y disponibilidad de ejemplo
  location: 'Buenos Aires · Argentina',
  locationShort: 'Buenos Aires, AR',
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
    color: 'violet',
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

// [PLACEHOLDER] Equipamiento ficticio / catálogo de muestra
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
    title: 'Pantalla LED P3',
    category: 'Video',
    description: 'Alta definición para interiores y exteriores.',
    image: '/led-screen.webp',
  },
]

// [PLACEHOLDER] Eventos de muestra ficticios
export const events: EventItem[] = [
  {
    image: '/event-1.webp',
    type: 'Evento corporativo',
    location: 'Buenos Aires',
    className: 'md:col-span-7 md:row-span-2',
  },
  {
    image: '/event-2.webp',
    type: 'Festival & música',
    location: 'San Isidro',
    className: 'md:col-span-5',
  },
  {
    image: '/event-3.webp',
    type: 'Lanzamiento de marca',
    location: 'Palermo',
    className: 'md:col-span-5',
  },
]

// [PLACEHOLDER] Pasos de proceso genéricos
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

// [PLACEHOLDER] Estadísticas con valores de muestra (+XX / +XXX)
export const stats: StatItem[] = [
  { number: '+XX', label: 'Años de experiencia' },
  { number: '+XXX', label: 'Eventos realizados' },
  { number: '+XX', label: 'Equipos disponibles' },
  { number: '+XXX', label: 'Clientes atendidos' },
]

/**
 * Categorías estructurales para la página /alquiler.
 * No inventar especificaciones no verificadas.
 */
export const rentalCategories: RentalCategory[] = [
  {
    id: 'sonido',
    title: 'Sonido profesional',
    description: 'Sistemas line array, microfonía inalámbrica, consolas digitales y monitoreo para eventos corporativos y masivos.',
    specs: ['Line Array', 'Consolas digitales', 'Microfonía RF', 'Sistemas de PA'],
    iconName: 'Volume2',
  },
  {
    id: 'iluminacion',
    title: 'Iluminación escénica y ambiental',
    description: 'Cabezales móviles, luminarias LED, wash, efectos beam, consolas de iluminación DMX y diseño lumínico integral.',
    specs: ['Cabezales móviles Beam/Spot', 'Barras LED Wash', 'Control DMX / GrandMA', 'Iluminación perimetral'],
    iconName: 'Lightbulb',
  },
  {
    id: 'pantallas-led',
    title: 'Pantallas LED',
    description: 'Módulos LED de alta resolución para interior y exterior, procesadores de video y configuración a medida.',
    specs: ['Pitch fino indoor', 'P3 / P4 outdoor', 'Procesadores NovaStar', 'Estructuras modulares'],
    iconName: 'Tv',
  },
  {
    id: 'streaming-broadcast',
    title: 'Streaming & Broadcast',
    description: 'Cámaras HD/4K, switchers de video, encoders de transmisión y enlace directo para eventos híbridos y transmisiones en vivo.',
    specs: ['Cámaras PTZ y robóticas', 'Switchers Blackmagic', 'Encoders dedicados', 'Monitoreo multiview'],
    iconName: 'Radio',
  },
  {
    id: 'estructuras-rigging',
    title: 'Estructuras & Rigging',
    description: 'Trusses de aluminio, motores de elevación, torres elevadoras, escenarios modulares y anclajes certificados.',
    specs: ['Truss de aluminio homologado', 'Motores y poleas', 'Tarimas y escenarios', 'Certificación de carga'],
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
    specs: ['Stage management', 'Dirección técnica', 'Operadores calificados', 'Planificación previa'],
    iconName: 'Settings',
  },
]

/**
 * Productos de muestra para la página /venta.
 * Catálogo de referencia con derivación al canal oficial de Mercado Libre.
 */
export const saleProducts: SaleProduct[] = [
  {
    id: 'prod-line-array',
    title: 'Módulo de Line Array Pasivo/Activo',
    category: 'Audio',
    description: 'Módulo profesional para sistemas de sonorización de alta presión sonora y cobertura controlada.',
    image: '/sound-system.webp',
    status: 'Disponible para cotización',
    mercadolibreUrl: siteConfig.mercadolibreUrl,
  },
  {
    id: 'prod-moving-head',
    title: 'Cabezal Móvil Beam 7R / Spot',
    category: 'Iluminación',
    description: 'Luminaria robotizada con óptica de precisión, rueda de gobos y prismas para escenarios dinámicos.',
    image: '/lighting-rig.webp',
    status: 'Consultar stock',
    mercadolibreUrl: siteConfig.mercadolibreUrl,
  },
  {
    id: 'prod-led-panel',
    title: 'Gabinete Pantalla LED P3.91 Indoor/Outdoor',
    category: 'Video',
    description: 'Panel modular de alta tasa de refresco, brillo ajustable y sistema de armado rápido de aluminio.',
    image: '/led-screen.webp',
    status: 'Disponible para cotización',
    mercadolibreUrl: siteConfig.mercadolibreUrl,
  },
  {
    id: 'prod-audio-mixer',
    title: 'Consola Digital Multicanal',
    category: 'Audio',
    description: 'Mezcladora digital con preamplificadores de bajo ruido, procesamiento dinámico por canal e interfaz USB/Dante.',
    image: '/sound-system.webp',
    status: 'Consultar stock',
    mercadolibreUrl: siteConfig.mercadolibreUrl,
  },
]

/**
 * Clientes y sectores para la página /clientes.
 * Estructura sobria para marcas e instituciones confirmadas.
 */
export const featuredClients: ClientItem[] = [
  {
    id: 'client-1',
    name: 'Teatro Colón',
    category: 'Instituciones & Cultura',
    verified: true,
    description: 'Producción técnica y equipamiento para galas y conciertos de prestigio.',
  },
  {
    id: 'client-2',
    name: 'UNICEF',
    category: 'Organismos & Campañas',
    verified: true,
    description: 'Soporte audiovisual y técnico para eventos institucionales y transmisiones.',
  },
  {
    id: 'client-3',
    name: 'Sofitel',
    category: 'Hotelería 5 Estrellas',
    verified: true,
    description: 'Infraestructura técnica para convenciones, lanzamientos y galas privadas.',
  },
  {
    id: 'client-4',
    name: 'Corporativos & Congresos',
    category: 'Empresas & Negocios',
    verified: true,
    description: 'Convenciones anuales, lanzamientos de producto y asambleas corporativas.',
  },
  {
    id: 'client-5',
    name: 'Festivales & Recitales',
    category: 'Espectáculos en vivo',
    verified: true,
    description: 'Escenarios principales con sonido line array e iluminación de gran escala.',
  },
  {
    id: 'client-6',
    name: 'Embajadas y Diplomacia',
    category: 'Institucional internacional',
    verified: true,
    description: 'Sonorización protocolar, traducción simultánea y transmisiones seguras.',
  },
]
