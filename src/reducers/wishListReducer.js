
import { ADD_SINGLE_ADDRESS, GET_WISHLIST } from '../actions/types'
const wishListReducer = (state = [], action) => {
  switch (action.type) {
    case GET_WISHLIST:
      return [...action.payload]
    case ADD_SINGLE_ADDRESS:
      return { ...state, whislist: action.payload }
    default:
      return state
  }
}
export default wishListReducer