import {cartStorage} from '../utils/cart.storage.js';

export const initialState = {
  cartData: []
}
export const cartReducer = (state, action) => {
  switch (action.type) {
      case 'add_to_cart':
        return {
          ...state,
          cartData: [...state.cartData, action.payload]
        }
      case 'remove_cart':
        return {
          ...state,
          cartData: state.cartData.filter(cart => cart.id !== action.payload.id)
        }
    case 'clear_cart':
      cartStorage.clearCart()
      return {
        ...state,
        cartData: []
      }
    case 'load_cart':
      return {
        ...state,
        cartData: action.payload
      }
      default:
        return state
  }
  
}