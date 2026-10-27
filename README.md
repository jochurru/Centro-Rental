# Centro Rental 2.0

Plataforma web y catálogo técnico institucional de Centro Rental: equipamiento audiovisual, sonido profesional, iluminación escénica, pantallas LED, producción integral, instalaciones fijas y estudio de TV.

## Stack Tecnológico

- **Framework**: [Next.js 16](https://nextjs.org) (App Router)
- **Biblioteca UI**: [React 19](https://react.dev)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org)
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com)
- **Iconografía**: [Lucide React](https://lucide.dev)
- **Gestor de Paquetes**: [pnpm](https://pnpm.io)

## Arquitectura de Rutas

| Ruta | Descripción |
|---|---|
| `/` | Portada institucional y resumen operativo de unidades de negocio |
| `/alquiler` | Catálogo de equipamiento y galerías técnicas por categoría |
| `/servicios` | Servicios técnicos especializados y producción de eventos |
| `/estudio-tv` | Estudio de TV, ciclorama y producción virtual |
| `/instalaciones` | Obras, integración e instalaciones fijas de audio y video |
| `/eventos` | Registro fotográfico y técnico de coberturas realizadas |
| `/venta` | Equipamiento audiovisual nuevo y de ocasión verificado |
| `/clientes` | Clientes corporativos, instituciones y marcas atendidas |
| `/nosotros` | Trayectoria institucional, equipo técnico e infraestructura |
| `/contacto` | Canales de atención directa y solicitud de cotizaciones |

## Estructura del Proyecto

```text
├── app/                  # Rutas, layouts y páginas (Next.js App Router)
│   ├── globals.css       # Tokens de diseño, gradientes y directivas CSS
│   └── layout.tsx        # Shell global, header, footer y metadatos
├── components/           # Componentes modulares organizados por ámbito
│   ├── common/           # Componentes transversales (GlowButton, PageHero, etc.)
│   ├── rental/           # Componentes del catálogo y galería interactiva
│   └── sections/         # Secciones de contenido y bloques funcionales
├── data/                 # Modelos de datos y contenido estructurado (site.ts)
├── lib/                  # Utilidades compartidas (cn, helpers)
└── public/               # Assets estáticos optimizados (imágenes, logos de marca)
    ├── brand/            # Activos institucionales de identidad y logotipo
    ├── events/           # Fotografías de coberturas técnicas
    ├── images/           # Activos fotográficos de catálogo y servicios
    └── services/         # Imágenes de servicios especializados
```

## Desarrollo Local

1. Instalar dependencias:
```bash
pnpm install
```

2. Iniciar servidor de desarrollo:
```bash
pnpm dev
```
La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

3. Verificación de tipos TypeScript:
```bash
npx tsc --noEmit
```

4. Compilar para producción:
```bash
pnpm build
```

5. Ejecutar compilación de producción:
```bash
pnpm start
```
