import styled, { css } from 'styled-components';

export const Container = styled.main`
  ${({ theme }) => css`
    flex: 1;
    width: 100%;
    max-width: 120rem;
    margin: 0 auto;
    padding: ${theme.spacings.large} ${theme.spacings.medium};
  `}
`;
