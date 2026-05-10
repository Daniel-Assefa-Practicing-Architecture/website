'use client';

import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useLocale } from 'next-intl';
import { IconWorld, IconChevronDown } from '@tabler/icons-react';

import { useOnClickOutside } from '~/hooks/useOnClickOutside';
import { usePathname, useRouter } from '~/i18n/navigation';

export const LOCALE_STORAGE_KEY = 'preferred-locale';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'am', name: 'አማርኛ' },
];

function setNextLocaleCookie(locale: string) {
  document.cookie = `NEXT_LOCALE=${encodeURIComponent(locale)}; Path=/; Max-Age=31536000; SameSite=Lax`;
}

const LanguageSelector = () => {
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useOnClickOutside(ref, () => setIsOpen(false));

  useEffect(() => {
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    } catch {
      /* ignore */
    }
  }, [locale]);

  const handleSelect = (code: string) => {
    setIsOpen(false);
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, code);
    } catch {
      /* ignore */
    }
    setNextLocaleCookie(code);

    const query = searchParams.toString();
    const href = query ? `${pathname}?${query}` : pathname;

    router.replace(href, { locale: code });
    router.refresh();
  };

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
        aria-label="Select Language"
        aria-expanded={isOpen}
      >
        <IconWorld className="h-5 w-5" />
        <IconChevronDown className={`ml-1 h-3 w-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="absolute right-0 z-50 mt-2 w-36 rounded-md border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-slate-900">
          {languages.map((lang) => (
            <button
              type="button"
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className={`block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 ${
                locale === lang.code ? 'bg-gray-50 dark:bg-gray-800' : ''
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
