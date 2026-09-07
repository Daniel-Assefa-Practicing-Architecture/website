import type { Metadata } from 'next';

import CallToAction from '~/components/widgets/CallToAction';
import FAQs2 from '~/components/widgets/FAQs2';
import Hero from '~/components/widgets/Hero';
import { getCallToActionFaqs, getFaqs4Faqs, getHeroFaqs } from '~/shared/data/pages/faqs.data';

export const metadata: Metadata = {
  title: 'FAQs',
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <>
      <Hero {...getHeroFaqs(locale)} />
      <FAQs2 {...getFaqs4Faqs(locale)} />
      <CallToAction {...getCallToActionFaqs(locale)} />
    </>
  );
}
