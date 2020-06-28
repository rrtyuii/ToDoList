// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";


var firebaseConfig = {
    apiKey: "AIzaSyDDDFUIdqsGiv_v2t8LJuHw3H_cuEjUa-E",
    authDomain: "todolist-24e2e.firebaseapp.com",
    databaseURL: "https://todolist-24e2e.firebaseio.com",
    projectId: "todolist-24e2e",
    storageBucket: "todolist-24e2e.appspot.com",
    messagingSenderId: "651841956764",
    appId: "1:651841956764:web:df93ffa241b84a38b8f659",
    measurementId: "G-36QX7ZFGQW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db }