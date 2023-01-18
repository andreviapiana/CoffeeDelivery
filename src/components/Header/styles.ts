import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;

  max-width: 112rem;
  width: 100%;
  margin: 3.2rem auto 3.2rem;
`

export const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`

interface HeaderButtonProps {
  variant: 'purple' | 'yellow'
}

export const HeaderButton = styled.button<HeaderButtonProps>`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 3.8rem;
  height: 3.8rem;
  padding: 0 0.8rem;
  gap: 0.4rem;

  border: none;
  border-radius: 0.6rem;

  font-size: 1.4rem;

  cursor: inherit;

  &:hover {
    -webkit-animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1)
      both;
    animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }

  span {
    position: absolute;
    top: -1rem;
    right: -1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 2rem;
    height: 2rem;

    border-radius: 50%;

    color: ${(props) => props.theme.white};

    font-size: 1.2rem;
    font-weight: 700;
  }

  ${({ variant }) => css`
    background-color: ${(props) => props.theme[`${variant}-light`]};
    color: ${(props) => props.theme[`${variant}-dark`]};
    span {
      background-color: ${(props) => props.theme[`${variant}-dark`]};
    }
  `}
  ${({ variant }) =>
    variant === 'purple' &&
    css`
      svg {
        color: ${(props) => props.theme.purple};
      }
    `}

  @-webkit-keyframes scale-up-center {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    100% {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
  }
  @keyframes scale-up-center {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    100% {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
  }
`
