import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconChevronDown,
} from '@tabler/icons-react';
import { AnnouncementProps, FooterProps, HeaderProps } from '../types';

export const announcementData: AnnouncementProps = {
  title: 'Practice',
  callToAction: {
    text: 'Daniel Assefa Practicing Architecture, design and supervision across Ethiopia',
    href: '/about',
  },
  callToAction2: {
    text: 'View portfolio',
    href: '/portfolio',
  },
};

export const headerData: HeaderProps = {
  links: [
    { label: 'Header.about', href: '/about' },
    { label: 'Header.services', href: '/services' },
    { label: 'Header.portfolio', href: '/portfolio' },
    { label: 'Header.blog', href: '/blog' },
    { label: 'Header.contact', href: '/contact' },
    {
      label: 'Header.pages',
      icon: IconChevronDown,
      links: [
        { label: 'Header.pricing', href: '/pricing' },
        { label: 'Header.faqs', href: '/faqs' },
        { label: 'Header.terms', href: '/terms' },
        { label: 'Header.privacy', href: '/privacy' },
      ],
    },
  ],
  actions: [
    {
      text: 'Header.portfolio',
      href: '/portfolio',
    },
  ],
  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  showLanguageSelector: true,
  position: 'right',
};

export const footerData: FooterProps = {
  title: 'Daniel Assefa Practicing Architecture',
  links: [
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
  ],
  columns: [
    {
      title: 'Practice',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Portfolio', href: '/portfolio' },
        { label: 'Consultation', href: '/pricing' },
      ],
    },
    {
      title: 'Writing',
      links: [
        { label: 'Blog', href: '/blog' },
        { label: 'FAQs', href: '/faqs' },
      ],
    },
    {
      title: 'Studio',
      links: [
        { label: 'Near Bole Michael Church, Addis Ababa', href: '/contact' },
        { label: 'Open map', href: '/contact' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { label: '+251 910 202 958', href: 'tel:+251910202958' },
        { label: 'danassgebbal12@gmail.com', href: 'mailto:danassgebbal12@gmail.com' },
      ],
    },
  ],
  socials: [
    { label: 'LinkedIn', icon: IconBrandLinkedin, href: '#' },
    { label: 'Instagram', icon: IconBrandInstagram, href: '#' },
  ],
  footNote: (
    <div className="mr-4 text-sm">
      Daniel Assefa Practicing Architecture. Buildings shaped by place, craft, and care.
    </div>
  ),
};

export const footerData2: FooterProps = {
  links: [
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
  ],
  columns: [
    {
      title: 'Studio',
      texts: ['Near Bole Michael Church, Addis Ababa', 'Daniel Assefa Practicing Architecture'],
    },
    {
      title: 'Phone',
      texts: ['+251 910 202 958'],
    },
    {
      title: 'Email',
      texts: ['danassgebbal12@gmail.com'],
    },
  ],
  socials: [
    { label: 'LinkedIn', icon: IconBrandLinkedin, href: '#' },
    { label: 'Instagram', icon: IconBrandInstagram, href: '#' },
  ],
  footNote: (
    <div className="mr-4 text-sm">
      © {new Date().getFullYear()} Daniel Assefa Practicing Architecture
    </div>
  ),
};
