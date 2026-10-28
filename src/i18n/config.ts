export const LOCALES = ['ms', 'en', 'zh'] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'ms';

/** Root path of each locale version (used for canonical & hreflang). */
export const localePaths: Record<Locale, string> = {
  ms: '/',
  en: '/en/',
  zh: '/zh/',
};

/** Short display labels for the language switcher. */
export const localeLabels: Record<Locale, string> = {
  ms: 'BM',
  en: 'EN',
  zh: '中文',
};

/** Sub-page guides. Each key maps to one route per locale. */
export const GUIDES = [
  'shopping',
  'itinerary',
  'best-time',
  'airport-to-market',
  'seafood-near-market',
  'atkinson-clock-tower',
  'half-day-itinerary',
] as const;

export type GuideKey = (typeof GUIDES)[number];

/** Path of each guide sub-page per locale (used for canonical & hreflang). */
export const guidePaths: Record<GuideKey, Record<Locale, string>> = {
  shopping: {
    ms: '/apa-yang-boleh-dibeli/',
    en: '/en/what-to-buy/',
    zh: '/zh/bi-mai-ban-shou-li/',
  },
  itinerary: {
    ms: '/rancangan-satu-hari/',
    en: '/en/one-day-itinerary/',
    zh: '/zh/yi-ri-xing-cheng/',
  },
  'best-time': {
    ms: '/masa-terbaik/',
    en: '/en/best-time/',
    zh: '/zh/best-time/',
  },
  'airport-to-market': {
    ms: '/dari-lapangan-terbang/',
    en: '/en/airport-to-market/',
    zh: '/zh/airport-to-market/',
  },
  'seafood-near-market': {
    ms: '/makanan-laut-berdekatan/',
    en: '/en/seafood-near-market/',
    zh: '/zh/seafood-near-market/',
  },
  'atkinson-clock-tower': {
    ms: '/menara-jam-atkinson/',
    en: '/en/atkinson-clock-tower/',
    zh: '/zh/atkinson-clock-tower/',
  },
  'half-day-itinerary': {
    ms: '/rancangan-separuh-hari/',
    en: '/en/half-day-itinerary/',
    zh: '/zh/half-day-itinerary/',
  },
};

/**
 * Topical interlinking: each guide links to a few related guides instead of
 * listing every guide. Keeps the "related" cluster tight and on-topic.
 */
export const GUIDE_RELATED: Record<GuideKey, GuideKey[]> = {
  'best-time': ['airport-to-market', 'seafood-near-market', 'half-day-itinerary', 'atkinson-clock-tower', 'shopping'],
  'airport-to-market': ['best-time', 'half-day-itinerary', 'itinerary', 'shopping'],
  'seafood-near-market': ['best-time', 'half-day-itinerary', 'atkinson-clock-tower', 'shopping', 'itinerary'],
  'atkinson-clock-tower': ['seafood-near-market', 'half-day-itinerary', 'best-time', 'shopping', 'itinerary'],
  'half-day-itinerary': ['best-time', 'airport-to-market', 'seafood-near-market', 'atkinson-clock-tower', 'shopping', 'itinerary'],
  shopping: ['best-time', 'seafood-near-market', 'half-day-itinerary', 'itinerary'],
  itinerary: ['half-day-itinerary', 'best-time', 'seafood-near-market', 'shopping', 'airport-to-market'],
};

/** Grouping for the homepage guide hub (hub-and-spoke internal linking). */
export const GUIDE_MODULES: { id: string; label: Record<Locale, string>; guides: GuideKey[] }[] = [
  {
    id: 'decision',
    label: { ms: 'Keputusan & Panduan', en: 'Visit Decisions', zh: '到访决策' },
    guides: ['best-time', 'airport-to-market'],
  },
  {
    id: 'food',
    label: { ms: 'Makanan & Minuman', en: 'Food & Drink', zh: '周边餐饮' },
    guides: ['seafood-near-market'],
  },
  {
    id: 'attractions',
    label: { ms: 'Tempat Menarik', en: 'Nearby Attractions', zh: '周边景点' },
    guides: ['atkinson-clock-tower'],
  },
  {
    id: 'itinerary',
    label: { ms: 'Rancangan Perjalanan', en: 'Itineraries', zh: '行程组合' },
    guides: ['half-day-itinerary', 'itinerary', 'shopping'],
  },
];

/** Every routable page (root + guides), keyed for canonical / hreflang output. */
export const pagePaths = {
  home: localePaths,
  ...guidePaths,
};

export type PageKey = keyof typeof pagePaths;

export function isLocale(value: unknown): value is Locale {
  return LOCALES.includes(value as Locale);
}
