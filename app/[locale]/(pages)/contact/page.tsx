import type { Metadata } from 'next';

import EthiopiaMap from '~/components/widgets/EthiopiaMap';
import Features2 from '~/components/widgets/Features2';
import Hero from '~/components/widgets/Hero';
import { getContactDetails, getFeatures2Contact, getHeroContact } from '~/shared/data/pages/contact.data';

export const metadata: Metadata = {
  title: 'Contact',
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <>
      <Hero {...getHeroContact(locale)} />
      <EthiopiaMap {...getContactDetails(locale)} />
      <Features2 {...getFeatures2Contact(locale)} />
    </>
  );
}
