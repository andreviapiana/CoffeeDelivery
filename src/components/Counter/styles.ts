import styled from 'styled-components'

export const CounterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 7.2rem;
  height: 3.8rem;
  padding: 0.8rem;
  gap: 0.4rem;

  border-radius: 0.6rem;

  background-color: ${(props) => props.theme['base-button']};

  span {
    font-size: 1.6rem;
  }
`

export const IconWrapper = styled.button`
  width: 1.4rem;
  height: 1.4rem;

  border: none;
  background: none;
  color: ${(props) => props.theme.purple};

  transition: 0.4s;

  cursor: pointer;

  &:disabled {
    opacity: 0.4;
  }

  &:not(:disabled):hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`
