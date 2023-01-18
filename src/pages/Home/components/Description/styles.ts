import styled from 'styled-components'
import homeBackground from '../../../../assets/home-background.png'

export const DescriptionContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 54.4rem;

  background: url(${homeBackground}) no-repeat;
  background-size: cover;
`

export const DescriptionContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 5.6rem;
`

export const TitleContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 58.8rem;

  gap: 1.6rem;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 4.8rem;
    font-weight: 800;
    line-height: 6.24rem;
    color: ${(props) => props.theme['base-title']};
  }

  p {
    font-size: 2rem;
    line-height: 2.6rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const BenefitsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  width: 100%;
  row-gap: 2rem;
  margin-top: 6.6rem;
`

export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  .iconWrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 3.2rem;
    height: 3.2rem;

    border-radius: 50%;

    color: ${(props) => props.theme.white};

    &.yellow-dark {
      background-color: ${(props) => props.theme['yellow-dark']};
    }

    &.yellow {
      background-color: ${(props) => props.theme.yellow};
    }

    &.gray {
      background-color: ${(props) => props.theme['base-text']};
    }

    &.purple {
      background-color: ${(props) => props.theme.purple};
    }
  }
`
