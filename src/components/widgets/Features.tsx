import CTA from '~/components/common/CTA';
import { FeaturesProps } from '~/shared/types';
import Headline from '../common/Headline';
import WidgetWrapper from '../common/WidgetWrapper';

type PracticeBoardProps = FeaturesProps & {
  bare?: boolean;
};

function PracticeBoard({ id, header, items, hasBackground = false, bare = false }: PracticeBoardProps) {
  if (!items?.length) return null;

  const content = (
    <div className="practice-board">
      <div className="practice-board__frame">
        <div className="practice-board__meta" aria-hidden>
          <span className="practice-board__sheet">A · 01</span>
          <span className="practice-board__rule" />
          <span className="practice-board__mark">Daniel Assefa</span>
        </div>

        {header && (
          <Headline
            header={{ ...header, position: 'left' }}
            containerClass="practice-board__headline mb-0 max-w-2xl"
            titleClass="text-3xl md:text-4xl lg:text-5xl"
            subtitleClass="text-base md:text-lg"
          />
        )}

        <div className="practice-board__grid">
          {items.map(({ title, description, callToAction }, index) => (
            <article
              key={id ? `practice-${id}-${index}` : `practice-${index}`}
              className={`practice-board__item practice-board__item--${index + 1}`}
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <span className="practice-board__index" aria-hidden>
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="practice-board__body">
                {title && <h3 className="practice-board__title font-heading">{title}</h3>}
                {description && <p className="practice-board__copy">{description}</p>}
                {callToAction && (
                  <div className="practice-board__cta">
                    <CTA
                      callToAction={callToAction}
                      linkClass="text-sm font-semibold text-primary-800 underline-offset-4 hover:underline dark:text-primary-300"
                    />
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );

  if (bare) {
    return (
      <section className="relative mx-auto py-12 md:py-16 lg:py-20" id={id || 'features2'}>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">{content}</div>
      </section>
    );
  }

  return (
    <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="scroll-mt-16 max-w-6xl">
      {content}
    </WidgetWrapper>
  );
}

const Features = (props: FeaturesProps) => <PracticeBoard {...props} />;

export default Features;
export { PracticeBoard };
