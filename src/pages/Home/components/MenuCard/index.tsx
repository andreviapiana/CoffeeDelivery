import { ShoppingCart } from 'phosphor-react'
import coffeeImg from '../../../../assets/tradicional.png'
import { Counter } from '../../../../components/Counter'
import {
  AddToCartButton,
  CardContainer,
  Container,
  OrderContainer,
  PurchaseCard,
} from './styles'

export function MenuCard() {
  return (
    <CardContainer>
      <Container>
        <img src={coffeeImg} alt="Imagem superior do copo de café" />

        <div className="coffeeCategory">
          <span>TRADICIONAL</span>
        </div>

        <h3 className="product-title">Expresso Tradicional</h3>

        <p className="description">
          O tradicional café feito com água quente e grãos moídos
        </p>

        <OrderContainer>
          <p className="price">
            R$ <span>9,90</span>
          </p>

          <PurchaseCard>
            <Counter />

            <AddToCartButton>
              <ShoppingCart size={20} weight="fill" />
            </AddToCartButton>
          </PurchaseCard>
        </OrderContainer>
      </Container>
    </CardContainer>
  )
}
