import styled from 'styled-components'

export const MenuContainer = styled.main`
  display: flex;
  flex-direction: column;
  margin: 3.2rem auto;

  width: 100%;
  max-width: 112rem;
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 5.4rem;

  h2 {
    font-family: 'Baloo 2', cursive;
    font-size: 3.2rem;
    font-weight: 800;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.8rem;
`

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 3.2rem;
  gap: 4rem;
  align-content: space-around;
`
