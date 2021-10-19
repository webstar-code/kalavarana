import { notify } from '.';
import { db } from '../firebase';
import { ADD_ADDRES, GET_ADDRESS, MSG, ADD_SINGLE_ADDRESS, DELETE_ADDRESS, UPDATE_ADDRESS } from './types';

export const notification = (msg) => {
  return { type: MSG, payload: msg }
}

export const addAdress = (data, getAddresses) => async (dispatch, getState) => {
  const userID = getState().user?.user?.id;
  const userDbRef = db.users.doc(userID);

  const AddressRef = userDbRef.collection('ADDRESS').doc();
  AddressRef.set({
    ...data,
    id: AddressRef.id

  }).then(() => {
    dispatch({ type: ADD_ADDRES, payload: data })
    getAddresses();
    
    dispatch(notification({ msg: "New address added", err: false }))
    setTimeout(() => {
      dispatch(notification({ msg: "", err: false }))
    }, 2000);

  })
    .catch((err) => {
      console.log(err)
      notify("Failed to add address", true);
    })


  // const userId = getState().user?.user?.userId
  // db.address.add({ ...data, userId })
  //   .then(() => {
  //     dispatch({ type: ADD_ADDRES, payload: data })
  //     dispatch(notification({ msg: "Address added", err: false }))
  //     setTimeout(() => {
  //       dispatch(notification({ msg: "", err: false }))
  //     }, 2000)
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //     dispatch(notification({ msg: "Failed to add address", err: true }))
  //     setTimeout(() => {
  //       dispatch(notification({ msg: "", err: false }))
  //     }, 2000)
  //   })
}


export const getAddresses = () => async (dispatch, getState) => {
  const userID = getState().user?.user?.id;
  const userDbRef = db.users.doc(userID);
  userDbRef.collection('ADDRESS').get().then((snapshot) => {
    dispatch({ type: GET_ADDRESS, payload: snapshot.docs.map(db.formatedDoc) })
  })
}

// export const addSingleAdd=(address)=>{
//   return{type:ADD_SINGLE_ADDRESS,payload:address}
// }

//delete address

export const deleteAdress = (id, getAddresses) => async (dispatch, getState) => {
  const userID = getState().user?.user?.id;
  const userDbRef = db.users.doc(userID);
  console.log(id);
  userDbRef.collection('ADDRESS').doc(id).delete()
    .then(() => {
      getAddresses();
      dispatch({ type: DELETE_ADDRESS, payload: id })
      
    dispatch(notification({ msg: "Address deleted", err: false }))
    setTimeout(() => {
      dispatch(notification({ msg: "", err: false }))
    }, 2000);

    })
    .catch((err) => {
      console.log(err)
      
    dispatch(notification({ msg: "Unable to delete address", err: false }))
    setTimeout(() => {
      dispatch(notification({ msg: "", err: false }))
    }, 2000);


    })


  // db.address.doc(id).delete()
  //   .then(() => {
  //     dispatch({ type: DELETE_ADDRESS, payload: id })
  //     dispatch(notification({ msg: "Address deleted", err: false }))
  //     setTimeout(() => {
  //       dispatch(notification({ msg: "", err: false }))
  //     }, 2000)
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //     dispatch(notification({ msg: "Unable deleted", err: true }))
  //     setTimeout(() => {
  //       dispatch(notification({ msg: "", err: false }))
  //     }, 2000)
  //   })
}


//update specific address

export const updateAddress = (id, data, getAddresses) => async (dispatch, getState) => {
  const userID = getState().user?.user?.id;
  const userDbRef = db.users.doc(userID);

  userDbRef.collection('ADDRESS').doc(id).update(data).then(() => {
    getAddresses();
    dispatch({ type: UPDATE_ADDRESS, payload: data })
    
    dispatch(notification({ msg: "Address updated", err: false }))
    setTimeout(() => {
      dispatch(notification({ msg: "", err: false }))
    }, 2000);

  }).catch((err) => {
    console.log(err)
    
    dispatch(notification({ msg: "Unable to update adderss", err: false }))
    setTimeout(() => {
      dispatch(notification({ msg: "", err: false }))
    }, 2000);

  })
}