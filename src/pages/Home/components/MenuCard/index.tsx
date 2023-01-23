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

export interface Products {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

interface ProductsProps {
  product: Products
}

export function MenuCard({ product }: ProductsProps) {
  return (
    <CardContainer>
      <Container>
        <img src={`${product.photo}`} alt="Imagem superior do copo de café" />

        <Tags>
          {product.tags.map((tag) => (
            <span key={`${product.id}${tag}`}>{tag}</span>
          ))}
        </Tags>

        <Title>
          <h3 className="product-title">{product.name}</h3>
        </Title>

        <Description>
          <p className="description">{product.description}</p>
        </Description>

        <OrderContainer>
          <Price>
            <p>
              R$ <span>{product.price.toFixed(2)}</span>
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
