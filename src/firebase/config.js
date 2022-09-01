// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCcAN3A300d-qWuufwLNRRyov03DFpV7fc",
    authDomain: "journalapp-apn.firebaseapp.com",
    projectId: "journalapp-apn",
    storageBucket: "journalapp-apn.appspot.com",
    messagingSenderId: "1086572394351",
    appId: "1:1086572394351:web:253ceb7137c6305100da9a"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);