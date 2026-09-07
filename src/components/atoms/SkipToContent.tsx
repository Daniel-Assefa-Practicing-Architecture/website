'use client';

import { useTranslations } from 'next-intl';

const SkipToContent = () => {
  const t = useTranslations('A11y');

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:rounded-md focus:bg-primary-700 focus:px-4 focus:py-2 focus:text-white"
    >
      {t('skipToContent')}
    </a>
  );
};

export default SkipToContent;
