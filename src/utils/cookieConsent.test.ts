import { describe, expect, it } from 'vitest';
import {
  COOKIE_CONSENT_KEY,
  isCookieConsentValue,
  readCookieConsent,
  writeCookieConsent,
} from '~/utils/cookieConsent';

function memoryStorage(seed: Record<string, string> = {}) {
  const store = { ...seed };
  return {
    getItem: (key: string) => (key in store ? store[key] : null),
    setItem: (key: string, value: string) => {
      store[key] = value;
    },
    snapshot: () => store,
  };
}

describe('cookieConsent', () => {
  it('validates consent values', () => {
    expect(isCookieConsentValue('accepted')).toBe(true);
    expect(isCookieConsentValue('rejected')).toBe(true);
    expect(isCookieConsentValue('maybe')).toBe(false);
    expect(isCookieConsentValue(null)).toBe(false);
  });

  it('reads and writes consent through storage', () => {
    const storage = memoryStorage();
    expect(readCookieConsent(null)).toBeNull();
    expect(readCookieConsent(storage)).toBeNull();

    expect(writeCookieConsent('accepted', storage)).toBe(true);
    expect(storage.snapshot()[COOKIE_CONSENT_KEY]).toBe('accepted');
    expect(readCookieConsent(storage)).toBe('accepted');

    expect(writeCookieConsent('rejected', storage)).toBe(true);
    expect(readCookieConsent(storage)).toBe('rejected');
  });
});
