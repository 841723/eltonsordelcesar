export type BusinessImage = {
  src: string;
  alt: string;
  source: string;
  originalUrl: string;
  provisional: true;
};

export const business = {
  // El nombre está confirmado; los datos de contacto siguen pendientes.
  name: 'El Tonsor del Cesar',
  shortName: 'BARBERÍA',
  tagline: 'Cortes con carácter, trato de siempre.',
  description: 'Un corte bien hecho, buena conversación y un rato para ti.',
  amenityNote: 'Y si te apetece alargar la visita, también hay billar y dardos.',
  address: 'Calle Hermanos Buisán, 12, 50830 Villanueva de Gállego, Zaragoza',
  phone: '+34 640 782 798',
  bookingUrl: 'https://eltonsordelcesar.indigosalones.com/eltonsordelcesar',
  mapsUrl: 'https://www.google.com/maps/place/BARBERIA+El+Tonsor+del+C%C3%A9sar./@41.7677193,-0.8228353,816m/data=!3m2!1e3!4b1!4m6!3m5!1s0xd590fe6e2136b1d:0xfb224644131b3a0d!8m2!3d41.7677193!4d-0.8228353!16s%2Fg%2F11sn_3nfl4?entry=ttu&g_ep=EgoyMDI2MTEwMS4wIKXMDSoASAFQAw%3D%3D',
  social: [] as { label: string; url: string }[],
  mediaNote: 'Fotografía provisional · sustituir por imágenes propias de El Tonsor del Cesar.',
  media: {
    hero: {
      src: '/media/images/hero.webp',
      alt: '',
      source: 'Unsplash · photo-1622286342621-4bd786c2447c',
      originalUrl: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c',
      provisional: true,
    },
    gallery: [
      {
        src: '/media/images/fade.webp',
        alt: 'Detalle de un corte degradado realizado con precisión.',
        source: 'Unsplash · photo-1599351431202-1e0f0137899a',
        originalUrl: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a',
        provisional: true,
      },
      {
        src: '/media/images/shave.webp',
        alt: 'Arreglo de barba con tijera durante un servicio de barbería.',
        source: 'Unsplash · photo-1503951914875-452162b0f3f1',
        originalUrl: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1',
        provisional: true,
      },
      {
        src: '/media/images/tools.webp',
        alt: 'Herramientas de barbería dispuestas sobre una mesa de trabajo.',
        source: 'Unsplash · photo-1621605815971-fbc98d665033',
        originalUrl: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033',
        provisional: true,
      },
    ] satisfies BusinessImage[],
  },
} as const;

export const hasBooking = Boolean(business.bookingUrl.trim());
export const hasPhone = Boolean(business.phone.trim());
export const hasAddress = Boolean(business.address.trim());
