import styled from 'styled-components'

export const PaymentContainer = styled.form`
  width: 100%;
  max-width: 64rem;
  margin-top: 1.2rem;
  border-radius: 0.6rem;
  padding: 4rem;

  background-color: ${(props) => props.theme['base-card']};
`

export const ContainerTitle = styled.div`
  display: flex;
  gap: 0.8rem;

  h3 {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: 1.4rem;
    line-height: 2.1rem;
    margin-top: 2px;
  }

  .iconWrapper {
    color: ${(props) => props.theme.purple};
  }
`

export const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: 1.2rem;
  margin-top: 3.2rem;

  > p {
    grid-column: span 3;
    font-size: 1.4rem;
    color: ${(props) => props.theme['base-error']};
  }
`

export const PaymentButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;

  width: 100%;
  height: 5.1rem;
  gap: 1.2rem;
  padding: 1.75rem 1.6rem;

  border: none;
  border-radius: 0.6rem;

  font-size: 1.2rem;

  background-color: ${(props) => props.theme['base-button']};

  transition: 0.4s;

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }

  &:active {
    outline: 1px solid ${(props) => props.theme.purple};
    background-color: ${(props) => props.theme['purple-light']};
  }

  .iconWrapper {
    display: flex;
    color: ${(props) => props.theme.purple};
  }
`
