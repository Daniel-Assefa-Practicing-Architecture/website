import md from 'markdown-it';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import { findPostBySlug, findLatestPosts } from '~/utils/posts';


const getFormattedDate = (date) => date;

export async function generateMetadata({ params }) {
  const { slug, locale } = await params;
  const post = await findPostBySlug(slug, locale);
  if (!post) {
    return notFound();
  }
  return { title: post.title, description: post.description };
}

export async function generateStaticParams() {
  return (await findLatestPosts()).map(({ slug }) => ({ slug }));
}

export default async function Page({ params }) {
  const { slug, locale } = await params;
  const post = await findPostBySlug(slug, locale);

  if (!post) {
    return notFound();
  }

  return (
    <section className="mx-auto py-8 text-gray-900 dark:text-slate-100 sm:py-16 lg:py-20">
      <article>
        <header className={post.image ? 'text-center' : ''}>
          <p className="mx-auto max-w-3xl px-4 sm:px-6">
            <time dateTime={post.publishDate}>{getFormattedDate(post.publishDate)}</time> ~{' '}
            {/* {Math.ceil(post.readingTime)} min read */}
          </p>
          <h1 className="leading-tighter font-heading mx-auto mb-8 max-w-3xl px-4 text-4xl font-bold tracking-tighter sm:px-6 md:text-5xl">
            {post.title}
          </h1>
          {post.image ? (
            <Image
              src={post.image}
              className={`mx-auto mt-4 mb-6 max-w-full sm:rounded-md lg:max-w-6xl ${
                String(post.image).endsWith('.svg') || String(post.image).endsWith('.png')
                  ? 'bg-black object-contain'
                  : 'bg-gray-400 object-cover dark:bg-slate-700'
              }`}
              sizes="(max-width: 900px) 400px, 900px"
              alt={post.description}
              loading="eager"
              priority
              width={900}
              height={480}
            />
          ) : (
            <div className="mx-auto max-w-3xl px-4 sm:px-6">
              <div className="border-t dark:border-slate-700" />
            </div>
          )}
        </header>
        <div
          className="prose prose-primary-theme prose-headings:font-heading prose-headings:leading-tighter prose-img:rounded-md prose-img:shadow-lg container prose-lg max-w-none sm:max-w-3xl mx-auto mt-8 px-6 prose-headings:font-bold prose-headings:tracking-tighter dark:prose-invert sm:px-6 lg:prose-xl"
          dangerouslySetInnerHTML={{
            __html: md({
              html: true,
            }).render(post.content).replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ''),
          }}
        />
      </article>
    </section>
  );
}
