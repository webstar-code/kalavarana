import {ADD_ADDRES, GET_ADDRESS} from '../actions/types'

const addAddress=(state=[],action)=>{
  switch (action.type) {
      case ADD_ADDRES:
         return state
      case GET_ADDRESS:
          return [...action.payload]   
      default:
         return state
  }
}

export default addAddress;