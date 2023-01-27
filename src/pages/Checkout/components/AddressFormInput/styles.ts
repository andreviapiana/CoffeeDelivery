import styled, { css } from 'styled-components'

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  position: relative;
  > p {
    color: ${(props) => props.theme['base-error']};
  }
`

interface InputStyleContainerProps {
  hasError: boolean
}

export const InputStyleContainer = styled.div<InputStyleContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 4.2rem;

  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 0.4rem;
  outline: none;

  font-size: 1.4rem;

  background-color: ${(props) => props.theme['base-input']};

  transition: 0.4s;

  &:focus-within {
    border-color: ${(props) => props.theme['yellow-dark']};
  }

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: ${(props) => props.theme['base-error']};
    `}

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
`

export const InputStyled = styled.input`
  outline: none;
  flex: 1;
  background: none;
  border: none;
  height: 100%;
  color: ${(props) => props.theme['base-text']};
  font-size: 1.4rem;
  padding: 0 1.2rem;
  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`

export const RightText = styled.p`
  font-size: 1.2rem;
  margin-right: 1.2rem;
  font-style: italic;
  color: ${(props) => props.theme['base-label']};
`

export const RegularText = styled.p`
  color: ${(props) => props.theme['base-text']};
  font-size: 1.4rem;
  line-height: 130%;
  font-weight: regular;
`
