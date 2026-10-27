/**
 * Datos estáticos del sitio Centro Rental.
 * Contenido comercial verificado y saneado según fuentes históricas y catálogo oficial.
 */

export interface NavItem {
  label: string
  href: string
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

export interface RentalGalleryItem {
  src: string
  alt: string
  label?: string
}

export interface RentalCategory {
  id: string
  title: string
  description: string
  specs: string[]
  iconName?: string
  image?: string
  imageAlt?: string
  secondaryImage?: string
  secondaryImageAlt?: string
  gallery?: RentalGalleryItem[]
}

export interface SpecialServiceItem {
  id: string
  title: string
  subtitle: string
  description: string
  specs: string[]
  iconName?: string
  image?: string
  imageAlt?: string
  href?: string
}

export interface InstallationItem {
  id: string
  title: string
  subtitle: string
  description: string
  specs: string[]
  iconName?: string
  image?: string
  imageAlt?: string
  imageLabel?: string
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
    image: '/events/hotel-hilton.jpg',
    type: 'Hotel Hilton · Evento Corporativo',
    location: 'Hotel Hilton · Puerto Madero',
    className: 'md:col-span-5',
  },
  {
    image: '/events/versace-sofitel.jpg',
    type: 'Versace · Lanzamiento Perfume Eros',
    location: 'Hotel Sofitel · Buenos Aires',
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
    image: '/images/rental/sonido-parlante-pa.webp',
    imageAlt: 'Sistema de audio y bafle profesional sobre trípode',
    secondaryImage: '/images/rental/sonido-consola-operador.webp',
    secondaryImageAlt: 'Operadores técnicos en consola de audio en evento',
    gallery: [
      {
        src: '/images/rental/sonido-parlante-pa.webp',
        alt: 'Sistema de audio y bafle sobre trípode',
        label: 'Sistema de PA',
      },
      {
        src: '/images/rental/sonido-consola-operador.webp',
        alt: 'Operadores técnicos en consola de audio en evento',
        label: 'Operación en consola',
      },
      {
        src: '/images/rental/sonido-consola-digital.webp',
        alt: 'Consola digital para operación de sonido',
        label: 'Consola digital',
      },
      {
        src: '/images/rental/sonido-control-foh.webp',
        alt: 'Puesto de control de sonido en auditorio',
        label: 'Control de sonido en sala',
      },
      {
        src: '/images/rental/sonido-microfonia-monitoreo.webp',
        alt: 'Equipamiento de microfonía y monitoreo de audio',
        label: 'Microfonía & Monitoreo',
      },
    ],
  },
  {
    id: 'iluminacion',
    title: 'Iluminación escénica y ambiental',
    description: 'Cabezales móviles, luminarias LED, wash, efectos beam, consolas de iluminación DMX y diseño lumínico integral.',
    specs: ['Cabezales móviles Beam y Spot', 'Barras LED Wash', 'Control DMX profesional', 'Iluminación perimetral'],
    iconName: 'Lightbulb',
    image: '/images/rental/iluminacion-par-led.webp',
    imageAlt: 'Iluminación ambiental con luminarias PAR LED en salón',
    gallery: [
      {
        src: '/images/rental/iluminacion-par-led.webp',
        alt: 'Iluminación ambiental con luminarias PAR LED',
        label: 'Ambientación PAR LED',
      },
      {
        src: '/images/rental/iluminacion-cabezales-truss.webp',
        alt: 'Cabezales móviles montados en estructura truss',
        label: 'Cabezales en truss',
      },
      {
        src: '/images/rental/iluminacion-cabezales-beam.webp',
        alt: 'Cabezales móviles con efectos de iluminación',
        label: 'Efectos de iluminación',
      },
      {
        src: '/images/rental/iluminacion-ambientacion-salon.webp',
        alt: 'Puesta de iluminación ambiental para salón',
        label: 'Ambientación de salón',
      },
      {
        src: '/images/rental/iluminacion-control-dmx.webp',
        alt: 'Consola de control y luminarias de iluminación',
        label: 'Control de iluminación',
      },
    ],
  },
  {
    id: 'pantallas-led',
    title: 'Pantallas LED',
    description: 'Pantallas LED modulares para interior y exterior, procesadores de video y estructuras de montaje a medida.',
    specs: ['Pantallas modulares indoor y outdoor', 'Procesadores de video', 'Estructuras de montaje', 'Configuración según el espacio'],
    iconName: 'Tv',
    image: '/images/rental/pantalla-led-escenario.webp',
    imageAlt: 'Pantalla LED modular de alta resolución en escenario',
    secondaryImage: '/images/rental/pantalla-led-hilton.webp',
    secondaryImageAlt: 'Pantalla LED en salón corporativo de hotel',
    gallery: [
      {
        src: '/images/rental/pantalla-led-escenario.webp',
        alt: 'Pantalla LED modular en escenario',
        label: 'Escenario modular',
      },
      {
        src: '/images/rental/pantalla-led-hilton.webp',
        alt: 'Pantalla LED en salón corporativo de hotel',
        label: 'Salón corporativo',
      },
      {
        src: '/images/rental/pantalla-led-teatro-nd.webp',
        alt: 'Pantalla LED de 5x3 metros en escenario de teatro',
        label: 'Escenario de teatro',
      },
      {
        src: '/images/rental/pantalla-led-congreso.webp',
        alt: 'Pantalla LED en sala de conferencias y auditorio',
        label: 'Auditorio & Congreso',
      },
      {
        src: '/images/rental/pantalla-led-montaje.webp',
        alt: 'Estructura de montaje y armado de pantalla LED',
        label: 'Montaje de pantalla LED',
      },
      {
        src: '/images/rental/pantalla-led-auditorio.webp',
        alt: 'Pantalla LED en formato panorámico',
        label: 'Formato panorámico',
      },
    ],
  },
  {
    id: 'proyectores-pantallas',
    title: 'Proyectores y pantallas de proyección',
    description: 'Proyectores y pantallas de proyección frontal y retroproyección con trípode o marco para reuniones y eventos.',
    specs: ['Proyectores para presentaciones y eventos', 'Pantallas con marco y trípode', 'Opciones de proyección frontal y trasera', 'Conectividad HDMI y video'],
    iconName: 'Projector',
    image: '/images/rental/proyector-profesional.webp',
    imageAlt: 'Proyector profesional de alta potencia óptica',
    secondaryImage: '/images/rental/proyector-auditorio.webp',
    secondaryImageAlt: 'Proyección institucional sobre pantalla en auditorio',
    gallery: [
      {
        src: '/images/rental/proyector-profesional.webp',
        alt: 'Proyector para presentaciones y eventos',
        label: 'Proyector de eventos',
      },
      {
        src: '/images/rental/proyector-auditorio.webp',
        alt: 'Proyección sobre pantalla en auditorio',
        label: 'Proyección en auditorio',
      },
      {
        src: '/images/rental/proyector-pantalla-tripode.webp',
        alt: 'Pantalla de proyección con trípode',
        label: 'Pantalla con trípode',
      },
      {
        src: '/images/rental/proyector-pantalla-marco.webp',
        alt: 'Pantalla de proyección con marco',
        label: 'Pantalla con marco',
      },
      {
        src: '/images/rental/proyector-evento-corporativo.webp',
        alt: 'Proyector y pantalla instalados en evento corporativo',
        label: 'Evento corporativo',
      },
    ],
  },
  {
    id: 'smart-tvs-soportes',
    title: 'Smart TVs y soportes',
    description: 'Pantallas de diversas medidas con soportes móviles de pie o de pared para stands, salas de reuniones y acreditaciones.',
    specs: ['Smart TVs para eventos y stands', 'Soportes de pie rodantes', 'Soportes de mesa y pared', 'Conexión HDMI y adaptadores'],
    iconName: 'Monitor',
    image: '/images/rental/smart-tv-soporte-pie.webp',
    imageAlt: 'Smart TV en soporte de pie móvil para exposiciones',
    secondaryImage: '/images/rental/smart-tv-pedestal.webp',
    secondaryImageAlt: 'Smart TV sobre pedestal de pie metálico para reuniones',
    gallery: [
      {
        src: '/images/rental/smart-tv-soporte-pie.webp',
        alt: 'Smart TV en soporte de pie móvil',
        label: 'Soporte móvil de pie',
      },
      {
        src: '/images/rental/smart-tv-pedestal.webp',
        alt: 'Smart TV sobre soporte pedestal para reuniones',
        label: 'Pedestal metálico',
      },
      {
        src: '/images/rental/smart-tv-soporte-movil.webp',
        alt: 'Smart TV en soporte rodante para eventos',
        label: 'Soporte rodante',
      },
      {
        src: '/images/rental/smart-tv-stand-expo.webp',
        alt: 'Smart TV instalada en stand de exposición',
        label: 'Stand de exposición',
      },
      {
        src: '/images/rental/smart-tv-acreditacion.webp',
        alt: 'Pantalla sobre soporte para área de recepción y acreditación',
        label: 'Acreditación & Recepción',
      },
    ],
  },
  {
    id: 'starlink',
    title: 'Internet satelital Starlink',
    description: 'Kits de internet satelital para eventos, transmisiones y producción en locaciones con conectividad limitada.',
    specs: ['Antena satelital Starlink', 'Router Wi-Fi', 'Conectividad para acreditaciones y producción', 'Cables y accesorios de conexión'],
    iconName: 'Wifi',
    image: '/images/rental/starlink-kit-evento.webp',
    imageAlt: 'Kit de internet satelital Starlink para eventos',
    gallery: [
      {
        src: '/images/rental/starlink-kit-evento.webp',
        alt: 'Kit de internet satelital Starlink para eventos',
        label: 'Kit satelital en valija',
      },
      {
        src: '/images/services/starlink-instalacion-exterior.webp',
        alt: 'Antena Starlink montada en exterior para cobertura',
        label: 'Antena exterior',
      },
      {
        src: '/images/rental/starlink-antena-router.webp',
        alt: 'Antena y router satelital para eventos',
        label: 'Antena & Router',
      },
      {
        src: '/images/rental/starlink-operacion-conectividad.webp',
        alt: 'Puesto de conectividad y red en locación',
        label: 'Conectividad en locación',
      },
    ],
  },
  {
    id: 'streaming-broadcast',
    title: 'Streaming & Video',
    description: 'Equipamiento para transmisiones en vivo, switchers de video y captura de señal para eventos presenciales e híbridos.',
    specs: ['Cámaras para transmisión', 'Switchers de video', 'Equipos de codificación y streaming', 'Monitoreo de señal'],
    iconName: 'Radio',
    image: '/images/services/streaming-operadores.webp',
    imageAlt: 'Operadores en consola y switcher de streaming en vivo',
    gallery: [
      {
        src: '/images/services/streaming-operadores.webp',
        alt: 'Operadores en consola y switcher de transmisión',
        label: 'Operación de streaming',
      },
      {
        src: '/images/rental/streaming-consola-multiview.webp',
        alt: 'Consola de transmisión con monitores de vista múltiple',
        label: 'Monitoreo multiview',
      },
      {
        src: '/images/rental/streaming-set-vivo.webp',
        alt: 'Set de transmisión y conmutación de video',
        label: 'Set de transmisión',
      },
      {
        src: '/images/rental/streaming-switcher-broadcast.webp',
        alt: 'Switcher y control de video para transmisión',
        label: 'Switcher de video',
      },
    ],
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
    image: '/images/rental/consola-playstation-5.webp',
    imageAlt: 'Consola PlayStation 5 con mando para activaciones',
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
    image: '/images/rental/traduccion-auriculares.webp',
    imageAlt: 'Central de traducción simultánea multicanal y auriculares',
    gallery: [
      {
        src: '/images/rental/traduccion-auriculares.webp',
        alt: 'Central de traducción y receptores de audio',
        label: 'Receptores & Central',
      },
      {
        src: '/images/services/traduccion-simultanea-oei.webp',
        alt: 'Equipamiento de traducción en conferencia internacional',
        label: 'Conferencia internacional',
      },
      {
        src: '/images/rental/traduccion-consola-interprete.webp',
        alt: 'Consola de audio y micrófono para intérpretes',
        label: 'Consola para intérpretes',
      },
      {
        src: '/images/rental/traduccion-cabina-insonorizada.webp',
        alt: 'Cabina para intérpretes en sala de conferencias',
        label: 'Cabina para intérpretes',
      },
    ],
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
    image: '/images/services/streaming-operadores.webp',
    imageAlt: 'Operadores técnicos en consolas de transmisión y streaming en vivo',
  },
  {
    id: 'estudio-tv',
    title: 'Estudio de TV & Producción Virtual',
    subtitle: 'Set profesional y control técnico',
    description: 'Estudio equipado con ciclorama verde, iluminación, control técnico y operación audiovisual para grabaciones, streaming y producciones virtuales.',
    specs: ['Ciclorama verde continuo', 'Iluminación de estudio y control técnico', 'Monitoreo técnico en vivo', 'Camarines y área técnica'],
    iconName: 'Camera',
    image: '/images/studio/studio-control-room.webp',
    imageAlt: 'Dirección técnica y control room de estudio de TV en vivo',
    href: '/estudio-tv',
  },
  {
    id: 'traduccion',
    title: 'Traducción Simultánea',
    subtitle: 'Conferencias multilingües',
    description: 'Equipamiento para interpretación simultánea en congresos y conferencias corporativas con cabinas y receptores para la audiencia.',
    specs: ['Cabinas para intérpretes', 'Receptores de audio para asistentes', 'Consolas y micrófonos de interpretación', 'Distribución de señal de audio'],
    iconName: 'Headphones',
    image: '/images/services/traduccion-simultanea-oei.webp',
    imageAlt: 'Cumbre internacional con equipamiento de traducción simultánea OEI',
  },
  {
    id: 'starlink',
    title: 'Internet Satelital / Starlink',
    subtitle: 'Conectividad en locación',
    description: 'Provisión de internet satelital para eventos, transmisiones y acreditaciones en espacios con conectividad limitada.',
    specs: ['Antena satelital Starlink', 'Distribución de red Wi-Fi en el lugar', 'Conexión para acreditaciones y técnica', 'Puesta en funcionamiento en el evento'],
    iconName: 'Wifi',
    image: '/images/services/starlink-instalacion-exterior.webp',
    imageAlt: 'Antena Starlink montada en exterior para cobertura de eventos',
  },
  {
    id: 'escenarios-tarimas-vallas',
    title: 'Escenarios, Tarimas & Vallas',
    subtitle: 'Infraestructura de montaje',
    description: 'Montaje de escenarios, tarimas modulares y vallado para actos corporativos, conferencias y espectáculos.',
    specs: ['Tarimas modulares para escenario', 'Escenarios para actos y conferencias', 'Vallas de delimitación perimetral', 'Escaleras y accesorios de acceso'],
    iconName: 'Layers',
    image: '/images/services/escenario-tarima-acde.webp',
    imageAlt: 'Tarima modular alfombrada con atril institucional en convención ACDE',
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
    image: '/images/services/produccion-backstage.webp',
    imageAlt: 'Backstage de producción técnica con monitores de control y cableado',
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
    image: '/images/installations/audio-rack-showroom.webp',
    imageAlt: 'Racks de procesamiento y equipamiento de audio Hi-Fi en showroom',
    imageLabel: 'Equipamiento en exhibición',
  },
  {
    id: 'domotica-automatizacion',
    title: 'Domótica & Automatización',
    subtitle: 'Automatización de espacios',
    description: 'Integración de sistemas de automatización para iluminación, audio distribuido y control ambiental en oficinas y salas corporativas.',
    specs: ['Automatización de iluminación', 'Integración de audio en diferentes ambientes', 'Control ambiental y cortinados', 'Sistemas de control centralizado'],
    iconName: 'Cpu',
    image: '/images/installations/pantalla-proyeccion-instalada.webp',
    imageAlt: 'Pantalla retráctil motorizada instalada en salón polivalente',
    imageLabel: 'Sistemas motorizados',
  },
  {
    id: 'camaras-seguridad',
    title: 'Cámaras de Seguridad (CCTV)',
    subtitle: 'Sistemas de videovigilancia',
    description: 'Instalación de circuitos cerrados de televisión y cámaras de seguridad para oficinas, depósitos, locales y predios comerciales.',
    specs: ['Cámaras para interior y exterior', 'Equipos de grabación de video', 'Instalación y cableado del sistema', 'Puesta en marcha y configuración'],
    iconName: 'Camera',
    image: '/images/installations/seguridad-cctv-showroom.webp',
    imageAlt: 'Panel de exhibición de cámaras de seguridad y videoporteros en showroom',
    imageLabel: 'Soluciones de seguridad',
  },
  {
    id: 'control-acceso',
    title: 'Control de Acceso & Cerraduras Biométricas',
    subtitle: 'Sistemas de acceso y seguridad',
    description: 'Instalación de cerraduras electrónicas, lectores biométricos y sistemas de control de ingreso para oficinas y sectores restringidos.',
    specs: ['Cerraduras electrónicas y digitales', 'Lectores biométricos de huella', 'Dispositivos de apertura y pulsadores', 'Instalación y configuración del punto de acceso'],
    iconName: 'ShieldCheck',
    image: '/images/installations/soportes-pantallas-showroom.webp',
    imageAlt: 'Sistemas de fijación y soportes técnicos en exhibición',
    imageLabel: 'Soportes e integración',
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
