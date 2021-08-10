import {combineReducers} from 'redux';
import authReducer from './authReducer';
import notificationReducer from './notifactionReducer';
import mobReducer from './mobReducer'
import otpReducer from './otpReducer';
import addressReducer from './addressReducer'
import wishListReducer from './wishListReducer';
import reviewReducer from './review'
import cartReducer from './cartReducer';
import showCartReducer from './showCartReducer';
import totalPriceReducer from './totalPriceReducer';
export default combineReducers({
    user:authReducer,
    notification:notificationReducer,
    mobNo:mobReducer,
    showOtp:otpReducer,
    addresses:addressReducer,
    wishlist:wishListReducer,
    reviews:reviewReducer,
    cart:cartReducer,
    showcart:showCartReducer,
    cartTotal:totalPriceReducer
})