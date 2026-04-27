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
  diagnose: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7',
  architecture: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m12 0V5a2 2 0 00-2-2H7a2 2 0 00-2 2v2m12 0H5',
  build: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z',
  optimization: 'M13 10V3L4 14h7v7l9-11h-7z',
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
