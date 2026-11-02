'use client';

import Image from 'next/image';
import type { PostCover } from '@/domain/posts/post';
import * as Styled from './styled';

export type PostCardProps = {
  slug: string;
  title: string;
  cover?: PostCover | null;
};

export const PostCard = ({ slug, title, cover }: PostCardProps) => {
  return (
    <Styled.Card href={`/post/${slug}`}>
      <Styled.ImageWrapper>
        {cover && (
          <Image
            src={cover.url}
            alt={cover.alternativeText ?? title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
      </Styled.ImageWrapper>
      <Styled.Title>{title}</Styled.Title>
    </Styled.Card>
  );
};
