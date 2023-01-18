import { ButtonFilter } from '../../../../components/ButtonFilter'
import { MenuCard } from '../MenuCard'
import {
  ButtonsContainer,
  CardsContainer,
  MenuContainer,
  TitleContainer,
} from './styles'

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
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
      </CardsContainer>
    </MenuContainer>
  )
}
