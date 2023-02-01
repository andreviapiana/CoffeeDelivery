import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  width: 36.8rem;
  padding: 0.8rem 0.4rem;

  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  img {
    width: 6.4rem;
    height: 6.4rem;
    margin-right: 2rem;
  }

  .card {
    display: flex;
    margin-bottom: 2.4rem;
    margin-top: 2.4rem;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  height: 3.2rem;

  margin-right: 4rem;
`

export const CardInfos = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.8rem;
  height: 3.2rem;
`

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.8rem;
  height: 3.2rem;

  p {
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const CoffeePrice = styled.div`
  display: flex;
  font-weight: bold;
`

export const RemoveButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;

  width: 100%;
  height: 3.2rem;
  padding: 0.8rem;

  border: none;
  border-radius: 0.6rem;

  font-size: 1.2rem;

  cursor: pointer;

  background-color: ${(props) => props.theme['base-button']};

  transition: 0.4s;

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }

  .iconWrapper {
    display: flex;
    color: ${(props) => props.theme.purple};
  }
`
