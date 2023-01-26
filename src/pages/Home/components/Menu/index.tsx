import React, { useState } from 'react'
import { MenuCard } from '../MenuCard'
import {
  ButtonsContainer,
  CardsContainer,
  MenuContainer,
  TitleContainer,
} from './styles'

import { products } from '../../../../../data/products'
import { categorySelectorTypes } from '../../../../../data/selectors'
import { CategorySelector } from '../CategorySelector'

export function Menu() {
  const [activeFilter, setActiveFilter] = useState('Todos')

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
        {products
          ?.filter((element) => element.tagsFilter.includes(activeFilter))
          .map((product) => (
            <MenuCard key={product.id} product={product} />
          ))}
      </CardsContainer>
    </MenuContainer>
  )
}
