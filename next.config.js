import createNextIntlPlugin from 'next-intl/plugin';
import { SITE } from './src/config.js';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  trailingSlash: SITE.trailingSlash,
  basePath: SITE.basePathname !== '/' ? SITE.basePathname : '',
  poweredByHeader: false,

  // In Next 16, 'experimental.ppr' is replaced by 'cacheComponents'
  cacheComponents: true,

  // Site photos/logos load from S3 via mediaUrl(). Keep unoptimized to avoid
  // /_next/image request storms that CrowdSec often treats as flooding.
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'source.unsplash.com' },
      { protocol: 'https', hostname: 's3.ca-central-1.amazonaws.com', pathname: '/danielgebre.net/**' },
    ],
  },

  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

// Ensure this points to the correct request file
const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');
export default withNextIntl(nextConfig);