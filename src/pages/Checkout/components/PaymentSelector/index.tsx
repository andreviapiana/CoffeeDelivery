import { CurrencyDollar, Money, CreditCard, Bank } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { PaymentMethodInput } from '../PaymentInput'
import { PaymentContainer, ContainerTitle, ButtonsContainer } from './styles'

export const paymentMethods = {
  credit: {
    label: 'Cartão de Crédito',
    icon: <CreditCard size={18} />,
  },
  debit: {
    label: 'Cartão de Débito',
    icon: <Bank size={18} />,
  },
  money: {
    label: 'Dinheiro',
    icon: <Money size={18} />,
  },
}

export function PaymentSelector() {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const paymentMethodError = errors?.paymentMethod?.message as unknown as string

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
        {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
          <PaymentMethodInput
            key={label}
            id={key}
            icon={icon}
            label={label}
            value={label}
            {...register('paymentMethod')}
          />
        ))}
        {paymentMethodError && <p>{paymentMethodError}</p>}
      </ButtonsContainer>
    </PaymentContainer>
  )
}
