import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'am'],
  defaultLocale: 'en',
});

export const locales = routing.locales;
export const defaultLocale = routing.defaultLocale;
