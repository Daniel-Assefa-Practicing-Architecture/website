import { describe, expect, it } from 'vitest';
import { mediaUrl, S3_IMAGES_BASE } from '~/shared/data/media';

describe('mediaUrl', () => {
  it('maps /images paths to the S3 bucket', () => {
    expect(mediaUrl('/images/bole-med.png')).toBe(`${S3_IMAGES_BASE}/bole-med.png`);
    expect(mediaUrl('images/church.jpg')).toBe(`${S3_IMAGES_BASE}/church.jpg`);
  });

  it('encodes folder names with spaces', () => {
    expect(mediaUrl('/images/projects/assembly hall/1.jpg')).toBe(
      `${S3_IMAGES_BASE}/projects/assembly%20hall/1.jpg`,
    );
  });

  it('leaves absolute URLs unchanged', () => {
    const absolute = `${S3_IMAGES_BASE}/logos/dd.png`;
    expect(mediaUrl(absolute)).toBe(absolute);
  });
});
