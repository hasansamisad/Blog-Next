'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import * as Styled from './styled';

export type PostContentProps = {
  content?: string | null;
};

export const PostContent = ({ content }: PostContentProps) => {
  if (typeof content !== 'string' || content.trim() === '') return null;

  return (
    <Styled.Container>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </Styled.Container>
  );
};
