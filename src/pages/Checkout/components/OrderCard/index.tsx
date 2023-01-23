import { ProductCard } from '../ProductCard'
import {
  OrderContainer,
  CardTitle,
  CardContainer,
  ConfirmButton,
  TotalContainer,
} from './styles'

export function OrderCard() {
  return (
    <OrderContainer>
      <CardTitle>
        <p>Cafés selecionados</p>
      </CardTitle>
      <CardContainer>
        <div className="productWrapper">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <TotalContainer>
          <div className="total">
            <p>Total de itens</p>
            <span>R$ 9,99</span>
          </div>

          <div className="total">
            <p>Entrega</p>
            <span>R$ 9,90</span>
          </div>

          <div className="total">
            <strong>Total</strong>
            <strong>R$ 13,90</strong>
          </div>

          <ConfirmButton type="submit">CONFIRMAR PEDIDO</ConfirmButton>
        </TotalContainer>
      </CardContainer>
    </OrderContainer>
  )
}