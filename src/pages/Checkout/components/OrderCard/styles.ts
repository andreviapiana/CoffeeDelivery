import styled from 'styled-components'

export const OrderContainer = styled.form`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 44.8rem;
`

export const CardTitle = styled.div`
  height: 2.3rem;
  margin-bottom: 1.5rem;

  font-family: 'Baloo 2', cursive;
  font-size: 1.8rem;

  color: ${(props) => props.theme['base-title']};
`

export const CardContainer = styled.div`
  border-radius: 0.6rem 4.4rem;
  padding: 1.6rem 4rem;

  background-color: ${(props) => props.theme['base-card']};

  .productWrapper {
    max-height: 25.8rem;
    overflow: auto;
    overflow: overlay;
  }

  .errorWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 20rem;
    gap: 3rem;

    h2 {
      font-family: 'Baloo 2', cursive;
      display: flex;
      align-items: center;
      gap: 0.6rem;
    }
  }
`

export const ConfirmButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;

  width: 100%;
  height: 4.6rem;
  padding: 0.8rem;

  margin-top: 1.2rem;

  border: none;
  border-radius: 0.6rem;

  font-weight: bold;

  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};

  transition: 0.4s;

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 1.4rem;

  gap: 1.2rem;

  margin-top: 2.4rem;

  .total {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  span {
    font-size: 1.6rem;
  }

  strong {
    font-weight: bold;
    font-size: 2rem;
  }
`
