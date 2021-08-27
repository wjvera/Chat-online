import firebase from 'firebase/app' //firebase
import 'firebase/firestore'  //base de datos
import 'firebase/auth' //autenticacion


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBMoBsqCCxVwSYONkX_BpvqbxlpZidGJ5g",
    authDomain: "chat-app-95152.firebaseapp.com",
    projectId: "chat-app-95152",
    storageBucket: "chat-app-95152.appspot.com",
    messagingSenderId: "852114811479",
    appId: "1:852114811479:web:8c6cedb752c542a68a9112"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {db, auth, provider}
