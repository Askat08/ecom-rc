import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCmNDuxbK89lbkbOxz0IItxle6KAX7C99I",
  authDomain: "ecomrc-db.firebaseapp.com",
  projectId: "ecomrc-db",
  storageBucket: "ecomrc-db.appspot.com",
  messagingSenderId: "858385506864",
  appId: "1:858385506864:web:4c9137226e4cba0e0c03f5",
  measurementId: "G-72VRZWH8ZL"
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 