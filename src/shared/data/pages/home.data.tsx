import { IconClock, IconMail, IconMapPin, IconPhoneCall } from '@tabler/icons-react';
import {
  CallToActionProps,
  ContactProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  SocialProofProps,
  StepsProps,
} from '../../types';
import amCopy from '../copy-am.json';
import { pick } from '../locale';
import { mediaUrl } from '../media';
import { getFeaturedProjects } from '../projects';
import { STUDIO_ADDRESS_AM, STUDIO_ADDRESS_EN, STUDIO_MAP_EMBED, STUDIO_PHONE_DISPLAY } from '../studio';

const logos = [
  { link: 'https://en.wikipedia.org/wiki/University_of_Gondar', src: mediaUrl('/images/logos/uo_gondar.png'), alt: 'University of Gondar' },
  { link: 'https://www.haramaya.edu.et', src: mediaUrl('/images/logos/haremaya.png'), alt: 'Haramaya University' },
  { link: 'https://totalenergies.com/ethiopia', src: mediaUrl('/images/logos/total.webp'), alt: 'Total Energies Ethiopia' },
  { link: 'https://ddgconstructions.com/', src: mediaUrl('/images/logos/dd.png'), alt: 'Diriba Defersha General Contractor' },
  { link: 'https://www.developmentaid.org/organizations/view/507840/great-land-motors-engineering-plc', src: mediaUrl('/images/logos/great_land.jpg'), alt: 'Great Land Motors' },
  { link: 'https://www.developmentaid.org/organizations/view/418699/meserete-kristos-college', src: mediaUrl('/images/logos/meserete.jpg'), alt: 'Meserete Kristos College' },
];

const ADDIS_MAP = STUDIO_MAP_EMBED;

export function getHeroHome(locale = 'en'): HeroProps {
  return {
    tagline: pick(locale, 'Architecture practice', amCopy.heroTag),
    title: pick(locale, 'Daniel Assefa Practicing Architecture', amCopy.heroTitle),
    subtitle: pick(
      locale,
      'A design and construction practice creating durable buildings for communities across Ethiopia, from first sketch through supervision and handover.',
      amCopy.heroSubtitle,
    ),
    callToAction: { text: pick(locale, 'View portfolio', amCopy.viewPortfolio), href: '/portfolio' },
    callToAction2: {
      text: pick(locale, 'Our services', amCopy.ourServices),
      href: '/services',
    },
  };
}

export function getSocialProofHome(): SocialProofProps {
  return { id: 'socialProof-on-home', hasBackground: false, images: logos };
}

export function getFeaturesHome(locale = 'en'): FeaturesProps {
  return {
    id: 'features-on-home',
    hasBackground: false,
    columns: 3,
    header: {
      tagline: pick(locale, 'Practice', amCopy.featuresTag),
      title: pick(locale, 'From first sketch to finished building', amCopy.featuresTitle),
      subtitle: pick(
        locale,
        'More than a decade of architecture, urban design, construction supervision, and property administration across Ethiopia.',
        amCopy.featuresSubtitle,
      ),
    },
    items: [
      { title: pick(locale, 'Architectural design', amCopy.featDesign), description: pick(locale, 'Functional, beautiful buildings for homes, campuses, churches, and civic life.', amCopy.featDesignDesc) },
      { title: pick(locale, 'Urban planning', amCopy.featUrban), description: pick(locale, 'Master plans and layouts that balance density, culture, and everyday movement.', amCopy.featUrbanDesc) },
      { title: pick(locale, 'Construction supervision', amCopy.featSupervision), description: pick(locale, 'Quality, safety, and contract administration from groundbreaking to handover.', amCopy.featSupervisionDesc) },
      { title: pick(locale, 'Church renovation', amCopy.featChurch), description: pick(locale, 'Careful restoration that protects memory while making worship spaces livable today.', amCopy.featChurchDesc) },
      { title: pick(locale, 'Property administration', amCopy.featProperty), description: pick(locale, 'Tenant relations, maintenance, and budgeting for residential and commercial assets.', amCopy.featPropertyDesc) },
      { title: pick(locale, 'Team leadership', amCopy.featTeam), description: pick(locale, 'Mentoring junior architects and coordinating multidisciplinary delivery teams.', amCopy.featTeamDesc) },
      { title: pick(locale, 'Contract administration', amCopy.featContract), description: pick(locale, 'Clear documents, fair negotiations, and compliance through the life of a project.', amCopy.featContractDesc) },
      { title: pick(locale, 'Cost estimation', amCopy.featCost), description: pick(locale, 'Practical budgets that keep ambition and construction reality in the same room.', amCopy.featCostDesc) },
    ],
  };
}

export function getContentHomeOne(locale = 'en'): ContentProps {
  return {
    id: 'contentOne-on-home-one',
    hasBackground: true,
    header: {
      tagline: pick(locale, 'About the practice', amCopy.aboutTag),
      title: pick(locale, 'Spaces that serve people and place', amCopy.aboutTitle),
    },
    content: pick(
      locale,
      'Daniel Assefa Practicing Architecture leads design from first idea to completed building. The studio brings more than ten years of residential, commercial, civic, and sacred work across Ethiopia, with a focus on careful construction, budgeting, and lasting craft.',
      amCopy.aboutLead,
    ),
    items: [
      { title: pick(locale, '10+ years of practice', amCopy.statYears), description: pick(locale, 'Design, supervision, and administration.', amCopy.statYearsDesc) },
      { title: pick(locale, '110+ projects', amCopy.statProjects), description: pick(locale, 'Housing, churches, campuses, hospitals, and civic work.', amCopy.statProjectsDesc) },
      { title: pick(locale, '50+ clients', amCopy.statClients), description: pick(locale, 'Congregations, universities, families, and public agencies.', amCopy.statClientsDesc) },
    ],
    image: { src: mediaUrl('/images/church.jpg'), alt: pick(locale, 'Architecture across Ethiopia', 'በኢትዮጵያ ሥነ ሕንፃ') },
    isReversed: false,
    isAfterContent: false,
  };
}

export function getContentHomeTwo(locale = 'en'): ContentProps {
  return {
    id: 'contentOne-on-home-two',
    hasBackground: true,
    header: { title: pick(locale, 'Design philosophy', amCopy.philosophyTitle) },
    content: pick(
      locale,
      'The practice teaches sustainable design, sits on architectural juries, and studies the quiet details that make a city feel like home. Architecture should inspire, protect, and connect people to their surroundings while respecting the natural world.',
      amCopy.philosophyLead,
    ),
    items: getFeaturedProjects(locale).slice(0, 6).map((project) => ({ title: project.title })),
    isReversed: true,
    isAfterContent: true,
    showConstruction: true,
  };
}

export function getStepsHome(locale = 'en'): StepsProps {
  return {
    id: 'steps-on-home',
    hasBackground: false,
    isReversed: false,
    isImageDisplayed: true,
    image: { src: mediaUrl('/images/bole-med.png'), alt: 'Bole Medhanealem Church' },
    header: {
      tagline: pick(locale, 'Journey', amCopy.stepsTag),
      title: pick(locale, 'Education and practice', amCopy.stepsTitle),
      subtitle: pick(
        locale,
        'From Addis Ababa University to leading the practice that became Daniel Assefa Practicing Architecture.',
        amCopy.stepsSubtitle,
      ),
    },
    items: [
      { title: pick(locale, 'B.Sc. Architecture and Urban Planning', amCopy.step1), description: pick(locale, 'Addis Ababa University, 1988.', amCopy.step1Desc) },
      { title: pick(locale, 'Project Architect, Ministry of Planning', amCopy.step2), description: pick(locale, '1988-1993. Blueprints, regulations, and multidisciplinary master plans.', amCopy.step2Desc) },
      { title: pick(locale, 'Architect and Property Administrator, Ayat', amCopy.step3), description: pick(locale, '1993-1997. Tenant relations and maintenance for 100+ residential units.', amCopy.step3Desc) },
      { title: pick(locale, 'M.A. Environmental Planning and Landscape Design', amCopy.step4), description: pick(locale, 'Addis Ababa University, 2015.', amCopy.step4Desc) },
      { title: pick(locale, 'Senior Architect and Manager', amCopy.step5), description: pick(locale, 'Daniel Assefa Building Consultant PLC, 1998-2024. 67 blueprints, four church renovations, and a team of eight junior architects.', amCopy.step5Desc) },
    ],
  };
}

export function getFaqs2Home(locale = 'en'): FAQsProps {
  return {
    id: 'faqsTwo-on-home',
    hasBackground: false,
    header: {
      tagline: pick(locale, 'FAQs', amCopy.faqsTag),
      title: pick(locale, 'Questions clients usually ask', amCopy.faqsTitle),
    },
    items: [
      { title: pick(locale, 'Where is the studio?', amCopy.faqWhere), description: pick(locale, 'Daniel Assefa Practicing Architecture is near Bole Michael Church, in front of the ring road in Addis Ababa, Ethiopia, and works on projects across the country.', amCopy.faqWhereAns) },
      { title: pick(locale, 'What kinds of buildings do you take on?', amCopy.faqTypes), description: pick(locale, 'Housing, churches, schools, hospitals, mixed-use, hotels, and civic buildings, from first sketch through supervision.', amCopy.faqTypesAns) },
      { title: pick(locale, 'Are you a registered practice?', amCopy.faqReg), description: pick(locale, 'Yes. Registered Architect and Professional Member of the Ethiopian Association of Architects, certified by the Ethiopian Engineering Council, and CPD accredited.', amCopy.faqRegAns) },
      { title: pick(locale, 'How do we start a conversation?', amCopy.faqStart), description: pick(locale, `Write to danassgebbal12@gmail.com or call ${STUDIO_PHONE_DISPLAY}. A short brief and site notes are enough to begin.`, amCopy.faqStartAns) },
    ],
  };
}

export function getContactHome(locale = 'en'): ContactProps {
  return {
    hasBackground: true,
    header: {
      tagline: pick(locale, 'Contact', amCopy.contactTag),
      title: pick(locale, 'Visit the practice', amCopy.contactTitle),
      subtitle: pick(locale, 'Near Bole Michael Church, Addis Ababa, open to new commissions.', amCopy.contactSubtitle),
    },
    content: pick(locale, 'Find the studio on the map, or reach us directly by phone or email.', amCopy.contactLead),
    items: [
      { title: pick(locale, 'Studio', amCopy.studio), description: [pick(locale, STUDIO_ADDRESS_EN, STUDIO_ADDRESS_AM)], icon: IconMapPin },
      { title: pick(locale, 'Contact', amCopy.headerContact), description: [STUDIO_PHONE_DISPLAY, 'danassgebbal12@gmail.com'], icon: IconPhoneCall },
      { title: pick(locale, 'Hours', amCopy.hours), description: [pick(locale, 'By appointment', amCopy.hoursByAppt), pick(locale, 'Open to new commissions', amCopy.hoursOpen)], icon: IconClock },
    ],
    mapEmbedUrl: ADDIS_MAP,
    mapTitle: pick(locale, 'Studio near Bole Michael Church', amCopy.mapTitle),
  };
}

export function getCallToAction2Home(locale = 'en'): CallToActionProps {
  return {
    title: pick(locale, 'Bring a vision into the world', amCopy.ctaTitle),
    subtitle: pick(
      locale,
      'Whether you need a church restored, a campus library, or a careful house, the practice is ready to hear the story of the place.',
      amCopy.ctaSubtitle,
    ),
    callToAction: { text: pick(locale, 'Contact the studio', amCopy.ctaContact), href: '/contact', icon: IconMail },
    items: [
      { title: pick(locale, 'Portfolio', amCopy.headerPortfolio), description: pick(locale, 'Built and designed works across Ethiopia.', amCopy.ctaPortfolioDesc), href: '/portfolio' },
      { title: pick(locale, 'Resume', amCopy.downloadResume), description: pick(locale, 'Download the principal architect CV as PDF.', amCopy.ctaResumeDesc), href: mediaUrl('/images/Daniel-Gebre-Resume.pdf') },
      {
        title: pick(locale, 'Email', amCopy.ctaEmail),
        description: pick(locale, 'Send a brief and we will reply from the studio.', amCopy.ctaEmailDesc),
        href: 'mailto:danassgebbal12@gmail.com',
      },
    ],
  };
}

export function getCertificationsHome(locale = 'en'): FeaturesProps & { callToAction: { text: string; href: string } } {
  return {
    id: 'certifications-on-home',
    hasBackground: true,
    header: {
      tagline: pick(locale, 'Credentials', amCopy.certsTag),
      title: pick(locale, 'Certifications & Recognitions', amCopy.certsTitle),
      subtitle: pick(
        locale,
        'A registered architectural practice serving clients across Ethiopia.',
        amCopy.certsSubtitle,
      ),
    },
    items: [
      {
        title: pick(locale, 'Registered Architect', amCopy.certRegistered),
        description: pick(locale, 'Ethiopian Association of Architects (EAA)', amCopy.certRegisteredOrg),
      },
      {
        title: pick(locale, 'Professional Member', amCopy.certMember),
        description: pick(locale, 'Ethiopian Association of Architects (EAA)', amCopy.certMemberOrg),
      },
      {
        title: pick(locale, 'Certified Engineer', amCopy.certEngineer),
        description: pick(locale, 'Ethiopian Engineering Council', amCopy.certEngineerOrg),
      },
      {
        title: pick(locale, 'CPD Accredited', amCopy.certCpd),
        description: pick(locale, 'EAA Continuing Professional Development', amCopy.certCpdOrg),
      },
    ],
    callToAction: {
      text: pick(locale, 'View portfolio', amCopy.viewPortfolio),
      href: '/portfolio',
    },
  };
}

export const heroHome = getHeroHome('en');
export const socialProofHome = getSocialProofHome();
export const featuresHome = getFeaturesHome('en');
export const contentHomeOne = getContentHomeOne('en');
export const contentHomeTwo = getContentHomeTwo('en');
export const stepsHome = getStepsHome('en');
export const faqs2Home = getFaqs2Home('en');
export const contactHome = getContactHome('en');
export const callToAction2Home = getCallToAction2Home('en');
export const certificationsHome = getCertificationsHome('en');
export const pricingHome = { id: 'pricing-on-home', hasBackground: true, header: { title: '' }, prices: [] };
export const teamHome = { id: 'team-on-home', hasBackground: false, header: { title: '' }, teams: [] };
export const testimonialsHome = { id: 'testimonials-on-home', hasBackground: true, header: { title: '' }, testimonials: [] };
