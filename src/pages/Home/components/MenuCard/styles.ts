import styled from 'styled-components'

export const CardContainer = styled.main`
  display: flex;
  flex-direction: column;
  text-align: center;

  max-width: 25.6rem;
  padding: 0 2rem 1.5rem;

  font-size: 1.4rem;

  background-color: ${(props) => props.theme['base-card']};
  border-radius: 0.6rem 3.6rem;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 25.6rem;

  img {
    position: relative;
    top: -2rem;
  }

  .coffeeCategory {
    margin-top: -0.8rem;
    margin-bottom: 1.6rem;
    padding: 0.4rem 0.8rem;

    border-radius: 10rem;

    font-weight: 700;
    font-size: 1rem;

    color: ${(props) => props.theme['yellow-dark']};
    background-color: ${(props) => props.theme['yellow-light']};
  }

  .product-title {
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    font-weight: 700;

    color: ${(props) => props.theme['base-subtitle']};
  }

  .description {
    margin-top: 0.8rem;
    margin-bottom: 3.3rem;

    color: ${(props) => props.theme['base-label']};
  }

  .price {
    span {
      font-family: 'Baloo 2', cursive;
      font-weight: 800;
      font-size: 24px;

      margin-right: 2.3rem;
    }
  }
`

export const OrderContainer = styled.div`
  display: flex;
`

export const PurchaseCard = styled.div`
  display: flex;
  gap: 0.8rem;
`

export const AddToCartButton = styled.button`
  justify-content: center;
  align-items: center;

  width: 38px;
  height: 38px;
  padding: 8px;
  gap: 8px;
  border: none;
  border-radius: 6px;

  cursor: pointer;
  transition: 0.4s;

  background-color: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme.white};

  &:hover {
    background-color: ${(props) => props.theme.purple};
  }
`
