# Proyecto: MultiPage Agencia de Software Celeris Code

# Celeris Code - Identidad de Marca

- Slogan: "Engineering Digital Dominance"
- Valor: No hacemos webs, construimos activos digitales de alto rendimiento.
- Servicios:
  - Landing Pages: Focadas en conversión ultra-rápida.
  - Multipage: Arquitecturas complejas para marcas en crecimiento.
  - Ecommerce: Tiendas escalables con checkout optimizado.
  - SaaS: Sistemas complejos de gestión y automatización.

# Portafolio Real

1. POSmart: Sistema SaaS de Punto de Venta y Facturación.
2. InPerú: Landing Page corporativa de alto impacto.
3. Turquesa Travel: Plataforma turística multipage en Ayacucho.
4. El Bambino: Menú digital interactivo para gastronomía.
5. Zoibeauty: Ecommerce con integración de ventas vía WhatsApp.

## Stack de Alto Rendimiento

- Framework: Astro 5.x (Hybrid Rendering)
- Estilos: Tailwind CSS 4.x (Zero-runtime, @theme primary colors)
- Interactividad: React 19 (Solo donde sea estrictamente necesario - Islas)
- Contenido: Astro Content Collections (Markdown/MDX para el blog y casos)
- Despliegue: Vercel Edge Functions

## Convenciones de Desarrollo

- Estructura: /src/components/ui/ (átomos), /src/components/sections/ (organismos)
- Nombramiento: PascalCase para componentes, kebab-case para assets.
- Performance: Imágenes en WebP/Avif con <Image /> de Astro. Carga crítica inlined.
- SEO: Metadata dinámica por página (OpenGraph, Twitter Cards).

## Arquitectura Multipage

/src
/content
/cases/ -> Casos de éxito (proyectos)
/services/ -> Detalle de cada servicio (Web, App, IA)
/layouts - MainLayout.astro (Header/Footer/SEO)
/pages - index.astro (Home) - servicios/index.astro (Catálogo) - servicios/[slug].astro (Páginas dinámicas por servicio) - portafolio/index.astro (Galería de casos) - nosotros.astro (Historia y equipo) - contacto.astro (Lead gen)

## Reglas de Negocio & Estética

- CTA Omnipresente: "Impulsa tu Proyecto" (Header y Final de sección).
- Colores Celeris: Primario: #102A43 (Profundo), #3B82F6 (Vibrante). Acentos: #A855F7.
- Tipografía: Sans-serif moderna (Geist o Inter) con espaciado amplio.
- Estilo: "SaaS-Bento" (Grid de bordes suaves, gradientes sutiles, micro-animaciones).

## Skill de Diseño: "Bento-SaaS Minimalist"

- Usar 'bento-grids' para secciones de beneficios.
- Fondos: Slate-950 con gradientes radiales sutiles en las esquinas.
- Cards: bg-white/5 con backdrop-blur-md y borde de 1px con opacidad baja.
