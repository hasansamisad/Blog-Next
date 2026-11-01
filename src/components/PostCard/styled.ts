import Link from 'next/link';
import styled, { css } from 'styled-components';

export const Card = styled(Link)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background: ${theme.colors.white};
    border-radius: ${theme.spacings.small};
    overflow: hidden;
    box-shadow: 0 0.2rem 0.8rem rgba(0, 0, 0, 0.08);
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;

    img {
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    &:hover {
      transform: translateY(-0.4rem);
      box-shadow: 0 0.8rem 1.6rem rgba(0, 0, 0, 0.15);
    }

    &:hover img {
      transform: scale(1.05);
    }

    &:focus-visible {
      outline: 0.3rem solid ${theme.colors.primary};
      outline-offset: 0.2rem;
    }
  `}
`;

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    background: ${theme.colors.lightGray};
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium};
    font-size: ${theme.font.sizes.medium};
    line-height: 1.4;
    color: ${theme.colors.black};
  `}
`;
