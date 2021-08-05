import {combineReducers} from 'redux';
import authReducer from './authReducer';
import notificationReducer from './notifactionReducer';
import mobReducer from './mobReducer'
import otpReducer from './otpReducer';
import addressReducer from './addressReducer'
import singleAdress from './singleAdress';
export default combineReducers({
    user:authReducer,
    address:singleAdress,
    notification:notificationReducer,
    mobNo:mobReducer,
    showOtp:otpReducer,
    addresses:addressReducer
})