
import firebase from "firebase";
// const firebaseConfig = {
//     apiKey: "AIzaSyAz6Cc3aBTD-5uXCIMsmXo7Z9trTjhSAk4",
//     authDomain: "amzonclone-36565.firebaseapp.com",
//     projectId: "amzonclone-36565",
//     storageBucket: "amzonclone-36565.appspot.com",
//     messagingSenderId: "449670051451",
//     appId: "1:449670051451:web:c7a0fd7d549d4d8d9214de"
//   };

const firebaseConfig = {
  apiKey: "AIzaSyCW2h6YWLrCQIFUtv6fvL1031SiIWunuBI",
  authDomain: "the-kalavarana.firebaseapp.com",
  projectId: "the-kalavarana",
  storageBucket: "the-kalavarana.appspot.com",
  messagingSenderId: "116614517374",
  appId: "1:116614517374:web:9b1e0aed94443e9af03e2f",
  measurementId: "G-MZS0BHYGNB"
};

firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth()
export const storage = firebase.storage()
export const firestore = firebase.firestore()
export const db = {
  users: firestore.collection('USERS'),
  products: firestore.collection('PRODUCTS'),
  // address: firestore.collection('addresses'),
  // wishlist: firestore.collection('wishlist'),
  // reviews: firestore.collection('reviews'),
  // cart: firestore.collection('cart'),
  // orders: firestore.collection('orders'),
  formatedDoc: doc => {
    return { id: doc.id, ...doc.data() }
  },
  getCurrentTimeStamp: firebase.firestore.FieldValue.serverTimestamp,
}
// db.users.get().then((arr) => arr.forEach((doc) => console.log(doc.data())));
// db.address.get().then((arr) => arr.forEach((doc) => console.log(doc.data())));

export default firebase;