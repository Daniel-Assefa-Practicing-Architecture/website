import Image from 'next/image';
import { HeroProps } from '~/shared/types';
import CTA from '../common/CTA';

const Hero2 = ({ title, subtitle, tagline, callToAction, callToAction2, image }: HeroProps) => {
  return (
    <section className="mt-[-72px] bg-primary-50 dark:bg-slate-800" id="heroTwo">
      <div className="mx-auto max-w-7xl px-4 pt-[72px] sm:px-6 md:flex md:min-h-0 2xl:h-auto">
        <div className="block py-12 text-center md:flex md:items-center md:py-16 md:text-left lg:py-20">
          <div className="mx-auto flex max-w-5xl basis-[62%] items-center">
            <div className="max-w-3xl pb-10 pr-0 md:py-0 md:pr-8 md:pb-0 lg:pr-12">
              {tagline && (
                <p className="text-base font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-200">
                  {tagline}
                </p>
              )}
              {title && (
                <h1 className="leading-tighter font-heading mb-4 px-4 text-5xl font-bold tracking-tighter text-gray-900 dark:text-slate-50 md:px-0 md:text-[3.48rem]">
                  {title}
                </h1>
              )}
              <div className="mx-auto max-w-3xl">
                {subtitle && <p className="mb-8 text-xl font-normal text-gray-600 dark:text-slate-400">{subtitle}</p>}
                <div className="flex max-w-none flex-col flex-nowrap justify-center gap-4 sm:flex-row md:m-0 md:justify-start">
                  {callToAction && <CTA callToAction={callToAction} linkClass="btn btn-primary" />}
                  {callToAction2 && <CTA callToAction={callToAction2} linkClass="btn" />}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center md:justify-end">
            <div className="relative mx-auto w-full max-w-[16rem] sm:max-w-[18rem] md:mx-0 md:max-w-[15rem] lg:max-w-[17rem]">
              {image && (
                <Image
                  className="mx-auto h-auto w-full rounded-md bg-gray-400 object-cover drop-shadow-xl dark:bg-slate-700"
                  src={image.src}
                  alt={image.alt}
                  width={320}
                  height={400}
                  sizes="(min-width: 768px) 272px, 288px"
                  style={{ width: '100%', height: 'auto' }}
                  loading="eager"
                  {...(typeof image.src === 'object' ? { placeholder: 'blur' as const } : {})}
                  priority
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
