import type { Metadata } from 'next';
import LocalePage from '~/components/common/LocalePage';
import Hero from '~/components/widgets/Hero';
import Pricing from '~/components/widgets/Pricing';
import FAQs3 from '~/components/widgets/FAQs3';
import { getFaqs3Pricing, getHeroPricing, getPricingPricing } from '~/shared/data/pages/pricing.data';

export const metadata: Metadata = {
  title: 'Consultation',
};

export default function Page({ params }: { params: Promise<{ locale: string }> }) {
  return (
    <LocalePage params={params}>
      {(locale) => (
        <>
          <Hero {...getHeroPricing(locale)} />
          <Pricing {...getPricingPricing(locale)} />
          <FAQs3 {...getFaqs3Pricing(locale)} />
        </>
      )}
    </LocalePage>
  );
}
