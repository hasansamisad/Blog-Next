import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    background: ${theme.colors.black};
    color: ${theme.colors.white};
    padding: ${theme.spacings.large} ${theme.spacings.medium};
    text-align: center;
    font-size: ${theme.font.sizes.small};
  `}
`;
