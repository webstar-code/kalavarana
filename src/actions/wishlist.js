import { db } from '../firebase'
import { ADD_TO_WHISLIST } from './types'
import { notification } from './index'

export const addToWhislist = (product) => async (dispatch, getState) => {
  const userID = getState().user?.user?.id;
  const userDbRef = db.users.doc(userID);
  console.log(product)
  userDbRef.collection('WISHLIST').doc(product.id).set({
    ...product,
    userID
  }).then(() => {
    dispatch({
      type: ADD_TO_WHISLIST, payload: { ...product }
    })
    dispatch(notification({ msg: "Product added to wishlist", err: false }))
    setTimeout(() => {
      dispatch(notification({ msg: "", err: false }))
    }, 2000)
  })
    .catch((err) => {
      console.log(err)
      dispatch(notification({ msg: "Unable added to wishlist", err: true }))
      setTimeout(() => {
        dispatch(notification({ msg: "", err: false }))
      }, 2000)
    })
}

// export const getWishList = () => (dispatch, getState) => {
//   const userID = getState().user?.user?.id;
//   db.users.doc(userID).collection('WISHLIST').get().then((snapshot) => {
//       dispatch({ type: GET_CART, payload: snapshot.docs.map(db.formatedDoc) })
//   })
// }












  //   db.wishlist.doc(id).set({
  //     productId: id,
  //     title,
  //     originalPrice,
  //     price,
  //     imageUrl,
  //     userId
  //   }).then(() => {
  //     dispatch({
  //       type: ADD_TO_WHISLIST, payload: {
  //         productId: id,
  //         title,
  //         originalPrice,
  //         price,
  //         imageUrl, userId
  //       }
  //     })
  //     dispatch(notification({ msg: "Product added to wishlist", err: false }))
  //     setTimeout(() => {
  //       dispatch(notification({ msg: "", err: false }))
  //     }, 2000)
  //   })
  //     .catch((err) => {
  //       console.log(err)
  //       dispatch(notification({ msg: "Unable added to wishlist", err: true }))
  //       setTimeout(() => {
  //         dispatch(notification({ msg: "", err: false }))
  //       }, 2000)
  //     })