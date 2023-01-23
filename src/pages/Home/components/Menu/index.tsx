import { ButtonFilter } from '../../../../components/ButtonFilter'
import { MenuCard } from '../MenuCard'
import {
  ButtonsContainer,
  CardsContainer,
  MenuContainer,
  TitleContainer,
} from './styles'

import { products } from '../../../../../data/products'

export function Menu() {
  return (
    <MenuContainer>
      <TitleContainer>
        <h2>Nossos cafés</h2>
        <ButtonsContainer>
          <ButtonFilter title="TRADICIONAL" />
          <ButtonFilter title="ESPECIAL" />
          <ButtonFilter title="COM LEITE" />
          <ButtonFilter title="ALCOÓLICO" />
          <ButtonFilter title="GELADO" />
        </ButtonsContainer>
      </TitleContainer>
      <CardsContainer>
        {products.map((product) => (
          <MenuCard key={product.id} product={product} />
        ))}
      </CardsContainer>
    </MenuContainer>
  )
}
