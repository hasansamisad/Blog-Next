'use client';

import Image from 'next/image';
import type { PostCover as PostCoverType } from '@/domain/posts/post';
import * as Styled from './styled';

export type PostCoverProps = {
  cover: PostCoverType;
  title: string;
};

export const PostCover = ({ cover, title }: PostCoverProps) => {
  return (
    <Styled.Wrapper>
      <Image
        src={cover.url}
        alt={cover.alternativeText ?? title}
        fill
        sizes="(max-width: 960px) 100vw, 960px"
      />
    </Styled.Wrapper>
  );
};
