import { SmileySad } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContext'
import { ProductCard } from '../ProductCard'
import {
  OrderContainer,
  CardTitle,
  CardContainer,
  ConfirmButton,
  TotalContainer,
} from './styles'

export function OrderCard() {
  const { cart } = useContext(CartContext)

  const cartTotal = cart.reduce((sumTotal, coffee) => {
    return sumTotal + coffee.price * coffee.amount
  }, 0)

  const cartTotalFormatted = cartTotal.toLocaleString('pt-br', {
    minimumFractionDigits: 2,
  })

  const deliveryFee = 4.5

  const total = (cartTotal + deliveryFee).toLocaleString('pt-br', {
    minimumFractionDigits: 2,
  })

  return (
    <OrderContainer>
      <CardTitle>
        <p>Cafés selecionados</p>
      </CardTitle>

      {cart.length === 0 ? (
        <CardContainer>
          <div className="errorWrapper">
            <h2>
              Ooooops!!
              <SmileySad size={28} weight="bold" />
            </h2>
            <span>Parece que o seu carrinho ainda está vazio!</span>
            <h4>Adicione algo para poder prosseguir!</h4>
          </div>
        </CardContainer>
      ) : (
        <CardContainer>
          <div className="productWrapper">
            {cart.map((item) => {
              return <ProductCard key={item.id} coffee={item} />
            })}
          </div>
          <TotalContainer>
            <div className="total">
              <p>Total de itens</p>
              <span>R$ {cartTotalFormatted}</span>
            </div>

            <div className="total">
              <p>Entrega</p>
              <span>R$ 4,50</span>
            </div>

            <div className="total">
              <strong>Total</strong>
              <strong>R$ {total}</strong>
            </div>

            <ConfirmButton type="submit">CONFIRMAR PEDIDO</ConfirmButton>
          </TotalContainer>
        </CardContainer>
      )}
    </OrderContainer>
  )
}
