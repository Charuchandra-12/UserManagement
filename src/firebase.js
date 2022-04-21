// import * as firebase from "firebase";
// import firebase from 'firebase/app';
// import 'firebase/database';
import firebase from "firebase/compat/app";
import "firebase/compat/database";

var firebaseConfig = {
    apiKey: "AIzaSyBQRMDrSkzvfWGOaT9zmVtEkWtHeJldE_o",
    authDomain: "usermanagement-c714f.firebaseapp.com",
    databaseURL: "https://usermanagement-c714f-default-rtdb.firebaseio.com",
    projectId: "usermanagement-c714f",
    storageBucket: "usermanagement-c714f.appspot.com",
    messagingSenderId: "151418165356",
    appId: "1:151418165356:web:1101c162ed9a099fbba049"
};

// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();

