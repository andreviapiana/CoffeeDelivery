import styled from 'styled-components'

export const ButtonContainer = styled.button`
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

  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme['yellow-light']};
  }
`
