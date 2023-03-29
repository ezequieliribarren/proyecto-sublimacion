// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQTxTfG_j73ORoUBlOZPGZ6x-kzObm3YA",
  authDomain: "react-coder-iribarren.firebaseapp.com",
  projectId: "react-coder-iribarren",
  storageBucket: "react-coder-iribarren.appspot.com",
  messagingSenderId: "652286891921",
  appId: "1:652286891921:web:047fd97d78970b76fd6c30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
