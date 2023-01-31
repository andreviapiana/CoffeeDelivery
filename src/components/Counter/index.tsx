import { Minus, Plus } from 'phosphor-react'
import { CounterContainer, IconWrapper } from './styles'

interface InputAmountProps {
  handleDecrease: () => void
  handleIncrease: () => void
  quantity: number
}

export function Counter({
  handleDecrease,
  handleIncrease,
  quantity,
}: InputAmountProps) {
  return (
    <CounterContainer>
      <IconWrapper
        type="button"
        onClick={handleDecrease}
        disabled={quantity <= 1}
      >
        <Minus size={14} weight="fill" />
      </IconWrapper>

      <span>{quantity.toString()}</span>

      <IconWrapper
        type="button"
        onClick={handleIncrease}
        disabled={quantity >= 20}
      >
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </CounterContainer>
  )
}
