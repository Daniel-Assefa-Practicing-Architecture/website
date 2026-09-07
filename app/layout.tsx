import '~/assets/styles/base.css';

import { Metadata } from 'next';
import { Fraunces, Source_Sans_3 } from 'next/font/google';
import Script from 'next/script';

import { THEME_STORAGE_KEY } from '~/constants/theme';
import { defaultLocale } from '~/i18n/routing';
import { SITE } from '~/config.js';

/** Mirrors `readPreferredTheme` in Providers — avoids FOUC without ThemeProvider injecting `<script>` in client trees (React 19). */
function themeBootstrapScript(storageKey: string) {
  return `!function(){try{var k=${JSON.stringify(storageKey)},v=localStorage.getItem(k),d=v==="dark"||(v!=="light"&&window.matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.classList.toggle("dark",d);}catch(e){}}();`;
}

const fraunces = Fraunces({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-fraunces',
  display: 'swap',
});

const sourceSans = Source_Sans_3({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-source-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={defaultLocale} suppressHydrationWarning>
      <body className={`antialiased ${fraunces.variable} ${sourceSans.variable} font-sans`} suppressHydrationWarning>
        <Script
          id="theme-bootstrap"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeBootstrapScript(THEME_STORAGE_KEY) }}
        />
        {children}
      </body>
    </html>
  );
}
