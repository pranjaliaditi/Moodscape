// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import { getAuth, onAuthStateChanged } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseApp = initializeApp ( {
    apiKey: "AIzaSyBmnXM2jXry1hRfrGwLSglFpThQGZZNm8E",
    authDomain: "ebuddy-c15f2.firebaseapp.com",
    projectId: "ebuddy-c15f2",
    storageBucket: "ebuddy-c15f2.appspot.com",
    messagingSenderId: "242543592126",
    appId: "1:242543592126:web:7be8ee814b989e524614ef",
    measurementId: "G-JYQE43K8BK"
});

// Initialize Firebase
const auth = getAuth(firebaseApp);





onAuthStateChanged (auth, user => {
    if(user != null) {
        console.log('logged in!');

    } else {
        console.log('No user');
    }
});