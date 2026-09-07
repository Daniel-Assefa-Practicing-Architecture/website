import type { Metadata } from 'next';
import Headline from '~/components/common/Headline';
import WidgetWrapper from '~/components/common/WidgetWrapper';
import PortfolioGrid from '~/components/widgets/PortfolioGrid';
import amCopy from '~/shared/data/copy-am.json';
import { pick } from '~/shared/data/locale';

export const metadata: Metadata = {
  title: 'Portfolio',
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <>
      <WidgetWrapper id="portfolio-hero" hasBackground containerClass="max-w-4xl">
        <Headline
          header={{
            tagline: pick(locale, 'Selected work', amCopy.portfolioTag),
            title: pick(locale, 'Daniel Assefa Practicing Architecture', amCopy.portfolioTitle),
            subtitle: pick(
              locale,
              'Housing, churches, hospitals, schools, and civic work across Ethiopia.',
              amCopy.portfolioSubtitle,
            ),
          }}
        />
      </WidgetWrapper>
      <PortfolioGrid locale={locale} />
    </>
  );
}
