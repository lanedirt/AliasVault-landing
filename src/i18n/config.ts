export const locales = ['en', 'nl'] as const;
export const defaultLocale = 'en' as const;

export type Locale = (typeof locales)[number];

export const localeLabels = {
  en: 'English',
  nl: 'Nederlands',
} as const;

export const localeFlags = {
  en: '🇺🇸',
  nl: '🇳🇱',
} as const;
