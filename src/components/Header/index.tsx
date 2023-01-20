import {
  Content,
  HeaderButton,
  HeaderButtonsContainer,
  HeaderContainer,
} from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import logoCoffeeDelivery from '../../assets/logo.png'

export function Header() {
  return (
    <HeaderContainer>
      <Content>
        <NavLink to="/">
          <img src={logoCoffeeDelivery} alt="" />
        </NavLink>

        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Caxias do Sul, RS
          </HeaderButton>

          <NavLink to="/checkout">
            <HeaderButton variant="yellow">
              {/* {cartQuantity >= 1 && <span>{cartQuantity}</span>} */}
              <span>2</span>
              <ShoppingCart size={20} weight="fill" />
            </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </Content>
    </HeaderContainer>
  )
}
