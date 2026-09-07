import type { Metadata } from 'next';
import LocalePage from '~/components/common/LocalePage';
import CallToAction from '~/components/widgets/CallToAction';
import FAQs2 from '~/components/widgets/FAQs2';
import Hero from '~/components/widgets/Hero';
import { getCallToActionFaqs, getFaqs4Faqs, getHeroFaqs } from '~/shared/data/pages/faqs.data';

export const metadata: Metadata = {
  title: 'FAQs',
};

export default function Page({ params }: { params: Promise<{ locale: string }> }) {
  return (
    <LocalePage params={params}>
      {(locale) => (
        <>
          <Hero {...getHeroFaqs(locale)} />
          <FAQs2 {...getFaqs4Faqs(locale)} />
          <CallToAction {...getCallToActionFaqs(locale)} />
        </>
      )}
    </LocalePage>
  );
}
