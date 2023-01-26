import { PaymentMethodContainer, ContentContainer } from './styles'
import { forwardRef, InputHTMLAttributes } from 'react'

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
}

// eslint-disable-next-line react/display-name
export const CategorySelector = forwardRef<
  HTMLInputElement,
  PaymentMethodInputProps
>(({ id, label, ...props }, ref) => {
  return (
    <PaymentMethodContainer>
      <input id={id} type="radio" {...props} name="paymentMethod" ref={ref} />
      <label htmlFor={id}>
        <ContentContainer>{label}</ContentContainer>
      </label>
    </PaymentMethodContainer>
  )
})
