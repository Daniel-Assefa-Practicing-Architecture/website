'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '~/i18n/navigation';
import { readCookieConsent, writeCookieConsent, type CookieConsentValue } from '~/utils/cookieConsent';

const CookieConsent = () => {
  const t = useTranslations('Cookie');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(readCookieConsent(window.localStorage) === null);
  }, []);

  const choose = (value: CookieConsentValue) => {
    writeCookieConsent(value, window.localStorage);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-copy"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-stone-200 bg-white/95 p-4 shadow-2xl backdrop-blur dark:border-slate-700 dark:bg-slate-900/95"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="max-w-3xl">
          <h2 id="cookie-consent-title" className="text-base font-semibold text-gray-900 dark:text-white">
            {t('title')}
          </h2>
          <p id="cookie-consent-copy" className="mt-1 text-sm text-gray-600 dark:text-slate-300">
            {t('body')}{' '}
            <Link href="/privacy" className="font-medium text-primary-700 underline dark:text-primary-300">
              {t('privacy')}
            </Link>
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button type="button" className="btn" onClick={() => choose('rejected')}>
            {t('reject')}
          </button>
          <button type="button" className="btn btn-primary" onClick={() => choose('accepted')}>
            {t('accept')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
