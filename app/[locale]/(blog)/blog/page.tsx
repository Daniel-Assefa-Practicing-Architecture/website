import type { Metadata } from 'next';

import Image from 'next/image';

import { Link } from '~/i18n/navigation';
import { findLatestPosts } from '~/utils/posts';

export const metadata: Metadata = {
  title: 'Blog',
};

export default async function BlogIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const posts = (await findLatestPosts({ locale, count: 48 })).reverse();

  return (
    <section className="mx-auto max-w-3xl px-6 py-12 sm:px-6 sm:py-16 lg:py-20">
      <header>
        <h1 className="leading-tighter font-heading mb-8 text-center text-4xl font-bold tracking-tighter md:mb-16 md:text-5xl">
          Blog
        </h1>
      </header>
      <div className="grid grid-cols-1 gap-6  p-4 md:p-0 lg:grid-cols-2">
        {posts.map(({ slug, title, image }: { slug: string; title: string; image: string }) => (
          <div key={slug} className="flex flex-col overflow-hidden rounded-xl border border-gray-200 shadow-lg dark:border-slate-700">
            <Link href={`/${slug}`}>
              <Image
                width={650}
                height={340}
                alt={title}
                src={`${image}`}
                className={`h-52 w-full ${
                  image?.endsWith('.svg') || image?.endsWith('.png')
                    ? 'bg-black object-contain'
                    : 'object-cover'
                }`}
                loading="lazy"
                decoding="async"
              />
              <h2 className="p-4 font-bold">{title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
