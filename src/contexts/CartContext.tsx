import { createContext, ReactNode, useState } from 'react'

export interface Coffee {
  id: number
  tags: string[]
  tagsFilter: string[]
  name: string
  description: string
  image: string
  price: number
  amount: number
}

interface CoffeeProps {
  id: number
  name: string
  image: string
  price: number
  amount: number
}

interface addCoffeeProps {
  coffee: Coffee
  amount: number
}

interface CartContextType {
  cart: CoffeeProps[]
  addCoffee: ({ coffee, amount }: addCoffeeProps) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<CoffeeProps[]>([])

  function addCoffee({ coffee, amount }: addCoffeeProps) {
    try {
      const updatedCart = [...cart]
      const productAlreadyExists = updatedCart.find(
        (item) => item.id === coffee.id,
      )

      let newCoffee: CoffeeProps

      if (productAlreadyExists) {
        productAlreadyExists.amount += amount
      } else {
        newCoffee = {
          id: coffee.id,
          name: coffee.name,
          image: coffee.image,
          price: coffee.price,
          amount,
        }
        updatedCart.push(newCoffee)
      }
      setCart(updatedCart)
    } catch {
      console.log('error')
    }
  }

  return (
    <CartContext.Provider value={{ cart, addCoffee }}>
      {children}
    </CartContext.Provider>
  )
}
