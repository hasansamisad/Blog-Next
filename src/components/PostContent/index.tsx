'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import * as Styled from './styled';

export type PostContentProps = {
  content: string;
};

export const PostContent = ({ content }: PostContentProps) => {
  return (
    <Styled.Container>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </Styled.Container>
  );
};
