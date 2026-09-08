'use client';

import { useEffect, useState } from 'react';

const LOGO_MARKUP = `
	<g id="practice-logo">
		<text x="403.7" y="248" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="38" font-weight="600" fill="#231F20">Daniel Assefa</text>
		<text x="403.7" y="286" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="13" font-weight="600" letter-spacing="3.5" fill="#D36866">BUILDING CONSULTANT</text>
	</g>`;

const BOARD_CLOSE =
  '<rect x="151.7" y="165.3" class="st5" width="504" height="180"/>\n\t\t<path class="st4" d="M658.2,347.8h-509v-185h509V347.8z M154.2,342.8h499v-175h-499V342.8z"/>\n\t</g>';

/** Load SVG after paint so navigations are not blocked by a large inlined payload. */
const ConstructionSwing = () => {
  const [markup, setMarkup] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    void fetch('/images/construction-site.svg')
      .then((res) => res.text())
      .then((svg) => {
        if (cancelled) return;
        const withLogo = svg.includes(BOARD_CLOSE)
          ? svg.replace(
              BOARD_CLOSE,
              `<rect x="151.7" y="165.3" class="st5" width="504" height="180"/>\n\t\t<path class="st4" d="M658.2,347.8h-509v-185h509V347.8z M154.2,342.8h499v-175h-499V342.8z"/>${LOGO_MARKUP}\n\t</g>`,
            )
          : svg;
        setMarkup(`<div class="container">${withLogo}</div>`);
      })
      .catch(() => {
        /* Illustration is decorative; fail quietly. */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (!markup) {
    return (
      <div
        className="construction-swing min-h-[14rem] rounded-lg bg-gray-100 dark:bg-slate-800"
        role="img"
        aria-label="Daniel Assefa Building Consultant, construction site illustration"
      />
    );
  }

  return (
    <div
      className="construction-swing"
      role="img"
      aria-label="Daniel Assefa Building Consultant, construction site illustration"
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
};

export default ConstructionSwing;
