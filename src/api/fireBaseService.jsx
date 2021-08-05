import firebase from "firebase"
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAbMP96beYSLl811549ECsL_caKJF3Q24s",
    authDomain: "reactjsproyecy.firebaseapp.com",
    projectId: "reactjsproyecy",
    storageBucket: "reactjsproyecy.appspot.com",
    messagingSenderId: "490463028596",
    appId: "1:490463028596:web:b49417cae5312e171f3821"
  };
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

  export function getFireBase(){
      return app
  };

  export function getFirestore(){
    return firebase.firestore(app)
  };