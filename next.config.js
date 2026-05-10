import createNextIntlPlugin from 'next-intl/plugin';
import { SITE } from './src/config.js';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: SITE.trailingSlash,
  basePath: SITE.basePathname !== '/' ? SITE.basePathname : '',
  poweredByHeader: false,
  
  // In Next 16, 'experimental.ppr' is replaced by 'cacheComponents'
  cacheComponents: true, 

  images: {
    qualities: [50, 75, 90],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'source.unsplash.com' }
    ]
  }
};

// Ensure this points to the correct request file
const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');
export default withNextIntl(nextConfig);