import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'nl'],

  // Used when no locale matches
  defaultLocale: 'en',

  // The default locale is served at the root path without prefix
  // This means /blog shows English content, /nl/blog shows Dutch
  localePrefix: 'as-needed'
});
