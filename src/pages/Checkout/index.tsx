import { AddressForm } from './components/AddressForm'
import { OrderCard } from './components/OrderCard'
import { PaymentSelector } from './components/PaymentSelector'
import { AddressContainer, CheckoutContainer } from './styles'

import { FormProvider, useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

// eslint-disable-next-line no-unused-vars
enum PaymentMethods {
  // eslint-disable-next-line no-unused-vars
  credit = 'credit',
  // eslint-disable-next-line no-unused-vars
  debit = 'debit',
  // eslint-disable-next-line no-unused-vars
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
    defaultValues: {
      cep: '',
      rua: '',
      numero: '',
      bairro: '',
      cidade: '',
      UF: '',
      complemento: '',
    },
  })

  const { clearCart } = useContext(CartContext)

  const { handleSubmit, reset } = confirmOrderForm

  const navigate = useNavigate()

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    navigate('/delivery')
    reset()
    console.log(data)
    clearCart()
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
