'use client';

import { useEffect, useState } from 'react';

/** Fetch blueprint SVG after paint so services navigations stay light. */
const BlueprintSketch = () => {
  const [svg, setSvg] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    void fetch('/images/services-blueprint.svg')
      .then((res) => res.text())
      .then((text) => {
        if (!cancelled) setSvg(text);
      })
      .catch(() => {
        /* Decorative */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="blueprint-sketch" aria-hidden="true">
      <div
        className="blueprint-sketch__sheet min-h-[12rem]"
        {...(svg ? { dangerouslySetInnerHTML: { __html: svg } } : {})}
      />
    </div>
  );
};

export default BlueprintSketch;
