import { ShoppingCart } from 'phosphor-react'
import { Counter } from '../../../../components/Counter'
import {
  AddToCartButton,
  CardContainer,
  Container,
  Description,
  OrderContainer,
  Price,
  PurchaseCard,
  Tags,
  Title,
} from './styles'

import { useContext, useState } from 'react'
import { CartContext, Coffee } from '../../../../contexts/CartContext'

interface CoffeeProps {
  coffee: Coffee
}

export function MenuCard({ coffee }: CoffeeProps) {
  const { addCoffee } = useContext(CartContext)

  const [amount, setAmount] = useState(1)

  function handleIncrease() {
    setAmount((state) => state + 1)
  }

  function handleDecrease() {
    if (amount <= 1) {
      return
    }
    setAmount((state) => state - 1)
  }

  function handleAddCoffeeToCart() {
    addCoffee({ coffee, amount })
  }

  return (
    <CardContainer>
      <Container>
        <img src={`${coffee.image}`} alt="Imagem superior do copo de café" />

        <Tags>
          {coffee.tags.map((tag) => (
            <span key={`${coffee.id}${tag}`}>{tag}</span>
          ))}
        </Tags>

        <Title>
          <h3>{coffee.name}</h3>
        </Title>

        <Description>
          <p>{coffee.description}</p>
        </Description>

        <OrderContainer>
          <Price>
            <p>
              R$ <span>{coffee.price.toFixed(2)}</span>
            </p>
          </Price>

          <PurchaseCard>
            <Counter
              handleDecrease={handleDecrease}
              handleIncrease={handleIncrease}
              quantity={amount}
            />

            <AddToCartButton onClick={handleAddCoffeeToCart}>
              <ShoppingCart size={20} weight="fill" />
            </AddToCartButton>
          </PurchaseCard>
        </OrderContainer>
      </Container>
    </CardContainer>
  )
}
