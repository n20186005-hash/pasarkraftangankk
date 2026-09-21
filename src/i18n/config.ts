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
export const GUIDES = ['shopping', 'itinerary'] as const;

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
};

/** Every routable page (root + guides), keyed for canonical / hreflang output. */
export const pagePaths = {
  home: localePaths,
  ...guidePaths,
};

export type PageKey = keyof typeof pagePaths;

export function isLocale(value: unknown): value is Locale {
  return LOCALES.includes(value as Locale);
}
