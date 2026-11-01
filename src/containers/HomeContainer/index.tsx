'use client';

import type { PostData } from '@/domain/posts/post';
import { PostCard } from '@/components/PostCard';
import * as Styled from './styled';

export type HomeContainerProps = {
  posts: PostData[];
};

export function HomeContainer({ posts }: HomeContainerProps) {
  if (posts.length === 0) {
    return <Styled.Empty>Nenhum post encontrado.</Styled.Empty>;
  }

  return (
    <Styled.Grid>
      {posts.map((post) => (
        <PostCard
          key={post.documentId}
          slug={post.slug}
          title={post.title}
          cover={post.cover}
        />
      ))}
    </Styled.Grid>
  );
}
