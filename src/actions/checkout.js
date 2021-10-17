import { CHECKOUT } from "./types"
import { history } from '../history'
import { db, firestore } from '../firebase'
export const checkout = (data) => async (dispatch, getState) => {
    let deliveryCharge;
    firestore.collection('DELIVERY-CHARGE').doc('FIXED').get().then((doc) => {
        deliveryCharge = doc.data().deliveryCharge;
    }).then(() => {
        console.log(data);
        const userId = getState().user?.user?.id
        const total = getState().cartTotal?.total
        console.log(total, data.Discount);
        const subTotal = total - data.Discount
        // const deliveryCharge = subTotal < 500 ? 150 : '0'
        console.log(deliveryCharge);
        console.log({ ...data, userId, total })
        dispatch({ type: CHECKOUT, payload: { ...data, subTotal, deliveryCharge } })
        history.push('/checkout')
    })


}