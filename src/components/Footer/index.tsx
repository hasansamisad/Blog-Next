'use client';

import { SITE_NAME } from '@/config/app-config';
import * as Styled from './styled';

export const Footer = () => {
  return (
    <Styled.Container>
      <p>
        © {new Date().getFullYear()} {SITE_NAME}. Feito com Next.js e Strapi.
      </p>
    </Styled.Container>
  );
};
