import {
  Content,
  HeaderButton,
  HeaderButtonsContainer,
  HeaderContainer,
} from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import logoCoffeeDelivery from '../../assets/logo.png'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const { cart } = useContext(CartContext)

  const cartItems = cart.length

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
              <span>{cartItems}</span>
              <ShoppingCart size={20} weight="fill" />
            </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </Content>
    </HeaderContainer>
  )
}
