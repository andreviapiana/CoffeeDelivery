import styled from 'styled-components'

export const PaymentMethodContainer = styled.div`
  input {
    display: flex;

    appearance: none;
    visibility: hidden;
  }

  input:checked + label div {
    background: ${(props) => props.theme['purple-light']};
    border-color: ${(props) => props.theme.purple};

    &:hover {
      background: ${(props) => props.theme['base-hover']};
    }
  }
`

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;

  height: 5.1rem;
  padding: 1.75rem 1.6rem;
  gap: 1.2rem;
  width: 100%;

  border-radius: 0.6rem;
  border: 1px solid ${(props) => props.theme['base-button']};

  font-size: 1.2rem;
  text-transform: uppercase;

  color: ${(props) => props.theme['base-text']};
  background: ${(props) => props.theme['base-button']};

  transition: 0.4s;

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }

  user-select: none;
`
