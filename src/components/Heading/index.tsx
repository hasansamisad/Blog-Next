'use client';

import * as Styled from './styled';

export type HeadingProps = {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3';
};

export const Heading = ({ children, as = 'h1' }: HeadingProps) => {
  return <Styled.Title as={as}>{children}</Styled.Title>;
};
