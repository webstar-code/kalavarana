import { PLACE_ORDER } from "../actions/types";

const orderReducer=(state=[],action)=>{
    switch (action.type) {
        case PLACE_ORDER:
            return state
        default:
            return state
    }
}

export default orderReducer