import type { Metadata } from 'next';
import LocalePage from '~/components/common/LocalePage';
import Contact from '~/components/widgets/Contact';
import FAQs from '~/components/widgets/FAQs';
import Features from '~/components/widgets/Features';
import Features4 from '~/components/widgets/Features4';
import Hero2 from '~/components/widgets/Hero2';
import Stats from '~/components/widgets/Stats';
import Steps from '~/components/widgets/Steps';
import {
  getContactAbout,
  getFaqsAbout,
  getFeaturesAbout,
  getFeaturesFourAbout,
  getFeaturesFourAboutTwo,
  getHero2About,
  getStatsAbout,
  getStepsAbout,
} from '~/shared/data/pages/about.data';

export const metadata: Metadata = {
  title: 'About us',
};

export default function Page({ params }: { params: Promise<{ locale: string }> }) {
  return (
    <LocalePage params={params}>
      {(locale) => (
        <>
          <Hero2 {...getHero2About(locale)} />
          <Stats {...getStatsAbout(locale)} />
          <Features4 {...getFeaturesFourAbout(locale)} />
          <Features4 {...getFeaturesFourAboutTwo(locale)} />
          <Steps {...getStepsAbout(locale)} />
          <Features {...getFeaturesAbout(locale)} />
          <FAQs {...getFaqsAbout(locale)} />
          <Contact {...getContactAbout(locale)} />
        </>
      )}
    </LocalePage>
  );
}
