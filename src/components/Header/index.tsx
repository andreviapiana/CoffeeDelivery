import {
  Content,
  HeaderButton,
  HeaderButtonsContainer,
  HeaderContainer,
} from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink, useLocation } from 'react-router-dom'
import logoCoffeeDelivery from '../../assets/logo.png'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

import { OrderData } from '../../pages/Checkout'

export function Header() {
  const { cart } = useContext(CartContext)

  const cartItems = cart
    .map((item) => item.amount)
    .reduce((prev, next) => prev + next, 0)

  const location = useLocation()
  const state = location.state as OrderData

  return (
    <HeaderContainer>
      <Content>
        <NavLink to="/">
          <img src={logoCoffeeDelivery} alt="" />
        </NavLink>

        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            {state ? state.cidade : 'Caxias do Sul'}, {state ? state.UF : 'RS'}
          </HeaderButton>

          <NavLink to="/checkout">
            <HeaderButton variant="yellow">
              <span>{cartItems}</span>
              <ShoppingCart size={20} weight="fill" />
            </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </Content>
    </HeaderContainer>
  )
}
