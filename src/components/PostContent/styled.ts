import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    line-height: 1.7;

    h1,
    h2,
    h3,
    h4 {
      margin: ${theme.spacings.large} 0 ${theme.spacings.medium};
      line-height: 1.3;
    }

    h1 {
      font-size: ${theme.font.sizes.xlarge};
    }
    h2 {
      font-size: ${theme.font.sizes.large};
    }
    h3 {
      font-size: 2rem;
    }

    p,
    ul,
    ol,
    pre,
    blockquote,
    table {
      margin-bottom: ${theme.spacings.medium};
    }

    ul,
    ol {
      padding-left: ${theme.spacings.large};
    }

    ul {
      list-style: disc;
    }
    ol {
      list-style: decimal;
    }

    a {
      color: ${theme.colors.primary};
      text-decoration: underline;
    }

    blockquote {
      border-left: 0.4rem solid ${theme.colors.primary};
      padding-left: ${theme.spacings.medium};
      color: ${theme.colors.gray};
    }

    code {
      background: ${theme.colors.lightGray};
      padding: 0.2rem 0.6rem;
      border-radius: 0.4rem;
      font-size: 0.9em;
    }

    pre {
      background: ${theme.colors.black};
      color: ${theme.colors.white};
      padding: ${theme.spacings.medium};
      border-radius: ${theme.spacings.small};
      overflow-x: auto;
    }

    pre code {
      background: transparent;
      padding: 0;
    }

    img {
      border-radius: ${theme.spacings.small};
      margin: ${theme.spacings.medium} 0;
    }

    table {
      border-collapse: collapse;
      display: block;
      overflow-x: auto;
    }

    th,
    td {
      border: 1px solid ${theme.colors.lightGray};
      padding: ${theme.spacings.small} ${theme.spacings.medium};
    }
  `}
`;
