import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    border-radius: ${theme.spacings.small};
    margin-bottom: ${theme.spacings.large};
    background: ${theme.colors.lightGray};

    img {
      object-fit: cover;
    }
  `}
`;
