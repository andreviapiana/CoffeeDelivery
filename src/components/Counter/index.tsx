import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'
import { CounterContainer, IconWrapper } from './styles'

export function Counter() {
  //= ==set quantity initial state====//
  const [quantity, setQuantity] = useState(1)

  //= ==increase quantity====//
  const increase = () => {
    if (quantity > 19) {
      alert('Erro: A quantidade máxima é de 20 unidades')
      return
    }
    setQuantity((count) => count + 1)
  }

  //= ==decrease quantity====//
  const decrease = () => {
    if (quantity < 2) {
      alert('Erro: A quantidade mínima é 1 unidade')
      return
    }
    setQuantity((count) => count - 1)
  }
  return (
    <CounterContainer>
      <IconWrapper type="button" onClick={decrease} disabled={quantity <= 1}>
        <Minus size={14} weight="fill" />
      </IconWrapper>

      <span>{quantity.toString()}</span>

      <IconWrapper type="button" onClick={increase} disabled={quantity >= 20}>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </CounterContainer>
  )
}
