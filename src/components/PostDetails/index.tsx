'use client';

import * as Styled from './styled';

export type PostDetailsProps = {
  author?: string;
  category?: string;
  date: string;
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('pt-BR', {
    dateStyle: 'long',
    timeZone: 'America/Sao_Paulo',
  });

export const PostDetails = ({ author, category, date }: PostDetailsProps) => {
  return (
    <Styled.Container>
      {author && <span>Por {author}</span>}
      <time dateTime={date}>{formatDate(date)}</time>
      {category && <span>{category}</span>}
    </Styled.Container>
  );
};
