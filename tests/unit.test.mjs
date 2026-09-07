import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { isAmharic, pick } from '../src/shared/data/locale.ts';
import { mediaUrl, S3_IMAGES_BASE } from '../src/shared/data/media.ts';
import {
  COOKIE_CONSENT_KEY,
  isCookieConsentValue,
  readCookieConsent,
  writeCookieConsent,
} from '../src/utils/cookieConsent.ts';

describe('locale helpers', () => {
  it('detects Amharic locale', () => {
    assert.equal(isAmharic('am'), true);
    assert.equal(isAmharic('en'), false);
    assert.equal(isAmharic(undefined), false);
  });

  it('picks Amharic or English copy by locale', () => {
    assert.equal(pick('en', 'Hello', 'ሰላም'), 'Hello');
    assert.equal(pick('am', 'Hello', 'ሰላም'), 'ሰላም');
    assert.equal(pick(undefined, 'Hello', 'ሰላም'), 'Hello');
  });
});

describe('mediaUrl', () => {
  it('maps /images paths to the S3 bucket', () => {
    assert.equal(mediaUrl('/images/bole-med.png'), `${S3_IMAGES_BASE}/bole-med.png`);
    assert.equal(mediaUrl('images/church.jpg'), `${S3_IMAGES_BASE}/church.jpg`);
  });

  it('encodes folder names with spaces', () => {
    assert.equal(
      mediaUrl('/images/projects/assembly hall/1.jpg'),
      `${S3_IMAGES_BASE}/projects/assembly%20hall/1.jpg`,
    );
  });

  it('leaves absolute URLs unchanged', () => {
    const absolute = `${S3_IMAGES_BASE}/logos/dd.png`;
    assert.equal(mediaUrl(absolute), absolute);
  });
});

describe('cookieConsent', () => {
  function memoryStorage(seed = {}) {
    const store = { ...seed };
    return {
      getItem: (key) => (key in store ? store[key] : null),
      setItem: (key, value) => {
        store[key] = value;
      },
      snapshot: () => store,
    };
  }

  it('validates consent values', () => {
    assert.equal(isCookieConsentValue('accepted'), true);
    assert.equal(isCookieConsentValue('rejected'), true);
    assert.equal(isCookieConsentValue('maybe'), false);
    assert.equal(isCookieConsentValue(null), false);
  });

  it('reads and writes consent through storage', () => {
    const storage = memoryStorage();
    assert.equal(readCookieConsent(null), null);
    assert.equal(readCookieConsent(storage), null);
    assert.equal(writeCookieConsent('accepted', storage), true);
    assert.equal(storage.snapshot()[COOKIE_CONSENT_KEY], 'accepted');
    assert.equal(readCookieConsent(storage), 'accepted');
    assert.equal(writeCookieConsent('rejected', storage), true);
    assert.equal(readCookieConsent(storage), 'rejected');
  });
});
