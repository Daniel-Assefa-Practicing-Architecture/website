/** Public media hosted on S3 (same paths as former /images/*). */
export const S3_IMAGES_BASE = 'https://s3.ca-central-1.amazonaws.com/danielgebre.net/images';

/**
 * Map a local `/images/...` path (or already-absolute URL) to the S3 object URL.
 * Path segments are encoded so folders like `assembly hall` work.
 */
export function mediaUrl(path: string): string {
  if (!path) return path;
  if (/^https?:\/\//i.test(path)) return path;

  const relative = path.replace(/^\/+/, '').replace(/^images\//, '');
  const encoded = relative
    .split('/')
    .filter(Boolean)
    .map((segment) => encodeURIComponent(segment))
    .join('/');

  return `${S3_IMAGES_BASE}/${encoded}`;
}
