import { ICON_BY_SERVICE } from './site-config';

const HOME_SERVICE_MEDIA = {
  'landing-page': {
    image: '/assets/blog/landing-conversion.webp',
    alt: 'Diseño de landing pages de alta conversión',
    focus: 'Captación de leads',
  },
  'multipage-corporativa': {
    image: '/assets/projects/turquesa.webp',
    alt: 'Sitio multipage corporativo con arquitectura escalable',
    focus: 'Autoridad de marca',
  },
  'ecommerce-whatsapp': {
    image: '/assets/blog/ecommerce-whatsapp.webp',
    alt: 'Ecommerce con experiencia de compra optimizada para WhatsApp',
    focus: 'Conversión comercial',
  },
  'saas-producto-digital': {
    image: '/assets/projects/posmart.webp',
    alt: 'Producto SaaS con panel administrativo y experiencia operativa',
    focus: 'Escalabilidad de producto',
  },
} as const;

const LIST_SERVICE_MEDIA = {
  'landing-page': {
    image: '/assets/blog/landing-conversion.webp',
    alt: 'Diseño de landing pages de alta conversión',
    metric: 'Captación de leads',
  },
  'multipage-corporativa': {
    image: '/assets/projects/turquesa.webp',
    alt: 'Sitio multipage corporativo con arquitectura clara',
    metric: 'Autoridad digital',
  },
  'ecommerce-whatsapp': {
    image: '/assets/blog/ecommerce-whatsapp.webp',
    alt: 'Ecommerce con checkout por WhatsApp',
    metric: 'Conversión comercial',
  },
  'saas-producto-digital': {
    image: '/assets/projects/posmart.webp',
    alt: 'Plataforma SaaS enfocada en operación',
    metric: 'Escalabilidad de producto',
  },
} as const;

const DETAIL_SERVICE_VISUALS = {
  'landing-page': {
    hero: '/assets/blog/landing-conversion.webp',
    secondary: '/assets/projects/inperu.webp',
    alt: 'Landing page de alta conversión con propuesta clara y CTA fuerte',
    badge: 'Captación y conversión',
  },
  'multipage-corporativa': {
    hero: '/assets/projects/turquesa.webp',
    secondary: '/assets/blog/minimalismo-conversion.webp',
    alt: 'Sitio multipage con navegación clara y arquitectura de contenidos',
    badge: 'Autoridad de marca',
  },
  'ecommerce-whatsapp': {
    hero: '/assets/blog/ecommerce-whatsapp.webp',
    secondary: '/assets/projects/zoibeauty.webp',
    alt: 'Ecommerce con catálogo visual y cierre comercial en WhatsApp',
    badge: 'Venta digital asistida',
  },
  'saas-producto-digital': {
    hero: '/assets/projects/posmart.webp',
    secondary: '/assets/projects/posmart.webp',
    alt: 'Plataforma SaaS con foco en operación, panel y escalabilidad',
    badge: 'Producto escalable',
  },
} as const;

export type ServiceSlug = keyof typeof HOME_SERVICE_MEDIA;

export const SERVICE_HOME_MEDIA = HOME_SERVICE_MEDIA;
export const SERVICE_LIST_MEDIA = LIST_SERVICE_MEDIA;
export const SERVICE_DETAIL_VISUALS = DETAIL_SERVICE_VISUALS;

export const getServiceIcon = (icon?: string) => {
  const iconKey = (icon ?? 'spark') as keyof typeof ICON_BY_SERVICE;
  return ICON_BY_SERVICE[iconKey] ?? ICON_BY_SERVICE.spark;
};
