import { Metadata } from 'next';
import BlueprintSketch from '~/components/widgets/BlueprintSketch';
import CallToAction from '~/components/widgets/CallToAction';
import FAQs from '~/components/widgets/FAQs';
import Features2 from '~/components/widgets/Features2';
import Hero from '~/components/widgets/Hero';
import {
  getCallToActionServices,
  getFaqsServices,
  getFeatures2Services,
  getHeroServices,
} from '~/shared/data/pages/services.data';

export const metadata: Metadata = {
  title: 'Services',
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <>
      <Hero {...getHeroServices(locale)} />
      <BlueprintSketch />
      <Features2 {...getFeatures2Services(locale)} />
      <FAQs {...getFaqsServices(locale)} />
      <CallToAction {...getCallToActionServices(locale)} />
    </>
  );
}
