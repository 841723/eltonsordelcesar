export type BusinessImage = {
  src: string;
  alt: string;
  source: string;
  originalUrl: string;
  provisional: boolean;
};

const baseUrl = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;
export const publicAssetPath = (file: string) => `${baseUrl}${file}`;
const mediaPath = (file: string) => publicAssetPath(`media/images/${file}`);

export const business = {
  // Datos de marca, contacto y medios centralizados para facilitar su edición.
  name: 'El Tonsor del Cesar',
  shortName: 'BARBERÍA',
  location: 'Villanueva de Gállego',
  logos: {
    onLight: publicAssetPath('media/logos/cesar_letras.svg'),
    onDark: publicAssetPath('media/logos/cesar_letras_blanco.svg'),
  },
  favicon: {
    onLight: publicAssetPath('media/logos/tijeras_negras.svg'),
    onDark: publicAssetPath('media/logos/tijeras_blancas.svg'),
  },
  tagline: 'Cortes con carácter, trato de siempre.',
  amenityNote: 'Billar y dardos para quien quiera echar una partida después de su cita.',
  address: 'C. Hermanos Buisán 12, Villanueva de Gállego, Zaragoza',
  phone: '+34 640 782 798',
  bookingUrl: 'https://eltonsordelcesar.indigosalones.com/eltonsordelcesar',
  mapsUrl: 'https://www.google.com/maps/place/BARBERIA+El+Tonsor+del+C%C3%A9sar./@41.7677193,-0.8228353,816m/data=!3m2!1e3!4b1!4m6!3m5!1s0xd590fe6e2136b1d:0xfb224644131b3a0d!8m2!3d41.7677193!4d-0.8228353!16s%2Fg%2F11sn_3nfl4?entry=ttu&g_ep=EgoyMDI2MTEwMS4wIKXMDSoASAFQAw%3D%3D',
  social: [] as { label: string; url: string }[],
  // mediaNote: 'Imágenes propias de El Tonsor del Cesar.',
  media: {
    hero: {
      src: mediaPath('hero.webp'),
      alt: '',
      source: 'Unsplash · photo-1622286342621-4bd786c2447c',
      originalUrl: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c',
      provisional: true,
    },
    contactBackground: {
      src: mediaPath('9302952389.jpg'),
      alt: '',
      source: '',
      originalUrl: '',
      provisional: false,
    },
    billiards: {
      src: mediaPath('7328758273950.jpg'),
      alt: 'Mesa de billar dentro de El Tonsor del Cesar.',
      source: 'Fotografía proporcionada por El Tonsor del Cesar',
      originalUrl: '',
      provisional: false,
    },
    gallery: [
      {
        src: mediaPath('fade.webp'),
        alt: 'Detalle de un corte degradado realizado con precisión.',
        source: 'Unsplash · photo-1599351431202-1e0f0137899a',
        originalUrl: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a',
        provisional: true,
      },
      {
        src: mediaPath('shave.webp'),
        alt: 'Arreglo de barba con tijera durante un servicio de barbería.',
        source: 'Unsplash · photo-1503951914875-452162b0f3f1',
        originalUrl: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1',
        provisional: true,
      },
      {
        src: mediaPath('374589278537029875.jpg'),
        alt: 'Herramientas de barbería dispuestas sobre una mesa de trabajo.',
        source: '',
        originalUrl: '',
        provisional: false,
      },
      {
        src: mediaPath('18923854093285.jpg'),
        alt: 'Barbero de El Tonsor del Cesar con la camiseta de la barbería.',
        source: 'Fotografía proporcionada por El Tonsor del Cesar',
        originalUrl: '',
        provisional: false,
      },
    ] satisfies BusinessImage[],
  },
} as const;

export const hasBooking = Boolean(business.bookingUrl.trim());
export const hasPhone = Boolean(business.phone.trim());
export const hasAddress = Boolean(business.address.trim());
