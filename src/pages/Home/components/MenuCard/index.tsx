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

export interface Coffee {
  id: number
  image: string
  name: string
  tags: string[]
  tagsFilter: string[]
  description: string
  price: number
  amount: number
}

interface CoffeeProps {
  coffee: Coffee
}

export function MenuCard({ coffee }: CoffeeProps) {
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
            <Counter />

            <AddToCartButton>
              <ShoppingCart size={20} weight="fill" />
            </AddToCartButton>
          </PurchaseCard>
        </OrderContainer>
      </Container>
    </CardContainer>
  )
}
