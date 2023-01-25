import {
  ButtonsContainer,
  ItemDetails,
  CoffeePrice,
  Container,
  RemoveButton,
} from './styles'
// eslint-disable-next-line import/no-absolute-path
import coffeeImg from '/tradicional.png'
import { Counter } from '../../../../components/Counter'
import { Trash } from 'phosphor-react'

export function ProductCard() {
  return (
    <Container>
      <div className="card">
        <img src={coffeeImg} alt="Imagem do Prato" />

        <ItemDetails>
          <p>Expresso Tradicional</p>
          <ButtonsContainer>
            <Counter />
            <RemoveButton type="button">
              <div className="iconWrapper">
                <Trash size={18} />
              </div>
              REMOVER
            </RemoveButton>
          </ButtonsContainer>
        </ItemDetails>

        <CoffeePrice>
          <p>R$ 9,90</p>
        </CoffeePrice>
      </div>
    </Container>
  )
}
