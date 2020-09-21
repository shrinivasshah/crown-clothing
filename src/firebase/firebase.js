import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyAs6Ys99NZ98rV-dv0KBIB-SNYuIkCfKyc",
    authDomain: "crwn-31924.firebaseapp.com",
    databaseURL: "https://crwn-31924.firebaseio.com",
    projectId: "crwn-31924",
    storageBucket: "crwn-31924.appspot.com",
    messagingSenderId: "933061376752",
    appId: "1:933061376752:web:dcc942bca33666d0b7a035",
    measurementId: "G-PPF6F64CXM"
  };


  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase;