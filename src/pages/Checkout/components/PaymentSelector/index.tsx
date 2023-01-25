import { CurrencyDollar, Money, CreditCard, Bank } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { PaymentMethodInput } from '../PaymentInput'
import { PaymentContainer, ContainerTitle, ButtonsContainer } from './styles'

const paymentMethods = {
  credit: {
    label: 'CARTÃO DE CRÉDITO',
    icon: <CreditCard size={18} />,
  },
  debit: {
    label: 'CARTÃO DE DÉBITO',
    icon: <Bank size={18} />,
  },
  money: {
    label: 'DINHEIRO',
    icon: <Money size={18} />,
  },
}

export function PaymentSelector() {
  const { register } = useFormContext()

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
            value={key}
            {...register('paymentMethod', { required: true })}
          />
        ))}
      </ButtonsContainer>
    </PaymentContainer>
  )
}
