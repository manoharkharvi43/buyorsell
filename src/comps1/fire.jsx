import firebase from 'firebase'
import  'firebase/firestore'

 const  firebaseConfig = {
  apiKey: "AIzaSyDRxVDX2Z0_EUv6c2QzCQn6sBtYVUSJFGI",
  authDomain: "buyorsale-6830f.firebaseapp.com",
  databaseURL: "https://buyorsale-6830f.firebaseio.com",
  projectId: "buyorsale-6830f",
  storageBucket: "buyorsale-6830f.appspot.com",
  messagingSenderId: "151887824756",
  appId: "1:151887824756:web:7d3afd5a1891caf9df8e21",
  measurementId: "G-NVM2SW660C"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  export const db = fire.firestore()


  firebase.analytics();

  export default fire
  
