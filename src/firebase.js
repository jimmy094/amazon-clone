// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDxneGLh9Y_glkQZ9W62KTEHqwp5jFNxxY",
    authDomain: "clone-a5a1c.firebaseapp.com",
    projectId: "clone-a5a1c",
    storageBucket: "clone-a5a1c.appspot.com",
    messagingSenderId: "941568339982",
    appId: "1:941568339982:web:81eb579da1b7b5b6df0c5f",
    measurementId: "G-15J9R59YF3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };