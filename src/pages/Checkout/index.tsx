import { AddressForm } from './components/AddressForm'
import { OrderCard } from './components/OrderCard'
import { PaymentSelector } from './components/PaymentSelector'
import { AddressContainer, CheckoutContainer } from './styles'

import { FormProvider, useForm } from 'react-hook-form'

export function Checkout() {
  const confirmOrderForm = useForm()

  const { handleSubmit } = confirmOrderForm

  function handleConfirmOrder(data: any) {
    console.log(data)
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <CheckoutContainer onSubmit={handleSubmit(handleConfirmOrder)}>
        <AddressContainer>
          <AddressForm />
          <PaymentSelector />
        </AddressContainer>
        <OrderCard />
      </CheckoutContainer>
    </FormProvider>
  )
}
