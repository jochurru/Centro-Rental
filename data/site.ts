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
    description: 'Módulos LED de alta resolución para interior y exterior, procesadores de video y configuración a medida.',
    specs: ['Módulos indoor de pitch fino', 'Sistemas modulares para exterior', 'Procesamiento de video', 'Estructuras de montaje'],
    iconName: 'Tv',
  },
  {
    id: 'proyectores-pantallas',
    title: 'Proyectores y pantallas de proyección',
    description: 'Proyectores de alta luminosidad y pantallas de proyección frontal y retroproyección con trípode o marco autoportante.',
    specs: ['Proyectores de alta definición', 'Pantallas con marco y trípode', 'Formatos 16:9 y 4:3', 'Conectividad HDMI y video'],
    iconName: 'Projector',
  },
  {
    id: 'smart-tvs-soportes',
    title: 'Smart TVs y soportes',
    description: 'Pantallas de 43 a 75 pulgadas con soportes móviles de pie o de pared para stands, salas de reuniones y acreditaciones.',
    specs: ['Smart TVs de 43" a 75"', 'Soportes de pie rodantes', 'Soportes de mesa y pared', 'Conexión HDMI y Wi-Fi'],
    iconName: 'Monitor',
  },
  {
    id: 'starlink',
    title: 'Internet satelital Starlink',
    description: 'Kits de internet satelital de alta velocidad y baja latencia para transmisiones, acreditaciones y producción técnica en terreno.',
    specs: ['Antena satelital Starlink', 'Router Wi-Fi integrado', 'Baja latencia para streaming', 'Instalación y soporte en sitio'],
    iconName: 'Wifi',
  },
  {
    id: 'streaming-broadcast',
    title: 'Streaming & Broadcast',
    description: 'Cámaras para producción multicámara, switchers de video, encoders de transmisión y enlace directo para eventos híbridos.',
    specs: ['Cámaras para producción multicámara', 'Switchers y enrutamiento de video', 'Encoders dedicados', 'Monitoreo multiview'],
    iconName: 'Radio',
  },
  {
    id: 'camaras-video',
    title: 'Cámaras & Video',
    description: 'Cámaras profesionales, ópticas, trípodes y accesorios para registro de eventos y producción audiovisual en vivo.',
    specs: ['Cámaras para video profesional', 'Trípodes fluidos', 'Monitores de referencia', 'Accesorios y cableado HDMI/SDI'],
    iconName: 'Camera',
  },
  {
    id: 'notebooks',
    title: 'Notebooks & Computación',
    description: 'Equipos portátiles para presentaciones, acreditaciones, control de sonido y gestión operativa de eventos.',
    specs: ['Notebooks para conferencias', 'Procesadores de alto rendimiento', 'Salidas HDMI y video dedicadas', 'Accesorios y periféricos'],
    iconName: 'Laptop',
  },
  {
    id: 'consolas-gaming',
    title: 'Consolas PS5 & Xbox',
    description: 'Consolas de videojuegos de última generación con mandos y accesorios para activaciones de marca, stands y zonas recreativas.',
    specs: ['PlayStation 5 y Xbox Series', 'Mandos inalámbricos adicionales', 'Cables HDMI de alta velocidad', 'Configuración para torneos y stands'],
    iconName: 'Gamepad',
  },
  {
    id: 'estructuras-rigging',
    title: 'Estructuras & Rigging',
    description: 'Trusses de aluminio, sistemas de elevación, torres, escenarios modulares y soluciones de anclaje para montaje técnico.',
    specs: ['Estructuras de montaje profesional', 'Sistemas de elevación', 'Tarimas y escenarios modulares', 'Sistemas de anclaje y seguridad'],
    iconName: 'Layers',
  },
  {
    id: 'biombos-soportes',
    title: 'Biombos, paneles & soportes',
    description: 'Biombos modulares, paneles divisorios y soportes autoportantes para delimitar espacios, backstage y señalética.',
    specs: ['Biombos modulares para backstage', 'Soportes para cartelería y banners', 'Estructuras livianas autoportantes', 'Fácil reconfiguración en sala'],
    iconName: 'PanelLeft',
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
 * Servicios especiales operativos e históricos de Centro Rental (/servicios).
 */
export const specialServices: SpecialServiceItem[] = [
  {
    id: 'streaming',
    title: 'Streaming & Transmisión en Vivo',
    subtitle: 'Eventos híbridos y virtuales',
    description: 'Transmisiones multicámara, codificación dedicada, enlace directo a plataformas y cobertura técnica integral para eventos corporativos e institucionales.',
    specs: ['Producción multicámara en vivo', 'Switchers y encoders dedicados', 'Salida multicanal y web simultánea', 'Monitoreo técnico de transmisión'],
    iconName: 'Radio',
  },
  {
    id: 'traduccion',
    title: 'Traducción Simultánea',
    subtitle: 'Conferencias multilingües',
    description: 'Sistemas para congresos internacionales con cabinas insonorizadas, consolas para intérpretes y receptores multicanal para los asistentes.',
    specs: ['Cabinas acústicas insonorizadas', 'Receptores multicanal para audiencia', 'Consolas para intérpretes profesionales', 'Distribución de audio RF e infrarrojo'],
    iconName: 'Headphones',
  },
  {
    id: 'starlink',
    title: 'Internet Satelital / Starlink',
    subtitle: 'Conectividad de alta demanda',
    description: 'Conectividad satelital de alta velocidad y baja latencia para transmisiones, acreditaciones y producción técnica en locaciones sin enlace terrestre.',
    specs: ['Antenas satelitales de alta velocidad', 'Redes Wi-Fi dedicadas para producción', 'Enlace de backup y redundancia', 'Instalación y monitoreo en sitio'],
    iconName: 'Wifi',
  },
  {
    id: 'escenarios-tarimas-vallas',
    title: 'Escenarios, Tarimas & Vallas',
    subtitle: 'Infraestructura de montaje',
    description: 'Montaje de escenarios modulares, tarimas regulables a medida, gradas y sistemas de vallado perimetral para actos, conferencias y espectáculos.',
    specs: ['Tarimas modulares regulables en altura', 'Escenarios para interior y exterior', 'Vallas de contención perimetral', 'Escaleras y barandas de seguridad'],
    iconName: 'Layers',
  },
  {
    id: 'grupos-electrogenos',
    title: 'Grupos Electrógenos & Energía',
    subtitle: 'Suministro eléctrico ininterrumpido',
    description: 'Generación eléctrica y tableros de distribución técnica para garantizar continuidad operativa y respaldo en eventos de cualquier escala.',
    specs: ['Generadores para eventos', 'Tableros de distribución técnica', 'Cableado de potencia y acometidas', 'Supervisión de carga eléctrica en vivo'],
    iconName: 'Zap',
  },
  {
    id: 'produccion-tecnica',
    title: 'Producción Técnica Integral',
    subtitle: 'Coordinación y dirección en vivo',
    description: 'Dirección de técnica general, coordinación de escenario, supervisión operativa y soporte de principio a fin para productoras y empresas.',
    specs: ['Dirección técnica general', 'Coordinación de escenario y backstage', 'Operadores y técnicos especializados', 'Planificación previa y rider técnico'],
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
    description: 'Instalación y calibración permanente de sistemas de sonido ambiental, sonorización de auditorios, pantallas y distribución de señal para espacios corporativos.',
    specs: ['Sonorización ambiental y de salas', 'Pantallas y proyectores fijos', 'Distribución de video y conectividad', 'Microfonía de mesa y conferencias'],
    iconName: 'Tv',
  },
  {
    id: 'domotica-automatizacion',
    title: 'Domótica & Automatización',
    subtitle: 'Control inteligente de espacios',
    description: 'Automatización de iluminación, control de cortinados, audio distribuido y gestión centralizada de escenarios para oficinas y espacios comerciales.',
    specs: ['Control centralizado de iluminación', 'Automatización de salas de reunión', 'Integración de audio multizona', 'Paneles táctiles y control por aplicación'],
    iconName: 'Cpu',
  },
  {
    id: 'camaras-seguridad',
    title: 'Cámaras de Seguridad (CCTV)',
    subtitle: 'Videovigilancia y monitoreo',
    description: 'Sistemas de videovigilancia IP y analógica, monitoreo en tiempo real, grabación centralizada y configuración de accesos remotos seguros.',
    specs: ['Cámaras IP para interior y exterior', 'Grabadores digitales y almacenamiento', 'Monitoreo en red y dispositivos móviles', 'Cableado estructurado de seguridad'],
    iconName: 'Camera',
  },
  {
    id: 'control-acceso',
    title: 'Control de Acceso & Cerraduras Biométricas',
    subtitle: 'Gestión y seguridad de accesos',
    description: 'Sistemas de ingreso mediante huella digital, reconocimiento facial, tarjetas de proximidad o cerraduras electrónicas para áreas restringidas.',
    specs: ['Lectores biométricos y de proximidad', 'Cerraduras electromagnéticas y digitales', 'Software de registro de accesos', 'Torniquetes y barreras peatonales'],
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
