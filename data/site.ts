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

export interface SpecialServiceItem {
  id: string
  title: string
  subtitle: string
  description: string
  specs: string[]
  iconName?: string
}

export interface InstallationItem {
  id: string
  title: string
  subtitle: string
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

export const primaryNavItems: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Alquiler', href: '/alquiler' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Instalaciones', href: '/instalaciones' },
  { label: 'Eventos', href: '/eventos' },
  { label: 'Venta', href: '/venta' },
]

export const moreNavItems: NavItem[] = [
  { label: 'Clientes', href: '/clientes' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Contacto', href: '/contacto' },
]

export const navItems: NavItem[] = [
  ...primaryNavItems,
  ...moreNavItems,
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

// 4 pilares principales de servicio y capacidad técnica
export const services: ServiceItem[] = [
  {
    number: '01',
    title: 'Sonido profesional',
    description: 'Sistemas line array, microfonía y consolas digitales para eventos de cualquier escala.',
    image: '/sound-system.webp',
    color: '#B5D448',
  },
  {
    number: '02',
    title: 'Iluminación escénica',
    description: 'Cabezales móviles, reflectores LED y control DMX para puestas arquitectónicas y shows.',
    image: '/lighting-rig.webp',
    color: '#B5D448',
  },
  {
    number: '03',
    title: 'Pantallas LED',
    description: 'Módulos LED de alta definición para escenarios, conferencias y fondos de impacto visual.',
    image: '/led-screen.webp',
    color: '#B5D448',
  },
  {
    number: '04',
    title: 'Producción técnica',
    description: 'Dirección operativa integral, montaje de estructuras, rigging y asistencia en vivo.',
    image: '/hero-event.webp',
    color: '#B5D448',
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
    description: 'Pantallas LED modulares para interior y exterior, procesadores de video y estructuras de montaje a medida.',
    specs: ['Pantallas modulares indoor y outdoor', 'Procesadores de video', 'Estructuras de montaje', 'Configuración según el espacio'],
    iconName: 'Tv',
  },
  {
    id: 'proyectores-pantallas',
    title: 'Proyectores y pantallas de proyección',
    description: 'Proyectores y pantallas de proyección frontal y retroproyección con trípode o marco para reuniones y eventos.',
    specs: ['Proyectores para presentaciones y eventos', 'Pantallas con marco y trípode', 'Opciones de proyección frontal y trasera', 'Conectividad HDMI y video'],
    iconName: 'Projector',
  },
  {
    id: 'smart-tvs-soportes',
    title: 'Smart TVs y soportes',
    description: 'Pantallas de diversas medidas con soportes móviles de pie o de pared para stands, salas de reuniones y acreditaciones.',
    specs: ['Smart TVs para eventos y stands', 'Soportes de pie rodantes', 'Soportes de mesa y pared', 'Conexión HDMI y adaptadores'],
    iconName: 'Monitor',
  },
  {
    id: 'starlink',
    title: 'Internet satelital Starlink',
    description: 'Kits de internet satelital para eventos, transmisiones y producción en locaciones con conectividad limitada.',
    specs: ['Antena satelital Starlink', 'Router Wi-Fi', 'Conectividad para acreditaciones y producción', 'Cables y accesorios de conexión'],
    iconName: 'Wifi',
  },
  {
    id: 'streaming-broadcast',
    title: 'Streaming & Video',
    description: 'Equipamiento para transmisiones en vivo, switchers de video y captura de señal para eventos presenciales e híbridos.',
    specs: ['Cámaras para transmisión', 'Switchers de video', 'Equipos de codificación y streaming', 'Monitoreo de señal'],
    iconName: 'Radio',
  },
  {
    id: 'camaras-video',
    title: 'Cámaras & Video',
    description: 'Cámaras de video, trípodes y accesorios para registro de eventos y producción audiovisual en vivo.',
    specs: ['Cámaras para registro y cobertura', 'Trípodes de video', 'Monitores de visualización', 'Cableado y conectores de video'],
    iconName: 'Camera',
  },
  {
    id: 'notebooks',
    title: 'Notebooks & Computación',
    description: 'Equipos portátiles para presentaciones, acreditaciones y apoyo operativo en eventos.',
    specs: ['Notebooks para presentaciones y conferencias', 'Salidas de video HDMI', 'Periféricos y adaptadores', 'Equipos listos para uso en sala'],
    iconName: 'Laptop',
  },
  {
    id: 'consolas-gaming',
    title: 'Consolas PS5 & Xbox',
    description: 'Consolas de videojuegos para activaciones de marca, stands y áreas recreativas en eventos corporativos.',
    specs: ['Consolas PlayStation y Xbox', 'Mandos y cables de conexión', 'Conexión a pantallas y proyectores', 'Kits para stands y activaciones'],
    iconName: 'Gamepad',
  },
  {
    id: 'estructuras-rigging',
    title: 'Estructuras & Rigging',
    description: 'Trusses de aluminio, sistemas de elevación, torres, escenarios modulares y soluciones de anclaje para montaje técnico.',
    specs: ['Estructuras de montaje profesional', 'Sistemas de elevación', 'Tarimas y escenarios modulares', 'Sistemas de anclaje y sujeción'],
    iconName: 'Layers',
  },
  {
    id: 'biombos-soportes',
    title: 'Biombos, paneles & soportes',
    description: 'Biombos modulares, paneles divisorios y soportes para delimitar áreas, backstage y señalética de eventos.',
    specs: ['Biombos modulares divisorios', 'Soportes para cartelería y banners', 'Estructuras autoportantes', 'Delimitación de áreas y accesos'],
    iconName: 'PanelLeft',
  },
  {
    id: 'traduccion-simultanea',
    title: 'Traducción simultánea',
    description: 'Cabinas para intérpretes, receptores y equipamiento de audio para conferencias multilingües.',
    specs: ['Cabinas para intérpretes', 'Receptores de audio para audiencia', 'Consolas para traducción', 'Accesorios de transmisión de audio'],
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
 * Servicios especiales operativos e históricos de Centro Rental (/servicios).
 */
export const specialServices: SpecialServiceItem[] = [
  {
    id: 'streaming',
    title: 'Streaming & Transmisión en Vivo',
    subtitle: 'Eventos híbridos y virtuales',
    description: 'Transmisión de video en vivo para conferencias, congresos y presentaciones corporativas hacia plataformas digitales.',
    specs: ['Cámaras y conmutación de video', 'Codificación para streaming', 'Transmisión a plataformas digitales', 'Operación técnica en sala'],
    iconName: 'Radio',
  },
  {
    id: 'traduccion',
    title: 'Traducción Simultánea',
    subtitle: 'Conferencias multilingües',
    description: 'Equipamiento para interpretación simultánea en congresos y conferencias corporativas con cabinas y receptores para la audiencia.',
    specs: ['Cabinas para intérpretes', 'Receptores de audio para asistentes', 'Consolas y micrófonos de interpretación', 'Distribución de señal de audio'],
    iconName: 'Headphones',
  },
  {
    id: 'starlink',
    title: 'Internet Satelital / Starlink',
    subtitle: 'Conectividad en locación',
    description: 'Provisión de internet satelital para eventos, transmisiones y acreditaciones en espacios con conectividad limitada.',
    specs: ['Antena satelital Starlink', 'Distribución de red Wi-Fi en el lugar', 'Conexión para acreditaciones y técnica', 'Puesta en funcionamiento en el evento'],
    iconName: 'Wifi',
  },
  {
    id: 'escenarios-tarimas-vallas',
    title: 'Escenarios, Tarimas & Vallas',
    subtitle: 'Infraestructura de montaje',
    description: 'Montaje de escenarios, tarimas modulares y vallado para actos corporativos, conferencias y espectáculos.',
    specs: ['Tarimas modulares para escenario', 'Escenarios para actos y conferencias', 'Vallas de delimitación perimetral', 'Escaleras y accesorios de acceso'],
    iconName: 'Layers',
  },
  {
    id: 'grupos-electrogenos',
    title: 'Grupos Electrógenos & Energía',
    subtitle: 'Energía temporal para eventos',
    description: 'Provisión de generadores eléctricos y tableros de distribución para soporte de energía en eventos y producciones.',
    specs: ['Grupos electrógenos para eventos', 'Tableros de distribución eléctrica', 'Cableado y acometidas de potencia', 'Conexión técnica para sonido e iluminación'],
    iconName: 'Zap',
  },
  {
    id: 'produccion-tecnica',
    title: 'Producción Técnica Integral',
    subtitle: 'Coordinación técnica en vivo',
    description: 'Coordinación de áreas técnicas, soporte en escenario y armado general para eventos corporativos e institucionales.',
    specs: ['Coordinación técnica general', 'Asistencia en escenario y backstage', 'Técnicos y operadores de equipamiento', 'Planificación previa del montaje'],
    iconName: 'Settings',
  },
]

/**
 * Instalaciones fijas e integración permanente para espacios corporativos (/instalaciones).
 */
export const installationServices: InstallationItem[] = [
  {
    id: 'audio-video-fijo',
    title: 'Audio & Video Fijo',
    subtitle: 'Salas de reunión y auditorios',
    description: 'Instalación de sistemas de sonido ambiental, pantallas, proyectores y distribución de señal audiovisual para oficinas, auditorios y espacios comerciales.',
    specs: ['Sonorización de salas y espacios comunes', 'Instalación de pantallas y proyectores', 'Conectividad y cableado de audio y video', 'Microfonía para salas de reunión'],
    iconName: 'Tv',
  },
  {
    id: 'domotica-automatizacion',
    title: 'Domótica & Automatización',
    subtitle: 'Automatización de espacios',
    description: 'Integración de sistemas de automatización para iluminación, audio distribuido y control ambiental en oficinas y salas corporativas.',
    specs: ['Automatización de iluminación', 'Integración de audio en diferentes ambientes', 'Control ambiental y cortinados', 'Sistemas de control centralizado'],
    iconName: 'Cpu',
  },
  {
    id: 'camaras-seguridad',
    title: 'Cámaras de Seguridad (CCTV)',
    subtitle: 'Sistemas de videovigilancia',
    description: 'Instalación de circuitos cerrados de televisión y cámaras de seguridad para oficinas, depósitos, locales y predios comerciales.',
    specs: ['Cámaras para interior y exterior', 'Equipos de grabación de video', 'Instalación y cableado del sistema', 'Puesta en marcha y configuración'],
    iconName: 'Camera',
  },
  {
    id: 'control-acceso',
    title: 'Control de Acceso & Cerraduras Biométricas',
    subtitle: 'Sistemas de acceso y seguridad',
    description: 'Instalación de cerraduras electrónicas, lectores biométricos y sistemas de control de ingreso para oficinas y sectores restringidos.',
    specs: ['Cerraduras electrónicas y digitales', 'Lectores biométricos de huella', 'Dispositivos de apertura y pulsadores', 'Instalación y configuración del punto de acceso'],
    iconName: 'ShieldCheck',
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
