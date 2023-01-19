import styled from 'styled-components'

export const DeliveryContainer = styled.main`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 112rem;
  margin: 8rem auto;
`

export const TitleContent = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 58.8rem;

  gap: 0.4rem;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 3.2rem;
    font-weight: 800;
    color: ${(props) => props.theme['yellow-dark']};
  }

  p {
    font-size: 2rem;
    line-height: 2.6rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const DescriptionContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 5.6rem;
  margin-top: 4rem;
`

export const OrderContent = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 52.6rem;
  padding: 4rem;
  row-gap: 3.2rem;

  border-radius: 0.6rem 3.6rem;
  background-color: ${(props) => props.theme.background};

  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 0.7rem 3.7rem 0.7rem 3.7rem;
    background: linear-gradient(105deg, #dbac2c 3.2%, #8047f8 98.25%);
  }
`

export const Icons = styled.div`
  display: flex;
  align-items: center;

  gap: 1.2rem;
  line-height: 2.1rem;

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

    &.purple {
      background-color: ${(props) => props.theme.purple};
    }
  }
`
