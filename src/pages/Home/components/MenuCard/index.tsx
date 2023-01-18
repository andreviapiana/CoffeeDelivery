import coffeeImg from '../../../../assets/tradicional.png'
import { CardContainer, Container } from './styles'

export function MenuCard() {
  return (
    <CardContainer>
      <Container>
        <img src={coffeeImg} alt="Imagem superior do copo de café" />

        <div className="coffeeCategory">
          <span>TRADICIONAL</span>
        </div>

        <h3 className="product-title">Expresso Tradicional</h3>

        <p className="description">
          O tradicional café feito com água quente e grãos moídos
        </p>

        <p className="price">
          R$ <span>9,90</span>
        </p>
      </Container>
    </CardContainer>
  )
}
