import type { Metadata } from 'next';
import LocalePage from '~/components/common/LocalePage';
import EthiopiaMap from '~/components/widgets/EthiopiaMap';
import Features2 from '~/components/widgets/Features2';
import Hero from '~/components/widgets/Hero';
import { getContactDetails, getFeatures2Contact, getHeroContact } from '~/shared/data/pages/contact.data';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function Page({ params }: { params: Promise<{ locale: string }> }) {
  return (
    <LocalePage params={params}>
      {(locale) => (
        <>
          <Hero {...getHeroContact(locale)} />
          <EthiopiaMap {...getContactDetails(locale)} />
          <Features2 {...getFeatures2Contact(locale)} />
        </>
      )}
    </LocalePage>
  );
}
