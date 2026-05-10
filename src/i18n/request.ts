import {getRequestConfig} from 'next-intl/server';
import { locales } from './routing';

export default getRequestConfig(async ({requestLocale}) => {
  let resolvedLocale = await requestLocale;
  
  if (!resolvedLocale || !locales.includes(resolvedLocale as any)) {
    resolvedLocale = 'en';  // Use string literal or locales[0]
  }
  
  try {
    return {
      locale: resolvedLocale,
      messages: (await import(`../messages/${resolvedLocale}.json`)).default
    };
  } catch (error) {
    console.error(`Failed to load messages for locale: ${resolvedLocale}`, error);
    return { locale: resolvedLocale, messages: {} };
  }
});