import firebase from 'firebase';

/**
 * Register all firebase credentials here.
 */

const firebaseConfig = {
  apiKey: "AIzaSyBy-tvth8HFL8Qx8hGZF9o-G6svBxv-378",
  authDomain: "benchapontest.firebaseapp.com",
  databaseURL: "https://benchapontest.firebaseio.com",
  projectId: "benchapontest",
  storageBucket: "benchapontest.appspot.com",
  messagingSenderId: "913873990116",
  appId: "1:913873990116:web:dc91b4422b3fb0cb"
  };

  /**
    Dxxx : Code of factory
    Gxxx : Code of GasStation
  **/
  firebase.initializeApp(firebaseConfig);
  // const auth = firebase.auth()
  const database = firebase.database();
  const ref = database.ref().child('D001');// Code of factory
  const nameRef = ref.child('name');// Name of factory
  const pointRef = ref.child("point"); // Realtime on each point and have 3 point
  const historyRef = ref.child('History');// log every time college data and have timestamp and have point 1 only
  const averageWithOutRef = ref.child('Roundpointaverage');// Average on each point and have 3 point but don't have timestamp now
  const a060 = ref.child('a060');// like History and have 2 point(point 1,2) but don't have Relay state in every record

  const ref2 = database.ref().child('G001');
  const roundRef = ref2.child('Round');

  //* view all 
  // ref1.on('value', snapshot=>{
  //   console.log('ref', snapshot.val())
  // })

  export {
    // auth,
    ref,
    nameRef,
    pointRef,
    historyRef,
    averageWithOutRef,
    a060,
    roundRef
  }
  // export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()