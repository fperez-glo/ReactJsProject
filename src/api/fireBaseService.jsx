import firebase from "firebase"
import 'firebase/firestore'
import * as dotenv from 'dotenv'

var firebaseConfig = {
    // apiKey: process.env.API_KEY,
    // authDomain: process.env.AUTH_DOMAIN,
    // projectId: process.env.PROJECT_ID,
    // storageBucket: process.env.STORAGE_BUCKET,
    // messagingSenderId: process.env.MESSAGE_SENDER_ID,
    // appId: process.env.APP_ID,
    apiKey: 'AIzaSyAbMP96beYSLl811549ECsL_caKJF3Q24s',
    authDomain: 'reactjsproyecy.firebaseapp.com',
    projectId: 'reactjsproyecy',
    storageBucket: 'reactjsproyecy.appspot.com',
    messagingSenderId: '490463028596',
    appId: '1:490463028596:web:b49417cae5312e171f3821',
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

  export function getFireBase(){
      return app
  };

  export function getFirestore(){
    return firebase.firestore(app)
  };