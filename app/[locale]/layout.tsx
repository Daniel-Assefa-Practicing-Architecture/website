import { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { Suspense } from 'react';

import { SITE } from '~/config.js';
import HtmlLang from '~/components/atoms/HtmlLang';
import Providers from '~/components/atoms/Providers';
import Header from '~/components/widgets/Header';
import Footer2 from '~/components/widgets/Footer2';
import SkipToContent from '~/components/atoms/SkipToContent';
import CookieConsent from '~/components/widgets/CookieConsent';
import BackToTop from '~/components/atoms/BackToTop';
import { routing } from '~/i18n/routing';

export const metadata: Metadata = {
  title: {
    template: `%s - ${SITE.name}`,
    default: SITE.title,
  },
  description: SITE.description,
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

/** Keep chrome shape visible while locale messages stream in. */
function ChromeFallback() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <div
        className="sticky top-0 z-40 h-[4.75rem] border-b border-gray-200 bg-white/90 dark:border-slate-700 dark:bg-slate-900/90"
        aria-hidden
      />
      <main id="main-content" className="min-h-[50vh]" />
      <div className="h-36 border-t border-gray-200 dark:border-slate-700" aria-hidden />
    </div>
  );
}

async function AppContent({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <HtmlLang />
      <Providers>
        <SkipToContent />
        <Header />
        <main id="main-content">{children}</main>
        <Footer2 />
        <CookieConsent />
        <BackToTop />
      </Providers>
    </NextIntlClientProvider>
  );
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  return (
    <Suspense fallback={<ChromeFallback />}>
      <AppContent params={params}>{children}</AppContent>
    </Suspense>
  );
}
