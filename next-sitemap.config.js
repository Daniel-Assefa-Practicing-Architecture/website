import { SITE } from './src/config.js';

/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: `${SITE.origin}${SITE.basePathname}`,
  generateRobotsTxt: true,
};

export default config;
