
import {ADD_SINGLE_ADDRESS,DELETE_ADDRESS,UPDATE_ADDRESS} from '../actions/types'
const singleAdress=(state={},action)=>{
  switch (action.type) {
      case ADD_SINGLE_ADDRESS:
         return{...state,new:action.payload}
      case DELETE_ADDRESS:
          return{...state,id:action.payload}   
      case UPDATE_ADDRESS:
         return{...state,newaddress:action.payload}    
      default:
        return state;
  }
}
export default singleAdress