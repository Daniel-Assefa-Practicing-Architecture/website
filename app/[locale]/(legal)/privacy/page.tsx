import type { Metadata } from 'next';

import fs from 'fs';
import path from 'path';
import md from 'markdown-it';

export const metadata: Metadata = {
  title: 'Privacy',
};

const Page = () => {
  const filePath = path.join(process.cwd(), 'src/content/privacy/privacy.md');
  const fileContent = fs.readFileSync(filePath, 'utf8');

  return (
    <div
      className="prose prose-primary-theme prose-headings:font-heading prose-headings:leading-tighter prose-img:rounded-md prose-img:shadow-lg container prose-lg max-w-none sm:max-w-3xl mx-auto mt-8 px-6 prose-headings:font-bold prose-headings:tracking-tighter dark:prose-invert sm:px-6 lg:prose-xl"
      dangerouslySetInnerHTML={{
        __html: md({
          html: true,
        }).render(fileContent),
      }}
    />
  );
};

export default Page;
