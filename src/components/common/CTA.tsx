import { twMerge } from 'tailwind-merge';
import { Link } from '~/i18n/navigation';
import { CallToActionType, LinkOrButton } from '~/shared/types';

function isAppPath(href: string) {
  return href.startsWith('/') && !href.startsWith('//');
}

const CTA = ({ callToAction, containerClass, linkClass, iconClass }: LinkOrButton) => {
  const { text, href, icon: Icon, targetBlank } = callToAction as CallToActionType;

  if (!href || !(text || Icon)) return null;

  const className = twMerge('inline-flex items-center justify-center w-full sm:mb-0', linkClass);
  const icon = Icon ? (
    <Icon className={twMerge(`w-5 h-5 ${text ? 'mr-1 rtl:mr-0 rtl:ml-1' : ''}`, iconClass)} />
  ) : null;

  return (
    <div className={twMerge('flex w-auto cursor-pointer', containerClass)}>
      {targetBlank || !isAppPath(href) ? (
        <a
          className={className}
          href={href}
          {...(targetBlank ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {icon}
          {text}
        </a>
      ) : (
        <Link className={className} href={href}>
          {icon}
          {text}
        </Link>
      )}
    </div>
  );
};

export default CTA;
