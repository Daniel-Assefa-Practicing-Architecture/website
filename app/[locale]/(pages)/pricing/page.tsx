import type { Metadata } from 'next';

import Hero from '~/components/widgets/Hero';
import Pricing from '~/components/widgets/Pricing';
import FAQs3 from '~/components/widgets/FAQs3';
import { getFaqs3Pricing, getHeroPricing, getPricingPricing } from '~/shared/data/pages/pricing.data';

export const metadata: Metadata = {
  title: 'Consultation',
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <>
      <Hero {...getHeroPricing(locale)} />
      <Pricing {...getPricingPricing(locale)} />
      <FAQs3 {...getFaqs3Pricing(locale)} />
    </>
  );
}
