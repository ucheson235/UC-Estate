// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDnsfDPf5j9NE4RUgr8spakjKxd24aWTk",
  authDomain: "uc-estate-react.firebaseapp.com",
  projectId: "uc-estate-react",
  storageBucket: "uc-estate-react.appspot.com",
  messagingSenderId: "859383844659",
  appId: "1:859383844659:web:737e740e898a3892637846"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
 export const db = getFirestore();
 