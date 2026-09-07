'use client';

import { IconArrowUp } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

const BackToTop = () => {
  const t = useTranslations('A11y');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label={t('backToTop')}
      className="fixed bottom-24 right-4 z-40 rounded-full bg-primary-700 p-3 text-white shadow-lg hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-200 md:bottom-8"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <IconArrowUp className="h-5 w-5" />
    </button>
  );
};

export default BackToTop;
