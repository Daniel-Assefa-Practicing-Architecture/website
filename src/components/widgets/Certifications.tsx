import { IconCompass, IconRuler2 } from '@tabler/icons-react';
import CTA from '~/components/common/CTA';
import Headline from '~/components/common/Headline';
import WidgetWrapper from '~/components/common/WidgetWrapper';
import { CallToActionType, FeaturesProps } from '~/shared/types';

type CertificationsProps = FeaturesProps & {
  callToAction?: CallToActionType;
};

const icons = [IconCompass, IconCompass, IconRuler2, IconRuler2];

const Certifications = ({
  header,
  items,
  id,
  hasBackground = false,
  callToAction,
}: CertificationsProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="max-w-6xl">
    {header && <Headline header={header} titleClass="text-3xl md:text-4xl" />}
    <div className="mt-10 grid gap-6 sm:grid-cols-2">
      {items?.map(({ title, description }, index) => {
        const Icon = icons[index % icons.length];
        return (
          <div
            key={`cert-${index}`}
            className="flex flex-col items-center border-b border-stone-200 pb-6 text-center dark:border-slate-700"
          >
            <span className="mb-3 text-primary-700 dark:text-primary-300">
              <Icon className="h-11 w-11 md:h-12 md:w-12" stroke={1.35} aria-hidden />
            </span>
            <div>
              <h3 className="font-heading text-lg font-semibold text-ink dark:text-white">{title}</h3>
              {description && (
                <p className="mt-1 text-stone-600 dark:text-slate-400">{description}</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
    {callToAction && (
      <div className="mt-10 flex justify-center">
        <CTA callToAction={callToAction} linkClass="btn btn-primary px-8 py-3" />
      </div>
    )}
  </WidgetWrapper>
);

export default Certifications;
