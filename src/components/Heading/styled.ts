import styled, { css } from 'styled-components';

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    line-height: 1.2;
    margin-bottom: ${theme.spacings.large};
  `}
`;
