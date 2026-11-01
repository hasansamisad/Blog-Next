import styled, { css } from 'styled-components';

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
    gap: ${theme.spacings.large};
  `}
`;

export const Empty = styled.p`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.colors.gray};
  `}
`;
