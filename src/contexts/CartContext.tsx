import { createContext, ReactNode, useEffect, useReducer } from 'react'
import {
  addCoffeeToCartAction,
  clearCoffeeFromCartAction,
  removeCoffeeFromCartAction,
  updatedCoffeeAction,
} from '../reducers/cart/actions'

import { CartProps, cartReducer } from '../reducers/cart/reducer'
import { toast } from 'react-toastify'

export interface Coffee {
  id: number
  image: string
  name: string
  tags: string[]
  description: string
  price: number
  amount: number
}

interface addCoffeeProps {
  coffee: Coffee
  amount: number
}

interface UpdatedCartProps {
  coffeeId: number
  amount: number
}

interface CartContextType {
  cart: CartProps[]
  addCoffee: ({ coffee, amount }: addCoffeeProps) => void
  updateCoffee: ({ coffeeId, amount }: UpdatedCartProps) => void
  removeCoffee: (coffeeId: number) => void
  clearCart: () => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      } else {
        return {
          cart: [],
        }
      }
    },
  )

  const { cart } = cartState

  function addCoffee({ coffee, amount }: addCoffeeProps) {
    const newCoffee: CartProps = {
      id: coffee.id,
      name: coffee.name,
      image: coffee.image,
      price: coffee.price,
      amount,
    }

    dispatch(addCoffeeToCartAction({ newCoffee, amount }))
    toast.success('Café adicionado ao carrinho!')
  }

  function updateCoffee({ coffeeId, amount }: UpdatedCartProps) {
    dispatch(updatedCoffeeAction(coffeeId, amount))
  }

  function removeCoffee(coffeeId: number) {
    dispatch(removeCoffeeFromCartAction(coffeeId))
    toast.success('Café removido do carrinho!')
  }

  function clearCart() {
    dispatch(clearCoffeeFromCartAction())
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)

    localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
  }, [cartState])

  return (
    <CartContext.Provider
      value={{ cart, addCoffee, updateCoffee, removeCoffee, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
