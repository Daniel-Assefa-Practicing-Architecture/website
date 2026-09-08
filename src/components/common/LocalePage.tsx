import { Suspense, type ReactNode } from 'react';
import { setRequestLocale } from 'next-intl/server';

type LocaleParams = Promise<{ locale: string }>;

async function LocaleBody({
  params,
  children,
}: {
  params: LocaleParams;
  children: (locale: string) => ReactNode;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <>{children(locale)}</>;
}

/** Await locale params inside Suspense so Cache Components can stream the shell. */
export default function LocalePage({
  params,
  children,
  fallback = <div className="min-h-[40vh]" aria-hidden />,
}: {
  params: LocaleParams;
  children: (locale: string) => ReactNode;
  fallback?: ReactNode;
}) {
  return (
    <Suspense fallback={fallback}>
      <LocaleBody params={params}>{children}</LocaleBody>
    </Suspense>
  );
}
