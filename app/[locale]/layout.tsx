import { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import { SITE } from '~/config.js';

import HtmlLang from '~/components/atoms/HtmlLang';
import Providers from '~/components/atoms/Providers';
import Header from '~/components/widgets/Header';
import Footer2 from '~/components/widgets/Footer2';
import SkipToContent from '~/components/atoms/SkipToContent';
import CookieConsent from '~/components/widgets/CookieConsent';
import BackToTop from '~/components/atoms/BackToTop';

import { Suspense } from 'react';

export interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    template: `%s - ${SITE.name}`,
    default: SITE.title,
  },
  description: SITE.description,
};


// 1. AppContent waits for the params inside the Suspense boundary
async function AppContent({ 
  children, 
  params 
}: { 
  children: React.ReactNode, 
  params: Promise<{ locale: string }> 
}) {
  // Accessing runtime data (params) here is safe because it's inside Suspense
  const { locale } = await params; 
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

// 2. RootLayout stays synchronous and "thin"
export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  return (
    <Suspense fallback={<div className="fixed inset-0 bg-white dark:bg-slate-900" />}>
      <AppContent params={params}>{children}</AppContent>
    </Suspense>
  );
}