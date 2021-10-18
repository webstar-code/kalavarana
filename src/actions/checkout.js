import { CHECKOUT } from "./types"
import { history } from '../history'
import { db, firestore } from '../firebase'

export const checkout = (data) => async (dispatch, getState) => {
    let deliveryCharge;
    firestore.collection('DELIVERY-CHARGE').doc('FIXED').get().then((doc) => {
        deliveryCharge = doc.data().deliveryCharge;
    }).then(() => {
        const userId = getState().user?.user?.id
        const total = getState().cartTotal?.total

        const checkoutData = {
            address: data.address,
			orderType: data.orderType,
			couponDiscount: data.couponDiscount,
			Code: data.Code,
            deliveryCharge,
            total,
        }
        dispatch({ type: CHECKOUT, payload: { ...checkoutData } })
        history.push('/checkout')
    })


}