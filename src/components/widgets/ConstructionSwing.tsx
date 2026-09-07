import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const LOGO_MARKUP = `
	<g id="practice-logo">
		<text x="403.7" y="248" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="38" font-weight="600" fill="#231F20">Daniel Assefa</text>
		<text x="403.7" y="286" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="13" font-weight="600" letter-spacing="3.5" fill="#D36866">PRACTICING ARCHITECTURE</text>
	</g>`;

/** Exact construction-site SVG with swinging boom; billboard shows the practice logo. */
const ConstructionSwing = () => {
  let svg = readFileSync(join(process.cwd(), 'public/images/construction-site.svg'), 'utf8');

  const boardClose =
    '<rect x="151.7" y="165.3" class="st5" width="504" height="180"/>\n\t\t<path class="st4" d="M658.2,347.8h-509v-185h509V347.8z M154.2,342.8h499v-175h-499V342.8z"/>\n\t</g>';

  if (svg.includes(boardClose)) {
    svg = svg.replace(
      boardClose,
      `<rect x="151.7" y="165.3" class="st5" width="504" height="180"/>\n\t\t<path class="st4" d="M658.2,347.8h-509v-185h509V347.8z M154.2,342.8h499v-175h-499V342.8z"/>${LOGO_MARKUP}\n\t</g>`,
    );
  }

  return (
    <div
      className="construction-swing"
      role="img"
      aria-label="Daniel Assefa Practicing Architecture, construction site illustration"
      dangerouslySetInnerHTML={{
        __html: `<div class="container">${svg}</div>`,
      }}
    />
  );
};

export default ConstructionSwing;
