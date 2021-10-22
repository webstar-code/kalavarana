import { AUTH_STATE, LOG_OUT, MSG, OTP, SIGN_IN, NOT_SINGUPED, SHOW_OTP } from "./types";
import firebase, { db, auth } from '../firebase'
import { history } from '../history'

// action creator for sending notification
export const notification = (msg) => {
  return { type: MSG, payload: msg }
}

export const notify = (msg, err = false) => async (dispatch, getState) => {
  console.log(msg);
  dispatch(notification({ msg: msg, err: err }))
  setTimeout(() => {
    dispatch(notification({ msg: "", err: false }))
  }, 3000);
}

export const message = (msg, err = false) => {
  notify(msg, err)
}


// action creator for showing the otp input if user is present db or not
export const showOtp = (boolean) => {
  return { type: SHOW_OTP, payload: boolean }
}

// const user =  {
//   id: '123213',
//   name: 'user',
//   email: 'user@.com',
//   phoneNumber: '123456789',
//   picUrl: '',
//   role: 'user',
//   lastSignInDataTime = '123213213',
// }

export const login = (data) => async dispatch => {
  let phoneNumber = data.countryCode + data.number;
  sendOtp(phoneNumber, dispatch);
}

export const sendOtp = (phoneNumber, dispatch) => {
  let appVerifier = window.recaptchaVerifier;
  firebase
    .auth()
    .signInWithPhoneNumber(phoneNumber, appVerifier)
    .then(function (confirmationResult) {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      // console.log(confirmationResult);
      console.log("OTP is sent");
      dispatch({ type: SIGN_IN, payload: 'OTP is sent' })
      dispatch(notification({ msg: 'OTP sent', err: false }))
      setTimeout(() => {
        dispatch(notification({ msg: "", err: false }))
      }, 2000);
      dispatch({ type: SHOW_OTP, payload: true });
      dispatch({ type: NOT_SINGUPED, payload: phoneNumber });

    })
    .catch(function (error) {
      dispatch(notification({ msg: 'Unable to send OTP, try again', err: true }))
      setTimeout(() => {
        dispatch(notification({ msg: "", err: false }))
      }, 2000);
      console.log(error);
    });

}

export const sigin = (phoneNumber, email, name, uid) => async dispatch => {
  console.log(uid);
  const newUser = {
    name,
    email,
    phoneNumber,
    role: 'user',
    picUrl: '',
    id: uid
  }

  const docref = db.users.doc(uid);
  docref.set({
    ...newUser,
  }).then(() => {
    console.log("new user added");
    dispatch({ type: OTP, payload: newUser });
    history.push('/')
  })
    .catch((err) => {
      console.log(err)
      console.log('unable to save user')
    })
}

export const submitOtp = (otp) => async dispatch => {
  let redirect = false;
  let otpInput = otp;
  console.log(otp);
  let optConfirm = window.confirmationResult;
  optConfirm.confirm(otpInput).then((result) => {
    let user = result.user;
    console.log(result);
    // check if the user already exists
    db.users.get().then(querySnapshot => {
      querySnapshot.forEach((doc) => {
        if (db.formatedDoc(doc).phoneNumber === user.phoneNumber) {
          // console.log('user already exists');
          dispatch({ type: OTP, payload: db.formatedDoc(doc) });
          redirect = true;
          return;
        }
      });

      if (redirect) {
        history.push('/');
      } else {
        // console.log("user does not exists");
        history.push({
          pathname: '/signup',
          state: { uid: result.user.uid }
        });
      }
    })
  }).catch(function (error) {
    console.log(error);
    console.log('wrong otp')
    notify("Wrong OTP", true);
  });
}

export const userStateChanged = (user) => {
  console.log(user)
  return { type: AUTH_STATE, payload: user }
}

export const logout = () => async dispatch => {
  await auth.signOut();
  dispatch({ type: LOG_OUT, payload: {} })
  dispatch({ type: SHOW_OTP, payload: false })
  history.push('/login')
}


// SUBMITOTP

    // const currentUser = db.users.doc(user.phoneNumber).get().then(doc => {
    //   console.log(db.formatedDoc(doc).mobNo)
    //   console.log(`user mobile number equal ${db.formatedDoc(doc).mobNo}=${user.phoneNumber} `, db.formatedDoc(doc).mobNo === user.phoneNumber)
    //   //if users data is present in db
    //   if (user.phoneNumber === db.formatedDoc(doc).mobNo) {
    //     dispatch({ type: OTP, payload: db.formatedDoc(doc) })
    //     console.log('user is already in db')
    //     history.push('/profile')
    //   }
    //   else {
    //     const newUser = db.users.doc(result.user.phoneNumber).set({
    //       name: name,
    //       email: email,
    //       mobNo: result.user.phoneNumber,
    //       userId: result.user.uid
    //     })
    //       .then(() => {
    //         console.log('user saved sucessfully')
    //         dispatch({ type: OTP, payload: { name, email, userId: result.user.uid, mobNo: number } })
    //         history.push('/profile')
    //       })
    //       .catch((err) => {
    //         console.log(err)
    //         console.log('unable to save user')
    //       })
    //   }


    //   //if user is trying to sigin with email id present in db
    //   if (user.phoneNumber === db.formatedDoc(doc).mobNo && (email || name)) {
    //     alert('user with email id already exits')
    //     //emtying all the input fileds
    //     setEmail('')
    //     setName('')
    //     setNumber('')
    //     setIsNumber(false)
    //     return;
    //   }
    //   // if(!user.phoneNumber===db.formatedDoc(doc).mobNo&&(email||name)){
    //   //if user data is not present in db

    // })