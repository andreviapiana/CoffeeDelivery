import { CurrencyDollar, Money, CreditCard, Bank } from 'phosphor-react'
import {
  PaymentContainer,
  ContainerTitle,
  ButtonsContainer,
  PaymentButton,
} from './styles'

export function PaymentSelector() {
  return (
    <PaymentContainer>
      <ContainerTitle>
        <div className="iconWrapper">
          <CurrencyDollar size={22} />
        </div>
        <div>
          <h3>Pagamento</h3>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </ContainerTitle>
      <ButtonsContainer>
        <PaymentButton type="button">
          <div className="iconWrapper">
            <CreditCard size={18} />
          </div>
          CARTÃO DE CRÉDITO
        </PaymentButton>
        <PaymentButton type="button">
          <div className="iconWrapper">
            <Bank size={18} />
          </div>
          CARTÃO DE DÉBITO
        </PaymentButton>
        <PaymentButton type="button">
          <div className="iconWrapper">
            <Money size={18} />
          </div>
          DINHEIRO
        </PaymentButton>
      </ButtonsContainer>
    </PaymentContainer>
  )
}
