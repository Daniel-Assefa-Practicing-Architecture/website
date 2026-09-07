export type LocaleCode = 'en' | 'am';

export function isAmharic(locale?: string): boolean {
  return locale === 'am';
}

export function pick<T>(locale: string | undefined, en: T, am: T): T {
  return isAmharic(locale) ? am : en;
}
