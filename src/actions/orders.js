import { db, firestore } from "../firebase"
import { history } from '../history'
import { CANCEL_ORDER, DELETE_CART_ITEM, GET_ORDERS, PLACE_ORDER } from "./types"
import { getCartItems } from './cart'
import { getAddresses } from "./address"

// const Orders =  {
//     id: unique Id,
//     user: user,
//     address: whole entity,
//     totalmrp: grandPrice,
//     items: CART Item,
//     state: newOrder, inPacking, readyForDelivery, pickedUp, delivered, canceled
//     delivreryChrges: 
//     isPaymentDone

// }

export const placeOrder = (data, getCartItems) => async (dispatch, getState) => {
    const cart = getState().cart
    const userID = getState().user?.user?.id;
    const orderRef = firestore.collection('ORDERS').doc();
    const user = getState().user?.user;
    data = { ...data, id: orderRef.id, user, items: cart, bookingTime: Date.now() };
    console.log(data);
    orderRef.set({
        id: orderRef.id,
        user: data.user,
        address: data.address,
        totalMrp: data.grandTotal,
        items: data.items,
        bookingTime: Date.now(),
        state: "newOrder",
        deliveryCharge: data.deliveryCharge,
        isPaymentDone: data.isPaymentDone,
        paymentId: data.paymentId
    }).then(() => {
        dispatch({ type: PLACE_ORDER, payload: data })
    }).then(() => {
        cart.map((item, i) => {
            let stock = item.product.stock - item.quantity;
            if(stock <= 0) {
                stock = 0;
            }
            firestore.collection('PRODUCTS').doc(item.product.id).update({
                stock,
                outOfStock: stock <= 0 ? true : false 
            }).catch((err) => console.log(err));
            
            db.users.doc(userID).collection('CARTITEMS').doc(item.product.id).delete()
                .then(() => {
                    console.log("Cart deleted");
                     dispatch({ type: DELETE_CART_ITEM, payload: item.product.id })
                    // refresh the redux cart
                    getCartItems();
                })

        })
    }).catch((err) => {
        console.log(err);
    })


    history.push('/order-confirmed')
}

export const getOrders = () => (dispatch, getState) => {
    const userID = getState().user?.user?.id
    firestore.collection('ORDERS').where('user.id', '==', userID)
        .onSnapshot((snapshot) => {
            dispatch({ type: GET_ORDERS, payload: snapshot.docs.map(db.formatedDoc) })
        })
}

export const cancleOrder = (id, product) => (dispatch, getState) => {
    const userId = getState().user?.user?.userId
    console.log(id);
    firestore.collection('ORDERS').doc(id).update({
        state: 'canceled'
    })
        .then(() => {
            dispatch({ type: CANCEL_ORDER, payload: id })
        }).catch((err) => console.log(err));
}