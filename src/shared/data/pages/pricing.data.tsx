import { ComparisonProps, FAQsProps, PricingProps, HeroProps } from '~/shared/types';
import amCopy from '../copy-am.json';
import { pick } from '../locale';

export function getHeroPricing(locale = 'en'): HeroProps {
  return {
    title: pick(locale, 'How we can work together', 'እንዴት አብረን መሥራት እንችላለን'),
    subtitle: pick(
      locale,
      'Clear engagement paths for design, supervision, and estimation from our Addis Ababa studio.',
      'ከአዲስ አበባ ስቱዲዮአችን ለንድፍ፣ ለክትትል እና ለግምት ግልጽ የሥራ መንገዶች።',
    ),
    tagline: pick(locale, 'Consultation', 'ምክክር'),
  };
}

export function getPricingPricing(locale = 'en'): PricingProps {
  return {
    id: 'pricing-on-pricing',
    hasBackground: true,
    header: {
      title: pick(locale, 'Ways to begin', 'ለመጀመር መንገዶች'),
      subtitle: pick(
        locale,
        'From a first sketch review to full project leadership. Every engagement starts with a conversation.',
        'ከመጀመሪያ የንድፍ ግምገማ እስከ ሙሉ የፕሮጀክት አመራር። እያንዳንዱ ሥራ በውይይት ይጀምራል።',
      ),
    },
    prices: [
      {
        title: pick(locale, 'Sketch review', 'የንድፍ ግምገማ'),
        subtitle: pick(locale, 'A focused look at a site or an early idea', 'በጣቢያ ወይም በመጀመሪያ ሀሳብ ላይ ያተኮረ እይታ'),
        price: 0,
        period: pick(locale, 'conversation', 'ውይይት'),
        items: [
          { description: pick(locale, 'Site notes and brief review', 'የጣቢያ ማስታወሻ እና ብሪፍ ግምገማ') },
          { description: pick(locale, 'Design direction recommendations', 'የንድፍ አቅጣጫ ምክሮች') },
          { description: pick(locale, 'Clear next-step outline', 'ግልጽ የቀጣይ እርምጃ ዝርዝር') },
        ],
        callToAction: {
          text: pick(locale, 'Write to us', 'ይጻፉልን'),
          href: '/contact',
        },
        hasRibbon: false,
      },
      {
        title: pick(locale, 'Design leadership', 'የንድፍ አመራር'),
        subtitle: pick(locale, 'From brief to construction documents', 'ከብሪፍ እስከ የግንባታ ሰነዶች'),
        price: 0,
        period: pick(locale, 'project-based', 'በፕሮጀክት'),
        items: [
          { description: pick(locale, 'Schematic and developed design', 'መርሐግብር እና የተሻሻለ ንድፍ') },
          { description: pick(locale, 'Coordination with engineering teams', 'ከምህንድስና ቡድኖች ጋር ማቀናጀት') },
          { description: pick(locale, 'Construction document set', 'የግንባታ ሰነድ ስብስብ') },
        ],
        callToAction: {
          text: pick(locale, 'Book a consult', 'ምክክር ይያዙ'),
          href: '/contact',
        },
        hasRibbon: true,
        ribbonTitle: pick(locale, 'Most requested', 'በብዛት የሚጠየቅ'),
      },
      {
        title: pick(locale, 'Full project care', 'ሙሉ የፕሮጀክት እንክብካቤ'),
        subtitle: pick(locale, 'Design, supervision, and contract administration', 'ንድፍ፣ ክትትል እና የውል አስተዳደር'),
        price: 0,
        period: pick(locale, 'project-based', 'በፕሮጀክት'),
        items: [
          { description: pick(locale, 'End-to-end design leadership', 'ከጫፍ እስከ ጫፍ የንድፍ አመራር') },
          { description: pick(locale, 'On-site construction supervision', 'በጣቢያ የግንባታ ክትትል') },
          { description: pick(locale, 'Budget and contract stewardship', 'በጀት እና የውል አስተዳደር') },
        ],
        callToAction: {
          text: pick(locale, 'Start a project', 'ፕሮጀክት ይጀምሩ'),
          href: '/contact',
        },
        hasRibbon: false,
      },
    ],
  };
}

export function getFaqs3Pricing(locale = 'en'): FAQsProps {
  return {
    id: 'faqsThree-on-pricing',
    hasBackground: false,
    header: {
      title: pick(locale, 'Questions about engagement', amCopy.faqsTitle),
    },
    items: [
      {
        title: pick(locale, 'Where is the studio?', amCopy.faqWhere),
        description: pick(locale, 'Daniel Assefa Practicing Architecture is based in Addis Ababa, Ethiopia, and works on projects across the country.', amCopy.faqWhereAns),
      },
      {
        title: pick(locale, 'How do we start a conversation?', amCopy.faqStart),
        description: pick(locale, 'Write to danassgebbal12@gmail.com or call +1 (437) 833-2850. A short brief and site notes are enough to begin.', amCopy.faqStartAns),
      },
      {
        title: pick(locale, 'Are you a registered practice?', amCopy.faqReg),
        description: pick(locale, 'Yes. Registered Architect and Professional Member of the Ethiopian Association of Architects, certified by the Ethiopian Engineering Council, and CPD accredited.', amCopy.faqRegAns),
      },
    ],
  };
}

export function getComparisonPricing(locale = 'en'): ComparisonProps {
  return {
    id: 'comparison-on-pricing',
    hasBackground: true,
    header: {
      title: pick(locale, 'Compare engagements', 'የሥራ ዓይነቶችን አወዳድሩ'),
      subtitle: pick(locale, 'Choose the path that fits the scale of your Ethiopian project.', 'ከኢትዮጵያ ፕሮጀክትዎ መጠን ጋር የሚስማማውን መንገድ ይምረጡ።'),
    },
    columns: [
      { title: pick(locale, 'Sketch review', 'የንድፍ ግምገማ'), items: [{ title: pick(locale, 'Brief review', 'ብሪፍ ግምገማ') }, { title: pick(locale, 'Direction notes', 'የአቅጣጫ ማስታወሻዎች') }] },
      { title: pick(locale, 'Design leadership', 'የንድፍ አመራር'), items: [{ title: pick(locale, 'Full design set', 'ሙሉ የንድፍ ስብስብ') }, { title: pick(locale, 'Team coordination', 'የቡድን ማቀናጀት') }] },
      { title: pick(locale, 'Full project care', 'ሙሉ እንክብካቤ'), items: [{ title: pick(locale, 'Design + supervision', 'ንድፍ + ክትትል') }, { title: pick(locale, 'Contract care', 'የውል እንክብካቤ') }] },
    ],
  };
}

export const heroPricing = getHeroPricing('en');
export const pricingPricing = getPricingPricing('en');
export const faqs3Pricing = getFaqs3Pricing('en');
export const comparisonPricing = getComparisonPricing('en');
