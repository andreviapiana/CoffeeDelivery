import styled from 'styled-components'

export const AddressContainer = styled.main`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 64rem;
`

export const CardTitle = styled.div`
  height: 2.3rem;
  margin-bottom: 1.5rem;

  font-family: 'Baloo 2', cursive;
  font-size: 1.8rem;

  color: ${(props) => props.theme['base-title']};
`

export const FormContainer = styled.form`
  border-radius: 0.6rem;
  padding: 4rem;

  background-color: ${(props) => props.theme['base-card']};
`

export const FormTitle = styled.div`
  display: flex;

  gap: 0.8rem;
  grid-column: span 3;

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
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const InputsContainer = styled.div`
  display: grid;
  grid-template-columns: 20rem 27.6rem 6rem;
  column-gap: 1.2rem;
  row-gap: 1.6rem;

  margin-top: 3.2rem;
  border-radius: 0.6rem;

  background-color: ${(props) => props.theme['base-card']};

  .cep {
    grid-column: span 3;
    max-width: 20rem;
  }
  .street {
    grid-column: span 3;
  }
  .complement {
    grid-column: span 2;
  }
`

export const Input = styled.input`
  height: 4.2rem;
  padding: 1.2rem;

  font-size: 1.4rem;

  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 0.4rem;
  outline: none;

  background-color: ${(props) => props.theme['base-input']};

  transition: 0.4s;

  &:focus {
    border: 1px solid ${(props) => props.theme['yellow-dark']};
  }
`
