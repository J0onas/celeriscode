export const WHATSAPP_PHONE = '51936625834';
export const WHATSAPP_DISPLAY = '+51 936 625 834';
export const DEFAULT_WHATSAPP_MESSAGE = 'Hola Celeris Code, quiero impulsar mi proyecto.';
export const SITE_NAME = 'Celeris Code';
export const SITE_SLOGAN = 'Engineering Digital Dominance';

export const getWhatsAppUrl = (message = DEFAULT_WHATSAPP_MESSAGE) =>
  `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;

export const ICON_BY_SERVICE = {
  rocket: 'M5 12l5.5 5.5M4 20l5-1 9-9a4 4 0 10-5.66-5.66l-9 9-1 5z',
  layers: 'M12 3l9 4.5-9 4.5-9-4.5L12 3zm-9 9l9 4.5 9-4.5M3 16.5l9 4.5 9-4.5',
  cart: 'M3 4h2l1 10h11l2-7H6M9 20a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z',
  spark: 'M12 3l2.5 5.5L20 11l-5.5 2.5L12 19l-2.5-5.5L4 11l5.5-2.5L12 3z',
} as const;

export const PORTFOLIO_ORDER = [
  'posmart-saas',
  'inperu-landing',
  'turquesa-travel-multipage',
  'el-bambino-menu-digital',
  'zoi-beauty-ecommerce',
] as const;

export const PROJECT_TYPE_LABEL = {
  saas: 'SaaS',
  'landing-page': 'Landing Page',
  multipage: 'Multipage',
  ecommerce: 'Ecommerce',
} as const;

export const SERVICE_TYPE_BY_SLUG = {
  'landing-page': 'landing-page',
  'multipage-corporativa': 'multipage',
  'ecommerce-whatsapp': 'ecommerce',
  'saas-producto-digital': 'saas',
} as const;
