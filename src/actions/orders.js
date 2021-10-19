import { db, firestore } from "../firebase"
import { history } from '../history'
import { CANCEL_ORDER, GET_ORDERS, PLACE_ORDER } from "./types"
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

export const placeOrder = (data) => async (dispatch, getState) => {
    console.log(data);
    const cart = getState().cart
    const userID = getState().user?.user?.id;
    const orderRef = firestore.collection('ORDERS').doc();
    const user = getState().user?.user;
    console.log(user);
    console.log(orderRef.id);
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
        isPaymentDone: data.isPaymentDone
    }).then(() => {
        console.log("order added");
        dispatch({ type: PLACE_ORDER, payload: data })
    }).then(() => {
        cart.map((item, i) => {
            let stock = item.product.stock - item.quantity;
            if(stock <= 0) {
                stock = 0;
            }
            console.log(stock);
            firestore.collection('PRODUCTS').doc(item.product.id).update({
                stock,
                outOfStock: stock <= 0 ? true : false 
            }).catch((err) => console.log(err));
            db.users.doc(userID).collection('CARTITEMS').doc(item.product.id).delete()
                .then(() => {
                    console.log("Cart deleted");
                    getCartItems();
                })

        })
    }).catch((err) => {
        console.log(err);
    })



    // cart.map((item, i) => {

    // })


    // const cart = getState().cart
    // const userId = getState().user?.user?.userId
    // cart.map((itm, i) => {
    //     db.orders.add({
    //         ...data, imgUrl: itm.imageUrl, color: itm.color, title: itm.title, quanity: itm.quanity, size: itm.size, price: itm.price, productId: itm.productId, userId: itm.userId, coustomText: itm.coustomText,
    //         placedAt: db.getCurrentTimeStamp(), placed: true, shipped: false, cancled: false, deliverd: false, packed: false, status: 'Placed'
    //     })
    //         .then(() => {
    //             dispatch({ type: PLACE_ORDER, payload: data })
    //             console.log('order saved successfully')
    //             db.cart.doc(itm.id).delete()
    //                 .then(() => {
    //                     console.log('cart deleted')
    //                 })
    //         })
    // })


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
    // db.orders.doc(id).update({
    //     cancled: true,
    //     status: 'Canceled'
    // })
    //     .then(() => {
    //         dispatch({ type: CANCEL_ORDER, payload: id })
    //         firestore.collection('cancelOrders').add({ ...product, userId })
    //     })
}