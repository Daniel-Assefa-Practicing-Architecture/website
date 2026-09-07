import type { Metadata } from 'next';

import { SITE } from '~/config.js';

import ArchitecturalHero from '~/components/widgets/ArchitecturalHero';
import Certifications from '~/components/widgets/Certifications';
import SocialProof from '~/components/widgets/SocialProof';
import Features from '~/components/widgets/Features';
import Content from '~/components/widgets/Content';
import Steps from '~/components/widgets/Steps';
import FAQs2 from '~/components/widgets/FAQs2';
import CallToAction2 from '~/components/widgets/CallToAction2';
import Contact from '~/components/widgets/Contact';
import {
  getCallToAction2Home,
  getCertificationsHome,
  getContactHome,
  getContentHomeOne,
  getContentHomeTwo,
  getFaqs2Home,
  getFeaturesHome,
  getHeroHome,
  getSocialProofHome,
  getStepsHome,
} from '~/shared/data/pages/home.data';

export const metadata: Metadata = {
  title: SITE.title,
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <>
      <ArchitecturalHero {...getHeroHome(locale)} />
      <Certifications {...getCertificationsHome(locale)} />
      <SocialProof {...getSocialProofHome()} />
      <Features {...getFeaturesHome(locale)} />
      <Content {...getContentHomeOne(locale)} />
      <Content {...getContentHomeTwo(locale)} />
      <Steps {...getStepsHome(locale)} />
      <FAQs2 {...getFaqs2Home(locale)} />
      <Contact {...getContactHome(locale)} />
      <CallToAction2 {...getCallToAction2Home(locale)} />
    </>
  );
}
