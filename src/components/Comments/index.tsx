'use client';

import { useEffect, useRef } from 'react';
import { GISCUS } from '@/config/app-config';
import * as Styled from './styled';

export type CommentsProps = {
  slug: string;
};

export const Comments = ({ slug }: CommentsProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container || !GISCUS.repoId) return;

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';

    const attrs: Record<string, string> = {
      'data-repo': GISCUS.repo,
      'data-repo-id': GISCUS.repoId,
      'data-category': GISCUS.category,
      'data-category-id': GISCUS.categoryId,
      'data-mapping': 'specific',
      'data-term': slug,
      'data-strict': '0',
      'data-reactions-enabled': '1',
      'data-emit-metadata': '0',
      'data-input-position': 'top',
      'data-theme': 'light',
      'data-lang': 'pt',
    };

    Object.entries(attrs).forEach(([key, value]) =>
      script.setAttribute(key, value)
    );

    container.appendChild(script);

    // Ao trocar de post (ou desmontar), limpa o widget antigo
    return () => {
      container.replaceChildren();
    };
  }, [slug]);

  return (
    <Styled.Container>
      <div ref={ref} />
    </Styled.Container>
  );
};
