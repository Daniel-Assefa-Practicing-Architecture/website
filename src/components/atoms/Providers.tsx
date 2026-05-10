'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

import { THEME_STORAGE_KEY } from '~/constants/theme';

export type ResolvedTheme = 'light' | 'dark';

/** Matches the inline script in root `layout.tsx` — must stay in sync. */
export function readPreferredTheme(): ResolvedTheme {
  if (typeof window === 'undefined') return 'light';
  try {
    const raw = localStorage.getItem(THEME_STORAGE_KEY);
    if (raw === 'dark') return 'dark';
    if (raw === 'light') return 'light';
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  } catch {
    return 'light';
  }
}

type ThemeCtx = {
  resolvedTheme: ResolvedTheme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeCtx | null>(null);

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within Providers');
  }
  return ctx;
}

export default function Providers({ children }: { children: ReactNode }) {
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>('light');

  useLayoutEffect(() => {
    setResolvedTheme(readPreferredTheme());
  }, []);

  useLayoutEffect(() => {
    document.documentElement.classList.toggle('dark', resolvedTheme === 'dark');
    try {
      localStorage.setItem(THEME_STORAGE_KEY, resolvedTheme);
    } catch {
      /* ignore */
    }
  }, [resolvedTheme]);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => {
      try {
        const raw = localStorage.getItem(THEME_STORAGE_KEY);
        if (raw === 'light' || raw === 'dark') return;
        setResolvedTheme(mq.matches ? 'dark' : 'light');
      } catch {
        /* ignore */
      }
    };

    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const toggleTheme = useCallback(() => {
    setResolvedTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  }, []);

  const value = useMemo(() => ({ resolvedTheme, toggleTheme }), [resolvedTheme, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>
      <div
        suppressHydrationWarning
        className="min-h-screen bg-white text-gray-900 transition-colors duration-200 dark:bg-slate-900 dark:text-slate-100"
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
