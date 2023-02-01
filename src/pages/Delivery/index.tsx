import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'
import {
  DeliveryContainer,
  DescriptionContent,
  Icons,
  OrderContent,
  TitleContent,
} from './styles'
import deliveryImg from '../../assets/delivery.png'
import { useLocation } from 'react-router-dom'
import { OrderData } from '../Checkout'

export function Delivery() {
  const location = useLocation()
  const state = location.state as OrderData

  return (
    <DeliveryContainer>
      <TitleContent>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </TitleContent>
      <DescriptionContent>
        <OrderContent>
          <Icons>
            <div className="iconWrapper purple">
              <MapPin size={18} weight="fill" />
            </div>
            <span>
              Entrega em <strong>{`Rua ${state.rua}, ${state.numero}`}</strong>
              <br /> {`${state.bairro} - ${state.cidade}, ${state.UF}`}
            </span>
          </Icons>
          <Icons>
            <div className="iconWrapper yellow">
              <Clock size={18} weight="fill" />
            </div>
            <span>
              Previsão de entrega <br />
              <strong>20 min - 30 min</strong>
            </span>
          </Icons>
          <Icons>
            <div className="iconWrapper yellow-dark">
              <CurrencyDollar size={18} weight="fill" />
            </div>
            <span>
              Pagamento na entrega <br />
              <strong>{state.paymentMethod}</strong>
            </span>
          </Icons>
        </OrderContent>
        <img
          src={deliveryImg}
          alt="Imagem de um entregador de delivery andando em uma moto"
        />
      </DescriptionContent>
    </DeliveryContainer>
  )
}
