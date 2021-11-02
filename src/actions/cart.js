import { ADD_TO_CART, SHOW_CART, GET_CART, CART_TOTAL, DELETE_CART_ITEM, UPDATE_CART_QUANITY } from './types'
import { db } from '../firebase'
import localdb from '../localDB'
import { notification } from './index'

export const showCart = (boolean) => {
    return { type: SHOW_CART, payload: boolean }
}

export const addToCart = (data, callback) => async (dispatch, getState) => {
    const userID = getState().user?.user?.id;
    if (!userID) {
        return;
    } else {
        const userDbRef = db.users.doc(userID);
        let exists = false;
        // console.log(data);
        // check if product already exists in CARTITEMS
        userDbRef.collection('CARTITEMS').get().then((items) => {
            items.forEach((item) => {
                if (item.id === data.product.id) {
                    // console.log("updating quantity");
                    userDbRef.collection('CARTITEMS').doc(item.id).update({
                        quantity: data.quantity
                    }).then(() => {
                        if (callback) {
                            callback()
                        }
                    }).catch((err) => console.log(err))
                    dispatch(showCart(true))
                    exists = true;
                }
            })
        }).then(() => {
            if (exists == false) {
                userDbRef.collection('CARTITEMS').doc(data.product.id).set({
                    ...data
                }).then(() => {
                    dispatch({ type: ADD_TO_CART, payload: { ...data } })
                    dispatch(showCart(true))
                    console.log("item added in cart")
                    if (callback) {
                        callback()
                    }
                }).catch((err) => {
                    console.log(err);
                })
            }
        }).catch((err) => console.log(err))

    }
}

export const getCartItems = () => (dispatch, getState) => {
    const userID = getState().user?.user?.id;
    db.users.doc(userID).collection('CARTITEMS').get().then((snapshot) => {
        // console.log(snapshot.docs.map(db.formatedDoc))
        dispatch({ type: GET_CART, payload: snapshot.docs.map(db.formatedDoc) })
    })
}

export const getLocalCartItems = () => async (dispatch, getState) => {
    let cartItems = [];
    // localdb.cart.each((item) => {
    //     console.log(item);
    //     cartItems.push(item)
    // })
    const all = await localdb.cart.toArray();
    // console.log(all)
    dispatch({ type: GET_CART, payload: all });
}

export const deleteCartItem = (id, getCartItems) => (dispatch, getState) => {
    console.log(id);
    const userID = getState().user?.user?.id;
    db.users.doc(userID).collection('CARTITEMS').doc(id).delete()
        .then(() => {
            dispatch({ type: DELETE_CART_ITEM, payload: id })
            getCartItems()
            dispatch(notification({ msg: "Product removed from cart", err: false }))
            setTimeout(() => {
                dispatch(notification({ msg: "", err: false }))
            }, 2000);
        }).catch((err) => {
            dispatch(notification({ msg: "Unable to remove the product from cart", err: false }))
            setTimeout(() => {
                dispatch(notification({ msg: "", err: false }))
            }, 2000);
            console.log(err)
        })

}

export const updateCartQauntity = (id, quantity, getCartItems) => async (dispatch, getState) => {
    const userID = getState().user?.user?.id;
    db.users.doc(userID).collection('CARTITEMS').doc(id).update({
        quantity
    })
        .then(() => {
            console.log("upadted");
            dispatch({ type: UPDATE_CART_QUANITY, payload: id })
            getCartItems()
        }).catch((err) => {
            console.log(err)
        })
}

export const getCartTotal = () => (dispatch, getState) => {
    const cartItems = getState().cart;
    const total = cartItems.reduce((total, itm) => !itm.product.outOfStock ? total + itm.product.discountedMrp * itm.quantity : total, 0);
    dispatch({ type: CART_TOTAL, payload: total })
}

 // ADD TO CART

    // const { productId, color, size, quanity, price } = data;
    // const userId = getState().user?.user?.userId;
    // const cart = getState().cart
    // const itemWithColor = cart.find((item) => item.color === color)
    // const itemWithSize = cart.find((item) => item.size === size)
    // const itemColorSize = cart.find((item) => item.size === size && item.color === color)
    // console.log('item with color and size', itemColorSize)
    // if (productId && itemColorSize) {
    //     console.log('item present in cart')
    //     cart.map((item) => {
    //         if (item.color === color && item.size === size) {
    //             db.cart.doc(item.id).update({
    //                 quanity: item.quanity + quanity,
    //                 totalPrice: item.price * (item.quanity + quanity)
    //             })
    //                 .then(() => {
    //                     dispatch({ type: UPDATE_CART_QUANITY, payload: item.id })
    //                     dispatch(showCart(true))
    //                 })
    //         } else {
    //             return item
    //         }
    //     })
    // }
    // else {
    //     console.log('cart data', { ...data })
    //     db.cart.add({ ...data, userId })
    //         .then((doc) => {
    //             dispatch({ type: ADD_TO_CART, payload: { ...data, userId } })
    //             dispatch(showCart(true))
    //         })
    // }


        // db.cart.doc(id).update({
    //     quanity: quanity,
    // })
    //     .then(() => {
    //         dispatch({ type: UPDATE_CART_QUANITY, payload: id })
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     })


        // db.cart.doc(id).delete()
    //     .then(() => {
    //         dispatch({ type: DELETE_CART_ITEM, payload: id })
    //     }).catch((err) => {
    //         console.log(err)
    //     })


       // db.cart.where('userId', '==', userId)
    //     .onSnapshot(snapshot => {
    //         console.log(snapshot.docs.map(db.formatedDoc))
    //         dispatch({ type: GET_CART, payload: snapshot.docs.map(db.formatedDoc) })
    //     })