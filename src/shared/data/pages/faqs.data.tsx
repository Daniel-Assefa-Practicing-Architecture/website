import { CallToActionProps, FAQsProps, HeroProps } from '~/shared/types';
import amCopy from '../copy-am.json';
import { pick } from '../locale';

export function getHeroFaqs(locale = 'en'): HeroProps {
  return {
    title: pick(locale, 'Frequently Asked Questions', amCopy.faqsPageTitle),
    subtitle: pick(
      locale,
      'Clear answers about the practice, our services, and the Addis Ababa studio.',
      amCopy.faqsPageSubtitle,
    ),
    tagline: pick(locale, 'FAQs', amCopy.faqsTag),
  };
}

export function getFaqs4Faqs(locale = 'en'): FAQsProps {
  return {
    id: 'faqsFour-on-faqs',
    hasBackground: true,
    header: {
      title: pick(locale, 'Find what you need', amCopy.faqsTitle),
      subtitle: pick(
        locale,
        'Common questions from clients planning buildings across Ethiopia.',
        'በኢትዮጵያ ሕንፃ የሚያቅዱ ደንበኞች የሚጠይቋቸው ጥያቄዎች።',
      ),
      position: 'center',
    },
    items: [
      {
        title: pick(locale, 'Where is the studio?', amCopy.faqWhere),
        description: pick(
          locale,
          'Daniel Assefa Practicing Architecture is near Bole Michael Church, in front of the ring road in Addis Ababa, Ethiopia, and works on projects across the country.',
          amCopy.faqWhereAns,
        ),
      },
      {
        title: pick(locale, 'What kinds of buildings do you take on?', amCopy.faqTypes),
        description: pick(
          locale,
          'Housing, churches, schools, hospitals, mixed-use, hotels, and civic buildings, from first sketch through supervision.',
          amCopy.faqTypesAns,
        ),
      },
      {
        title: pick(locale, 'Are you a registered practice?', amCopy.faqReg),
        description: pick(
          locale,
          'Yes. Registered Architect and Professional Member of the Ethiopian Association of Architects, certified by the Ethiopian Engineering Council, and CPD accredited.',
          amCopy.faqRegAns,
        ),
      },
      {
        title: pick(locale, 'How do we start a conversation?', amCopy.faqStart),
        description: pick(
          locale,
          'Write to danassgebbal12@gmail.com or call +251 910 202 958. A short brief and site notes are enough to begin.',
          amCopy.faqStartAns,
        ),
      },
      {
        title: pick(locale, 'Do you supervise construction?', amCopy.featSupervision),
        description: pick(
          locale,
          'Yes. Quality, safety, and contract administration from groundbreaking to handover are core services of the practice.',
          amCopy.featSupervisionDesc,
        ),
      },
      {
        title: pick(locale, 'Can you renovate churches?', amCopy.featChurch),
        description: pick(
          locale,
          'Yes. Careful restoration that protects memory while making worship spaces livable today.',
          amCopy.featChurchDesc,
        ),
      },
    ],
  };
}

export function getCallToActionFaqs(locale = 'en'): CallToActionProps {
  return {
    title: pick(locale, 'Still have a question?', 'ጥያቄ አለዎት?'),
    subtitle: pick(
      locale,
      'Reach the Addis Ababa studio by email or phone. We are glad to discuss the next project.',
      amCopy.contactLead,
    ),
    callToAction: {
      text: pick(locale, 'Contact the studio', amCopy.contactStudio),
      href: '/contact',
    },
  };
}

export const heroFaqs = getHeroFaqs('en');
export const faqs4Faqs = getFaqs4Faqs('en');
export const callToActionFaqs = getCallToActionFaqs('en');
