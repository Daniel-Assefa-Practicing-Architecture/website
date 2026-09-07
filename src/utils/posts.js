import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

import { locales } from '~/i18n/routing';
import { mediaUrl } from '~/shared/data/media';

const BLOG_DIR = join(process.cwd(), 'src/content/blog');

/** Match post files like `slug.en.md` where the extension matches a configured locale */
const namedLocaleMarkdown = new RegExp(
  `\\.(${locales.join('|')})\\.md$`,
);

function listPostSlugs() {
  const files = fs.readdirSync(BLOG_DIR);
  const slugs = new Set();

  for (const filename of files) {
    if (!namedLocaleMarkdown.test(filename)) continue;
    slugs.add(filename.replace(namedLocaleMarkdown, ''));
  }

  return [...slugs].sort();
}

const postsByLocale = new Map();

function sortPostsChronologically(posts) {
  return [...posts].sort((a, b) => {
    const ta = Date.parse(String(a.publishDate ?? ''));
    const tb = Date.parse(String(b.publishDate ?? ''));
    const aTime = Number.isFinite(ta) ? ta : 0;
    const bTime = Number.isFinite(tb) ? tb : 0;
    if (aTime !== bTime) return aTime - bTime;
    return String(a.slug).localeCompare(String(b.slug));
  });
}

function withRemoteImage(post) {
  if (!post?.image) return post;
  return { ...post, image: mediaUrl(post.image) };
}

function loadLocale(locale) {
  const slugList = listPostSlugs();

  const postsPromise = Promise.all(
    slugList.map((slug) => findPostBySlug(slug, locale)),
  )
    .then((list) => list.filter(Boolean))
    .then(sortPostsChronologically);

  postsByLocale.set(locale, postsPromise);
}

/** Invalidate cache when iterating in dev/tests if needed */
function ensurePostsLoaded(locale) {
  const safeLocale = locales.includes(locale) ? locale : 'en';
  if (!postsByLocale.has(safeLocale)) {
    loadLocale(safeLocale);
  }
  return postsByLocale.get(safeLocale);
}

/** Posts sorted by {@link publishDate} (then slug); each uses markdown for {@param locale}, with {@code en} fallback per post. */
export const fetchPosts = async (locale = 'en') => {
  const safeLocale = locales.includes(locale) ? locale : 'en';
  ensurePostsLoaded(safeLocale);
  return await postsByLocale.get(safeLocale);
};

/** */
export const findLatestPosts = async ({ count, locale } = {}) => {
  const _count = count || 4;
  const posts = await fetchPosts(locale || 'en');

  return posts ? posts.slice(_count * -1) : [];
};

/**
 * Resolves `slug.{locale}.md`, then falls back to `slug.en.md`.
 * @param {string} slug
 * @param {string} [locale='en']
 */
export const findPostBySlug = async (slug, locale = 'en') => {
  if (!slug) return null;

  const safeLocale = locales.includes(locale) ? locale : 'en';
  const tryLocales = [...new Set([safeLocale, 'en'])];

  for (const loc of tryLocales) {
    try {
      const filepath = join(BLOG_DIR, `${slug}.${loc}.md`);
      const raw = fs.readFileSync(filepath, 'utf-8');
      const { data: frontmatter, content } = matter(raw);

      return withRemoteImage({
        slug,
        ...frontmatter,
        content,
      });
    } catch (e) {
      /* next candidate */
    }
  }

  return null;
};

/** */
export const findPostsByIds = async (ids) => {
  if (!Array.isArray(ids)) return [];

  const posts = await fetchPosts('en');

  return ids.reduce(function (r, id) {
    posts.some(function (post) {
      return id === post.id && r.push(post);
    });
    return r;
  }, []);
};
