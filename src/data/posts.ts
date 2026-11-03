import { strapiFetch } from '@/lib/strapi';
import { normalizeContent } from '@/lib/normalize-content';
import type { PostData, StrapiList } from '@/domain/posts/post';

export async function getAllPosts(page = 1, pageSize = 9) {
  return strapiFetch<StrapiList<PostData>>(
    `posts?populate=*&sort=createdAt:desc` +
      `&pagination[page]=${page}&pagination[pageSize]=${pageSize}`,
    { next: { revalidate: 60, tags: ['posts'] } }
  );
}

export async function getPostBySlug(slug: string): Promise<PostData | null> {
  const res = await strapiFetch<StrapiList<PostData>>(
    `posts?populate=*&filters[slug][$eq]=${encodeURIComponent(slug)}`,
    { next: { revalidate: 60, tags: ['posts', `post-${slug}`] } }
  );

  const post = res.data[0];
  if (!post) return null;

  return { ...post, content: normalizeContent(post.content) };
}

export async function getAllPostSlugs(): Promise<string[]> {
  const res = await strapiFetch<StrapiList<Pick<PostData, 'slug'>>>(
    'posts?fields[0]=slug&pagination[pageSize]=100',
    { next: { revalidate: 60, tags: ['posts'] } }
  );
  return res.data.map((post) => post.slug);
}
