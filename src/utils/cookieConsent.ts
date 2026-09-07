export const COOKIE_CONSENT_KEY = 'site-cookie-consent';

export type CookieConsentValue = 'accepted' | 'rejected';

export type ConsentStorage = Pick<Storage, 'getItem' | 'setItem'>;

export function isCookieConsentValue(value: string | null): value is CookieConsentValue {
  return value === 'accepted' || value === 'rejected';
}

export function readCookieConsent(storage?: ConsentStorage | null): CookieConsentValue | null {
  if (!storage) return null;
  try {
    const value = storage.getItem(COOKIE_CONSENT_KEY);
    return isCookieConsentValue(value) ? value : null;
  } catch {
    return null;
  }
}

export function writeCookieConsent(value: CookieConsentValue, storage?: ConsentStorage | null): boolean {
  if (!storage || !isCookieConsentValue(value)) return false;
  try {
    storage.setItem(COOKIE_CONSENT_KEY, value);
    return true;
  } catch {
    return false;
  }
}
