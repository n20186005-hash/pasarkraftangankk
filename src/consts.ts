export const SITE = {
  ga4Id: 'G-HXM22WWPKP',
  address:
    '7, Jalan Tun Fuad Stephen, Pusat Bandar Kota Kinabalu, 88000 Kota Kinabalu, Sabah, Malaysia',
  coordinates: {
    lat: 5.981244,
    lng: 116.0670089,
  },
  ratingValue: 4.3,
  reviewCount: 2451,
  priceRange: 'RM',
  mapsUrl: 'https://maps.app.goo.gl/K6efgMeZnt2ZFhii7',
} as const;

export const CONTENT_DATE = {
  published: '2026-09-21',
  modified: '2026-09-21',
} as const;

export const GALLERY: string[] = Array.from({ length: 20 }, (_, i) =>
  `/gallery/handicraft-market-${String(i + 1).padStart(2, '0')}.jpg`
);
