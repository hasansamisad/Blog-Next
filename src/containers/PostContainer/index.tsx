'use client';

import type { PostData } from '@/domain/posts/post';
import { Heading } from '@/components/Heading';
import { PostCover } from '@/components/PostCover';
import { PostDetails } from '@/components/PostDetails';
import { PostContent } from '@/components/PostContent';
import { Comments } from '@/components/Comments';
import * as Styled from './styles';

export type PostContainerProps = {
  post: PostData;
};

export function PostContainer({ post }: PostContainerProps) {
  return (
    <Styled.Article>
      <Heading>{post.title}</Heading>
      <PostCover cover={post.cover} title={post.title} />
      <PostDetails
        author={post.author?.name}
        category={post.category?.name}
        date={post.publishedAt ?? post.createdAt}
      />
      <PostContent content={post.content} />
      <Comments slug={post.slug} />
    </Styled.Article>
  );
}
