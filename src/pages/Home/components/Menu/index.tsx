import React, { useContext, useState } from 'react'
import { MenuCard } from '../MenuCard'
import {
  ButtonsContainer,
  CardsContainer,
  MenuContainer,
  TitleContainer,
} from './styles'

import { coffees } from '../../../../../data/coffees'
import { categorySelectorTypes } from '../../../../../data/selectors'
import { CategorySelector } from '../CategorySelector'
import { CartContext } from '../../../../contexts/CartContext'

export function Menu() {
  const [activeFilter, setActiveFilter] = useState('Todos')

  const { cart } = useContext(CartContext)
  console.log(cart)

  return (
    <MenuContainer>
      <TitleContainer>
        <h2>Nossos cafés</h2>
        <ButtonsContainer>
          {Object.entries(categorySelectorTypes).map(([key, { label }]) => (
            <CategorySelector
              key={label}
              id={key}
              label={label}
              value={key}
              onClick={(e: React.MouseEvent) => {
                const el = e.target as HTMLElement
                el.textContent?.toLowerCase() !== activeFilter
                  ? setActiveFilter(label)
                  : setActiveFilter('')
              }}
            />
          ))}
        </ButtonsContainer>
      </TitleContainer>
      <CardsContainer>
        {coffees
          ?.filter((coffee) => coffee.tagsFilter.includes(activeFilter))
          .map((coffee) => (
            <MenuCard key={coffee.id} coffee={coffee} />
          ))}
      </CardsContainer>
    </MenuContainer>
  )
}
