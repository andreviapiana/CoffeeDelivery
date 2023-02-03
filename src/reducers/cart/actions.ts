import { CartProps } from './reducer'

interface AddCoffeeProps {
  newCoffee: CartProps
  amount: number
}

export enum ActionTypes {
  ADD_COFFEE = 'ADD_COFFEE',
  UPDATED_COFFEE = 'UPDATED_COFFEE',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
  CLEAR_CART = 'CLEAR_CART',
}

export function addCoffeeToCartAction({ newCoffee, amount }: AddCoffeeProps) {
  return {
    type: ActionTypes.ADD_COFFEE,
    payload: {
      newCoffee,
      amount,
    },
  }
}

export function updatedCoffeeAction(coffeeId: number, amount: number) {
  return {
    type: ActionTypes.UPDATED_COFFEE,
    payload: {
      coffeeId,
      amount,
    },
  }
}

export function removeCoffeeFromCartAction(coffeeId: number) {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    payload: {
      coffeeId,
    },
  }
}

export function clearCoffeeFromCartAction() {
  return {
    type: ActionTypes.CLEAR_CART,
  }
}
