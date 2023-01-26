import styled from 'styled-components'

export const PaymentMethodContainer = styled.div`
  input {
    display: flex;

    appearance: none;
    visibility: hidden;
  }

  input:checked + label div {
    background: ${(props) => props.theme['yellow-light']};
  }
`

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;

  height: 3rem;
  border-radius: 10rem;
  padding: 0.6rem 1.2rem;
  gap: 0.8rem;

  background: transparent;
  border: 1px solid ${(props) => props.theme.yellow};
  color: ${(props) => props.theme['yellow-dark']};

  font-weight: 700;
  font-size: 1rem;
  line-height: 1.3rem;
  text-transform: uppercase;

  cursor: pointer;

  transition: 0.4s;

  :hover {
    background-color: ${(props) => props.theme['yellow-light']};
  }

  user-select: none;
`
