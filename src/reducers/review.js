import {ADD_REVIEW} from '../actions/types'

const addReviewReducer=(state={},action)=>{
    switch (action.type) {
        case ADD_REVIEW:
            return {...state,review:action.payload}
        default:
            return state;
    }
}

export default addReviewReducer;