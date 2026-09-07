import { readFileSync } from 'node:fs';
import { join } from 'node:path';

/** Blueprint sketch animation on tilted paper sheets (services hero visual). */
const BlueprintSketch = () => {
  const svg = readFileSync(join(process.cwd(), 'public/images/services-blueprint.svg'), 'utf8');

  return (
    <div className="blueprint-sketch" aria-hidden="true">
      <div
        className="blueprint-sketch__sheet"
        dangerouslySetInnerHTML={{ __html: svg }}
      />
    </div>
  );
};

export default BlueprintSketch;
