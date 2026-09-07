import Image from 'next/image';
import { SocialProofProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';

const SocialProof = ({ images, id, hasBackground = false }: SocialProofProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="">
    <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 md:gap-x-14 md:gap-y-10">
      {images &&
        images.map(({ src, alt, link }, index) => (
          <a
            key={`item-social-proof-${index}`}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-16 items-center justify-center md:h-24"
          >
            <Image
              src={src}
              alt={alt}
              className="max-h-full max-w-[11rem] object-contain transition duration-150 hover:scale-105 md:max-w-[14rem]"
              width={224}
              height={96}
              sizes="(max-width: 768px) 176px, 224px"
              style={{ width: 'auto', height: 'auto' }}
              loading="lazy"
              decoding="async"
            />
          </a>
        ))}
    </div>
  </WidgetWrapper>
);

export default SocialProof;
