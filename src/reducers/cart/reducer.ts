import { produce } from 'immer'
import { ActionTypes } from './actions'

export interface CartProps {
  id: number
  image: string
  name: string
  price: number
  amount: number
}

export interface CartState {
  cart: CartProps[]
  amount: number
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE: {
      const { newCoffee, amount } = action.payload

      return produce(state, (draft) => {
        const CoffeeExistsIndex = draft.cart.findIndex(
          (item) => item.id === newCoffee.id,
        )

        if (CoffeeExistsIndex < 0) {
          draft.cart.push(newCoffee)
        } else {
          draft.cart[CoffeeExistsIndex].amount += amount
        }
      })
    }

    case ActionTypes.UPDATED_COFFEE: {
      const { amount, coffeeId } = action.payload

      return produce(state, (draft) => {
        const coffeeUpdated = draft.cart.find(
          (coffee) => coffee.id === coffeeId,
        )
        if (coffeeUpdated) {
          coffeeUpdated.amount = amount
        }
      })
    }

    case ActionTypes.REMOVE_COFFEE: {
      const { coffeeId } = action.payload

      return produce(state, (draft) => {
        const filteredCartCoffees = draft.cart.filter(
          (coffee) => coffee.id !== coffeeId,
        )
        draft.cart = filteredCartCoffees
      })
    }

    case ActionTypes.CLEAR_CART:
      return produce(state, (draft) => {
        draft.cart = []
      })

    default:
      return state
  }
}
