import { FeaturesProps, HeroProps } from '~/shared/types';
import amCopy from '../copy-am.json';
import { pick } from '../locale';
import {
  STUDIO_ADDRESS_AM,
  STUDIO_ADDRESS_EN,
  STUDIO_PHONE_DISPLAY,
  STUDIO_PHONE_TEL,
} from '../studio';

export function getHeroContact(locale = 'en'): HeroProps {
  return {
    title: pick(locale, 'Find the studio', amCopy.findStudio),
    subtitle: pick(
      locale,
      'Daniel Assefa Practicing Architecture is based near Bole Michael Church in Addis Ababa, Ethiopia. Reach us by phone or email to begin a project conversation.',
      amCopy.contactHeroSubtitle,
    ),
    tagline: pick(locale, 'Contact', amCopy.contactTag),
  };
}

export function getContactDetails(locale = 'en') {
  return {
    title: pick(locale, 'Addis Ababa, Ethiopia', amCopy.mapTitle),
    subtitle: pick(
      locale,
      'Near Bole Michael Church, in front of the ring road. Our practice serves clients across Ethiopia with design, supervision, and project leadership.',
      amCopy.mapSubtitle,
    ),
    visitLabel: pick(locale, 'Visit', amCopy.visit),
    mapTitle: pick(locale, 'Map of the studio near Bole Michael Church', amCopy.mapIframeTitle),
    addressLines: [
      pick(locale, STUDIO_ADDRESS_EN, STUDIO_ADDRESS_AM),
      `${pick(locale, 'Phone', amCopy.phoneLabel)}: ${STUDIO_PHONE_DISPLAY}`,
      `${pick(locale, 'Email', amCopy.emailLabel)}: danassgebbal12@gmail.com`,
    ],
  };
}

export function getFeatures2Contact(locale = 'en'): FeaturesProps {
  return {
    columns: 3,
    header: {
      title: pick(locale, 'How to reach us', amCopy.howReach),
      subtitle: pick(
        locale,
        'Prefer a direct line? Use email or phone, we do not use a contact form.',
        amCopy.howReachSub,
      ),
    },
    items: [
      {
        title: pick(locale, 'Project inquiry', 'የፕሮጀክት ጥያቄ'),
        description: pick(locale, 'Share a brief site note and we will respond with next steps.', 'አጭር የጣቢያ ማስታወሻ ይላኩ እና ቀጣይ እርምጃዎችን እንመልሳለን።'),
        callToAction: {
          text: pick(locale, 'Email the studio', 'ስቱዲዮውን ኢሜይል ያድርጉ'),
          href: 'mailto:danassgebbal12@gmail.com',
        },
      },
      {
        title: pick(locale, 'Call', 'ይደውሉ'),
        description: pick(locale, 'Speak with the practice about timelines and scope.', 'ስለ ጊዜ ሰሌዳ እና ስፋት ከልምዱ ጋር ይነጋገሩ።'),
        callToAction: {
          text: pick(locale, `Call ${STUDIO_PHONE_DISPLAY}`, amCopy.callStudio),
          href: STUDIO_PHONE_TEL,
        },
      },
      {
        title: pick(locale, 'Questions', amCopy.faqsTag),
        description: pick(locale, 'Read common answers about how we work.', 'እንዴት እንደምንሠራ የተለመዱ መልሶችን ያንብቡ።'),
        callToAction: {
          text: pick(locale, 'View FAQs', amCopy.faqsPageTitle),
          href: '/faqs',
        },
      },
      {
        title: pick(locale, 'Portfolio', amCopy.headerPortfolio),
        description: pick(locale, 'Browse built and designed work across Ethiopia.', amCopy.ctaPortfolioDesc),
        callToAction: {
          text: pick(locale, 'See portfolio', amCopy.seePortfolio),
          href: '/portfolio',
        },
      },
    ],
  };
}

/** Kept for Storybook; contact page uses the map, not this form. */
export const contact2Contact = {
  id: 'contactTwo-on-contact',
  hasBackground: true,
  header: {
    title: 'Contact the studio',
    subtitle: 'Prefer email or phone, see the map on the contact page for our Addis Ababa location.',
  },
  form: {
    title: 'Studio inquiry',
    inputs: [
      { type: 'text' as const, name: 'name', autocomplete: 'off', placeholder: 'Your name' },
      { type: 'email' as const, name: 'email', autocomplete: 'on', placeholder: 'Your email' },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      name: 'textarea',
      placeholder: 'Tell us about the site and brief.',
    },
    btn: { title: 'Send message', type: 'submit' as const },
  },
};

export const heroContact = getHeroContact('en');
export const contactDetails = getContactDetails('en');
export const features2Contact = getFeatures2Contact('en');
