'use client';

import { STUDIO_MAP_EMBED, STUDIO_MAP_LINK } from '~/shared/data/studio';

type EthiopiaMapProps = {
  title?: string;
  subtitle?: string;
  addressLines?: string[];
  visitLabel?: string;
  mapTitle?: string;
  mapEmbedUrl?: string;
  mapLinkUrl?: string;
};

/** Map embed for the Addis Ababa studio near Bole Michael Church. */
const EthiopiaMap = ({
  title = 'Studio location',
  subtitle = 'Near Bole Michael Church, in front of the ring road, Addis Ababa, Ethiopia',
  addressLines = ['Near Bole Michael Church, in front of the ring road', 'Addis Ababa, Ethiopia'],
  visitLabel = 'Visit',
  mapTitle = 'Map of the studio near Bole Michael Church',
  mapEmbedUrl = STUDIO_MAP_EMBED,
  mapLinkUrl = STUDIO_MAP_LINK,
}: EthiopiaMapProps) => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
      <div className="mb-8 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600 dark:text-accent-400">
          {visitLabel}
        </p>
        <h2 className="font-heading mt-2 text-3xl font-semibold text-ink dark:text-white sm:text-4xl">{title}</h2>
        <p className="mt-3 text-lg text-stone-600 dark:text-slate-400">{subtitle}</p>
        <ul className="mt-4 space-y-1 text-stone-700 dark:text-slate-300">
          {addressLines.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>
      <div className="overflow-hidden border border-stone-200 bg-stone-100 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <iframe
          title={mapTitle}
          src={mapEmbedUrl}
          className="h-[min(70vh,32rem)] w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <p className="mt-3 text-sm text-stone-500 dark:text-slate-500">
        <a
          href={mapLinkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-accent-500/50 underline-offset-2 hover:text-accent-700"
        >
          Open larger map
        </a>
      </p>
    </section>
  );
};

export default EthiopiaMap;
