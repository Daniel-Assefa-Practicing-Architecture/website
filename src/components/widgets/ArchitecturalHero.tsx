'use client';

import { useEffect, useRef } from 'react';
import { HeroProps } from '~/shared/types';
import CTA from '../common/CTA';

const HERO_VIDEO =
  'https://s3.ca-central-1.amazonaws.com/danielgebre.net/images/15575346-hd_1920_1080_30fps.mp4';

type ArchitecturalHeroProps = HeroProps & {
  videoSrc?: string;
};

const ArchitecturalHero = ({
  title,
  subtitle,
  tagline,
  callToAction,
  callToAction2,
  videoSrc = HERO_VIDEO,
}: ArchitecturalHeroProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    let sourceAttached = false;

    const attachAndPlay = () => {
      if (!sourceAttached) {
        video.src = videoSrc;
        sourceAttached = true;
        video.load();
      }
      if (media.matches) {
        video.pause();
      } else {
        void video.play().catch(() => {
          /* Autoplay can be blocked; muted + playsInline usually works. */
        });
      }
    };

    const syncMotion = () => {
      if (!sourceAttached) return;
      if (media.matches) {
        video.pause();
      } else {
        void video.play().catch(() => undefined);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          attachAndPlay();
        } else {
          video.pause();
        }
      },
      { rootMargin: '120px' },
    );

    observer.observe(video);
    media.addEventListener('change', syncMotion);
    return () => {
      observer.disconnect();
      media.removeEventListener('change', syncMotion);
    };
  }, [videoSrc]);

  return (
    <section id="heroOne" className="relative flex min-h-[100svh] items-center overflow-hidden bg-black">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-black/55" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/40" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          {tagline && (
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-highlight-400">{tagline}</p>
          )}
          {title && (
            <h1 className="font-heading mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
              {title}
            </h1>
          )}
          <div className="mx-auto mt-5 max-w-2xl">
            {subtitle && <p className="text-lg text-white/85 md:text-xl">{subtitle}</p>}
            <div className="mt-8 flex max-w-none flex-col flex-nowrap gap-3 px-4 sm:flex-row sm:justify-center">
              {callToAction && <CTA callToAction={callToAction} linkClass="btn btn-primary" />}
              {callToAction2 && (
                <CTA
                  callToAction={callToAction2}
                  linkClass="btn border-white/55 bg-transparent text-white hover:border-white hover:bg-white/10"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitecturalHero;
