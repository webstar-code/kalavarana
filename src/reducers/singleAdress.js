
import {ADD_SINGLE_ADDRESS,DELETE_ADDRESS} from '../actions/types'
const singleAdress=(state={},action)=>{
  switch (action.type) {
      case ADD_SINGLE_ADDRESS:
         return{...state,new:action.payload}
      case DELETE_ADDRESS:
          return{...state,id:action.payload}   
      default:
        return state;
  }
}
export default singleAdress