import {
  ButtonsContainer,
  ItemDetails,
  CoffeePrice,
  Container,
  RemoveButton,
} from './styles'
import { Counter } from '../../../../components/Counter'
import { Trash } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CartContext, CartProps } from '../../../../contexts/CartContext'

interface ItemCartProps {
  coffee: CartProps
}

export function ProductCard({ coffee }: ItemCartProps) {
  const [amount, setAmount] = useState(coffee.amount)

  const { updateCoffee, removeCoffee } = useContext(CartContext)

  function handleIncrease() {
    setAmount((state) => state + 1)
    updateCoffee({ coffeeId: coffee.id, amount: amount + 1 })
  }

  function handleDecrease() {
    if (amount <= 1) {
      return
    }

    setAmount((state) => state - 1)
    updateCoffee({ coffeeId: coffee.id, amount: amount - 1 })
  }

  function handleRemoveCoffee() {
    removeCoffee(coffee.id)
  }

  return (
    <Container>
      <div className="card">
        <img src={coffee.image} alt="Imagem do Prato" />

        <ItemDetails>
          <p>{coffee.name}</p>
          <ButtonsContainer>
            <Counter
              handleDecrease={handleDecrease}
              handleIncrease={handleIncrease}
              quantity={amount}
            />
            <RemoveButton type="button" onClick={handleRemoveCoffee}>
              <div className="iconWrapper">
                <Trash size={18} />
              </div>
              REMOVER
            </RemoveButton>
          </ButtonsContainer>
        </ItemDetails>

        <CoffeePrice>
          <p>
            R${' '}
            {coffee.price.toLocaleString('pt-br', {
              minimumFractionDigits: 2,
            })}
          </p>
        </CoffeePrice>
      </div>
    </Container>
  )
}
