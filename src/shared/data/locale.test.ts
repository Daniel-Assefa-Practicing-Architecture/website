import { describe, expect, it } from 'vitest';
import { isAmharic, pick } from '~/shared/data/locale';

describe('locale helpers', () => {
  it('detects Amharic locale', () => {
    expect(isAmharic('am')).toBe(true);
    expect(isAmharic('en')).toBe(false);
    expect(isAmharic(undefined)).toBe(false);
  });

  it('picks Amharic or English copy by locale', () => {
    expect(pick('en', 'Hello', 'ሰላም')).toBe('Hello');
    expect(pick('am', 'Hello', 'ሰላም')).toBe('ሰላም');
    expect(pick(undefined, 'Hello', 'ሰላም')).toBe('Hello');
  });
});
