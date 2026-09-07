import { CallToActionProps, FAQsProps, FeaturesProps, HeroProps } from '~/shared/types';
import amCopy from '../copy-am.json';
import { pick } from '../locale';

export function getHeroServices(locale = 'en'): HeroProps {
  return {
    title: pick(locale, 'Architecture, planning, and careful construction', amCopy.servicesHeroTitle),
    subtitle: pick(
      locale,
      'Design, urban planning, supervision, church renovation, property administration, contract administration, and cost estimation: the full path from brief to building across Ethiopia.',
      amCopy.servicesHeroSubtitle,
    ),
    callToAction: {
      text: pick(locale, 'See the portfolio', amCopy.seePortfolio),
      href: '/portfolio',
    },
    callToAction2: {
      text: pick(locale, 'Contact the studio', amCopy.contactStudio),
      href: '/contact',
    },
  };
}

export function getFeatures2Services(locale = 'en'): FeaturesProps {
  return {
    id: 'featuresTwo-on-services',
    header: {
      title: pick(locale, 'What we offer', amCopy.servicesOffer),
      subtitle: pick(
        locale,
        'Services shaped for Ethiopian sites, climates, and communities.',
        'ለኢትዮጵያ ጣቢያዎች፣ አየር ንብረት እና ማኅበረሰቦች የተበጁ አገልግሎቶች።',
      ),
    },
    columns: 3,
    items: [
      {
        title: pick(locale, 'Architectural design', amCopy.featDesign),
        description: pick(locale, 'Functional, beautiful buildings for homes, campuses, churches, and civic life.', amCopy.featDesignDesc),
      },
      {
        title: pick(locale, 'Urban planning', amCopy.featUrban),
        description: pick(locale, 'Master plans and layouts that balance density, culture, and everyday movement.', amCopy.featUrbanDesc),
      },
      {
        title: pick(locale, 'Construction supervision', amCopy.featSupervision),
        description: pick(locale, 'Quality, safety, and contract administration from groundbreaking to handover.', amCopy.featSupervisionDesc),
      },
      {
        title: pick(locale, 'Church renovation', amCopy.featChurch),
        description: pick(locale, 'Careful restoration that protects memory while making worship spaces livable today.', amCopy.featChurchDesc),
      },
      {
        title: pick(locale, 'Contract administration', amCopy.featContract),
        description: pick(locale, 'Clear documents, fair negotiations, and compliance through the life of a project.', amCopy.featContractDesc),
      },
      {
        title: pick(locale, 'Cost estimation', amCopy.featCost),
        description: pick(locale, 'Practical budgets that keep ambition and construction reality in the same room.', amCopy.featCostDesc),
      },
    ],
  };
}

export function getFaqsServices(locale = 'en'): FAQsProps {
  return {
    id: 'faqs-on-services',
    hasBackground: false,
    header: {
      title: pick(locale, 'Questions about services', amCopy.faqsTitle),
      tagline: pick(locale, 'FAQs', amCopy.faqsTag),
    },
    items: [
      {
        title: pick(locale, 'Where is the studio?', amCopy.faqWhere),
        description: pick(locale, 'Daniel Assefa Practicing Architecture is near Bole Michael Church, in front of the ring road in Addis Ababa, Ethiopia, and works on projects across the country.', amCopy.faqWhereAns),
      },
      {
        title: pick(locale, 'What kinds of buildings do you take on?', amCopy.faqTypes),
        description: pick(locale, 'Housing, churches, schools, hospitals, mixed-use, hotels, and civic buildings, from first sketch through supervision.', amCopy.faqTypesAns),
      },
      {
        title: pick(locale, 'How do we start a conversation?', amCopy.faqStart),
        description: pick(locale, 'Write to danassgebbal12@gmail.com or call +251 910 202 958. A short brief and site notes are enough to begin.', amCopy.faqStartAns),
      },
    ],
  };
}

export function getCallToActionServices(locale = 'en'): CallToActionProps {
  return {
    title: pick(locale, 'Bring a vision into the world', amCopy.ctaTitle),
    subtitle: pick(
      locale,
      'Tell us about the site and the hope for the building. The studio in Addis Ababa is ready to begin.',
      amCopy.ctaSubtitle,
    ),
    callToAction: {
      text: pick(locale, 'Contact the studio', amCopy.ctaContact),
      href: '/contact',
    },
  };
}

export const heroServices = getHeroServices('en');
export const features2Services = getFeatures2Services('en');
export const faqsServices = getFaqsServices('en');
export const callToActionServices = getCallToActionServices('en');
