import { CHECKOUT } from "./types"
import { history } from '../history'
export const checkout = (data) => async (dispatch, getState) => {
    console.log(data);
    const userId = getState().user?.user?.id
    const total = getState().cartTotal?.total
    console.log(total, data.Discount);
    const subTotal = total - data.Discount
    const deliveryCharges = subTotal < 500 ? 150 : 0
    console.log({ ...data, userId, total })
    dispatch({ type: CHECKOUT, payload: { ...data, userId, subTotal, deliveryCharges } })
    history.push('/checkout')
}