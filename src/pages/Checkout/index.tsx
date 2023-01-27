import { AddressForm } from './components/AddressForm'
import { OrderCard } from './components/OrderCard'
import { PaymentSelector } from './components/PaymentSelector'
import { AddressContainer, CheckoutContainer } from './styles'

import { FormProvider, useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}

const confirmOrderFormValidationSchema = zod.object({
  cep: zod
    .string()
    .min(8, 'Informe um CEP válido')
    .max(8, 'O CEP deve ter 8 caracteres'),
  rua: zod.string().min(1, 'Informe a Rua'),
  numero: zod.string().min(1, 'Informe o número da residência'),
  complemento: zod.string(),
  bairro: zod.string().min(1, 'Informe o Bairro'),
  cidade: zod.string().min(1, 'Informe a Cidade'),
  UF: zod.string().min(2, 'Informe o UF').max(2, 'UF inválido'),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: 'Selecione uma forma de pagamento' }
    },
  }),
})

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>

type ConfirmOrderFormData = OrderData

export function Checkout() {
  /* const confirmOrderForm = useForm() */

  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  })

  const { handleSubmit, reset } = confirmOrderForm

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    reset()
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
