import { AddressForm } from './components/AddressForm'
import { OrderCard } from './components/OrderCard'
import { PaymentSelector } from './components/PaymentSelector'
import { AddressContainer, CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <AddressContainer>
        <AddressForm />
        <PaymentSelector />
      </AddressContainer>
      <OrderCard />
    </CheckoutContainer>
  )
}
