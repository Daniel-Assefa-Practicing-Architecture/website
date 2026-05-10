'use client';

import { useLocale } from 'next-intl';
import { useEffect } from 'react';

/** Keeps <html lang> in sync after hydration without async root layout IO (needed for Cache Components). */
export default function HtmlLang() {
  const locale = useLocale();

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
