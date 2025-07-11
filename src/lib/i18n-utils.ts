import { locales, defaultLocale } from '@/i18n/config';

export function generateAlternateLanguageUrls(path: string) {
  const alternateUrls: Record<string, string> = {};

  locales.forEach((locale) => {
    if (locale === defaultLocale) {
      alternateUrls[locale] = `https://aliasvault.net${path}`;
    } else {
      alternateUrls[locale] = `https://aliasvault.net/${locale}${path}`;
    }
  });

  return alternateUrls;
}

export function getCanonicalUrl(path: string, locale: string) {
  if (locale === defaultLocale) {
    return `https://aliasvault.net${path}`;
  }
  return `https://aliasvault.net/${locale}${path}`;
}

export function getLocalizedPath(path: string, locale: string) {
  if (locale === defaultLocale) {
    return path;
  }
  return `/${locale}${path}`;
}
