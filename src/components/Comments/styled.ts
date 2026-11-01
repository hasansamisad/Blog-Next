import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xlarge};
    padding-top: ${theme.spacings.large};
    border-top: 1px solid ${theme.colors.lightGray};
  `}
`;
