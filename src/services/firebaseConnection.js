import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

let firebaseConfig = {
    apiKey: "AIzaSyBS0SsZiUceiNXvQXyo6R4F4WXvlQgX5ck",
    authDomain: "sistema-web-ae926.firebaseapp.com",
    projectId: "sistema-web-ae926",
    storageBucket: "sistema-web-ae926.appspot.com",
    messagingSenderId: "441940081482",
    appId: "1:441940081482:web:8fdcb418c74feb248f9fb3",
    measurementId: "G-K709HZR2HL"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;