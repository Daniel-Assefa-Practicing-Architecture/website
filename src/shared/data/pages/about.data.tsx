import {
  ContactProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  StatsProps,
  StepsProps,
} from '~/shared/types';
import {
  IconClock,
  IconHeartHandshake,
  IconHomeEco,
  IconMail,
  IconMapPin,
  IconNumber1,
  IconNumber2,
  IconNumber3,
  IconNumber4,
  IconNumber5,
  IconPhoneCall,
  IconRuler2,
  IconThumbUp,
} from '@tabler/icons-react';
import amCopy from '../copy-am.json';
import { pick } from '../locale';
import { mediaUrl } from '../media';

const ADDIS_MAP =
  'https://www.openstreetmap.org/export/embed.html?bbox=38.68%2C8.95%2C38.82%2C9.08&layer=mapnik&marker=9.03%2C38.75';

export function getHero2About(locale = 'en'): HeroProps {
  return {
    title: pick(locale, 'Daniel Assefa Practicing Architecture', amCopy.aboutPageTitle),
    subtitle: pick(
      locale,
      'A design and construction practice creating sustainable, functional, and beautiful spaces for communities across Ethiopia.',
      amCopy.aboutPageSubtitle,
    ),
    tagline: pick(locale, 'About the practice', amCopy.aboutPageTag),
    callToAction: {
      text: pick(locale, 'View portfolio', amCopy.viewPortfolio),
      href: '/portfolio',
    },
    callToAction2: {
      text: pick(locale, 'Contact the studio', amCopy.contactStudio),
      href: '/contact',
    },
    image: {
      src: mediaUrl('/images/front-big.jpg'),
      alt: pick(locale, 'Daniel Assefa Practicing Architecture', amCopy.aboutPageTitle),
    },
  };
}

export function getStatsAbout(locale = 'en'): StatsProps {
  return {
    id: 'stats-on-about',
    hasBackground: true,
    items: [
      { title: 10, description: pick(locale, 'Years of practice', amCopy.yearsPractice) },
      { title: 110, description: pick(locale, 'Projects', amCopy.projects) },
      { title: 50, description: pick(locale, 'Clients', amCopy.clients) },
      { title: 4, description: pick(locale, 'Church renovations', amCopy.churchRenovations) },
    ],
  };
}

export function getFeaturesFourAbout(locale = 'en'): FeaturesProps {
  return {
    id: 'features-four-on-about',
    hasBackground: false,
    header: {
      title: pick(locale, 'A practice rooted in place', amCopy.missionTitle),
      subtitle: pick(
        locale,
        'Architecture should inspire, protect, and connect people to their surroundings while respecting the natural world. That philosophy drives every decision, from first concept to final construction across Ethiopia.',
        amCopy.missionSubtitle,
      ),
      tagline: pick(locale, 'Mission', amCopy.missionTag),
    },
  };
}

export function getFeaturesFourAboutTwo(locale = 'en'): FeaturesProps {
  return {
    id: 'features-four-on-about-two',
    hasBackground: false,
    header: {
      title: pick(locale, 'Our values', amCopy.valuesTitle),
      subtitle: pick(
        locale,
        'How the studio works with clients, contractors, and communities in Ethiopia.',
        'ከደንበኞች፣ ከተቋራጮች እና ከማኅበረሰቦች ጋር በኢትዮጵያ እንዴት እንደምንሠራ።',
      ),
    },
    isAfterContent: true,
    columns: 2,
    items: [
      {
        title: pick(locale, 'Careful craft', amCopy.valueCraft),
        description: pick(locale, 'Detail, material, and construction quality matter at every stage.', amCopy.valueCraftDesc),
        icon: IconThumbUp,
      },
      {
        title: pick(locale, 'Respect for place', amCopy.valuePlace),
        description: pick(locale, 'Design responds to climate, culture, and the Ethiopian context.', amCopy.valuePlaceDesc),
        icon: IconHomeEco,
      },
      {
        title: pick(locale, 'Clarity', amCopy.valueClarity),
        description: pick(locale, 'Documents, budgets, and site decisions stay clear and actionable.', amCopy.valueClarityDesc),
        icon: IconRuler2,
      },
      {
        title: pick(locale, 'Stewardship', amCopy.valueSteward),
        description: pick(locale, 'We honour clients, contractors, and the people who will use the building.', amCopy.valueStewardDesc),
        icon: IconHeartHandshake,
      },
    ],
  };
}

export function getStepsAbout(locale = 'en'): StepsProps {
  return {
    id: 'steps-on-about',
    hasBackground: true,
    isImageDisplayed: false,
    header: {
      title: pick(locale, 'Education and practice', amCopy.stepsTitle),
      subtitle: pick(
        locale,
        'Trained at Addis Ababa University, then practiced in public planning, real estate, and an independent consultancy delivering churches, campuses, hospitals, and civic buildings across Ethiopia.',
        amCopy.stepsSubtitle,
      ),
      tagline: pick(locale, 'Journey', amCopy.stepsTag),
    },
    items: [
      {
        title: pick(locale, 'Foundation', 'መሠረት'),
        description: pick(locale, 'B.Sc. Architecture and Urban Planning, Addis Ababa University, 1988.', amCopy.step1Desc),
        icon: IconNumber1,
      },
      {
        title: pick(locale, 'Public planning', 'የሕዝብ ዕቅድ'),
        description: pick(locale, 'Project Architect at the Ministry of Planning, 1988-1993.', amCopy.step2Desc),
        icon: IconNumber2,
      },
      {
        title: pick(locale, 'Property care', 'የንብረት እንክብካቤ'),
        description: pick(locale, 'Architect and Property Administrator at Ayat, 1993-1997.', amCopy.step3Desc),
        icon: IconNumber3,
      },
      {
        title: pick(locale, 'Further study', 'ተጨማሪ ትምህርት'),
        description: pick(locale, 'M.A. Environmental Planning and Landscape Design, Addis Ababa University, 2015.', amCopy.step4Desc),
        icon: IconNumber4,
      },
      {
        title: pick(locale, 'Independent practice', 'ገለልተኛ ልምድ'),
        description: pick(locale, 'Senior Architect and Manager, Daniel Assefa Building Consultant PLC, 1998-2024, now Daniel Assefa Practicing Architecture in Addis Ababa.', amCopy.step5Desc),
        icon: IconNumber5,
      },
    ],
  };
}

export function getFeaturesAbout(locale = 'en'): FeaturesProps {
  return {
    id: 'features-on-about',
    hasBackground: true,
    header: {
      title: pick(locale, 'What the practice delivers', amCopy.servicesOffer),
      subtitle: pick(
        locale,
        'Design, supervision, and administration for buildings that serve Ethiopian communities.',
        'ለኢትዮጵያ ማኅበረሰቦች የሚያገለግሉ ሕንፃዎች ንድፍ፣ ክትትል እና አስተዳደር።',
      ),
      tagline: pick(locale, 'Practice', amCopy.featuresTag),
    },
    columns: 3,
    items: [
      {
        title: pick(locale, 'Architectural design', amCopy.featDesign),
        description: pick(locale, 'Functional, beautiful buildings for homes, campuses, churches, and civic life.', amCopy.featDesignDesc),
      },
      {
        title: pick(locale, 'Construction supervision', amCopy.featSupervision),
        description: pick(locale, 'Quality, safety, and contract administration from groundbreaking to handover.', amCopy.featSupervisionDesc),
      },
      {
        title: pick(locale, 'Team leadership', amCopy.featTeam),
        description: pick(locale, 'Mentoring junior architects and coordinating multidisciplinary delivery teams.', amCopy.featTeamDesc),
      },
    ],
  };
}

export function getFaqsAbout(locale = 'en'): FAQsProps {
  return {
    id: 'faqs-on-about',
    hasBackground: false,
    header: {
      title: pick(locale, 'Questions clients usually ask', amCopy.faqsTitle),
      tagline: pick(locale, 'FAQs', amCopy.faqsTag),
    },
    items: [
      { title: pick(locale, 'Where is the studio?', amCopy.faqWhere), description: pick(locale, 'Daniel Assefa Practicing Architecture is based in Addis Ababa, Ethiopia, and works on projects across the country.', amCopy.faqWhereAns) },
      { title: pick(locale, 'What kinds of buildings do you take on?', amCopy.faqTypes), description: pick(locale, 'Housing, churches, schools, hospitals, mixed-use, hotels, and civic buildings, from first sketch through supervision.', amCopy.faqTypesAns) },
      { title: pick(locale, 'Are you a registered practice?', amCopy.faqReg), description: pick(locale, 'Yes. Registered Architect and Professional Member of the Ethiopian Association of Architects, certified by the Ethiopian Engineering Council, and CPD accredited.', amCopy.faqRegAns) },
      { title: pick(locale, 'How do we start a conversation?', amCopy.faqStart), description: pick(locale, 'Write to danassgebbal12@gmail.com or call +1 (437) 833-2850. A short brief and site notes are enough to begin.', amCopy.faqStartAns) },
    ],
  };
}

export function getContactAbout(locale = 'en'): ContactProps {
  return {
    id: 'contact-on-about',
    hasBackground: true,
    header: {
      title: pick(locale, 'Visit the practice', amCopy.contactTitle),
      subtitle: pick(locale, 'Addis Ababa, Ethiopia, open to new commissions.', amCopy.contactSubtitle),
      tagline: pick(locale, 'Contact', amCopy.contactTag),
    },
    content: pick(locale, 'Find the studio on the map, or reach us directly by phone or email.', amCopy.contactLead),
    items: [
      { title: pick(locale, 'Studio', amCopy.studio), description: ['Addis Ababa, Ethiopia'], icon: IconMapPin },
      { title: pick(locale, 'Contact', amCopy.headerContact), description: ['+1 (437) 833-2850', 'danassgebbal12@gmail.com'], icon: IconPhoneCall },
      { title: pick(locale, 'Hours', amCopy.hours), description: [pick(locale, 'By appointment', amCopy.hoursByAppt), pick(locale, 'Open to new commissions', amCopy.hoursOpen)], icon: IconClock },
    ],
    mapEmbedUrl: ADDIS_MAP,
    mapTitle: pick(locale, 'Addis Ababa studio location', amCopy.mapTitle),
  };
}

// Backward-compatible English defaults
export const hero2About = getHero2About('en');
export const statsAbout = getStatsAbout('en');
export const featuresFourAbout = getFeaturesFourAbout('en');
export const featuresFourAboutTwo = getFeaturesFourAboutTwo('en');
export const stepsAbout = getStepsAbout('en');
export const featuresAbout = getFeaturesAbout('en');
export const faqsAbout = getFaqsAbout('en');
export const contactAbout = getContactAbout('en');

// Removed placeholder team/testimonials, kept empty exports if stories import them
export const features3About = { id: 'featuresThree-on-about', hasBackground: false, header: { title: '' }, items: [] };
export const teamAbout = { id: 'team-on-about', hasBackground: false, header: { title: '' }, teams: [] };
export const testimonials2About = { id: 'testimonialsTwo-on-about', hasBackground: false, header: { title: '' }, testimonials: [] };
