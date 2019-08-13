import firebase from 'firebase';
 
/**
 * Register all firebase credentials here.
 */

export const firebaseConfig = {
  apiKey: "AIzaSyBy-tvth8HFL8Qx8hGZF9o-G6svBxv-378",
  authDomain: "benchapontest.firebaseapp.com",
  databaseURL: "https://benchapontest.firebaseio.com",
  projectId: "benchapontest",
  storageBucket: "benchapontest.appspot.com",
  messagingSenderId: "913873990116",
  appId: "1:913873990116:web:dc91b4422b3fb0cb"
  };

  firebase.initializeApp(firebaseConfig);
  // const auth = firebase.auth()
  const database = firebase.database()
  const ref = database.ref().child('D001')
  const nameRef = ref.child('name')
  const point = ref.child("point")
  
  const ref2 = database.ref().child('G001')
  const round = ref2.child('Round')
  export {
    // auth,
    ref,
    nameRef,
    point,
    round,
    
  }
  // export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()