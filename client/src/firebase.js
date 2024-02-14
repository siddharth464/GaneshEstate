// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ganesh-estate.firebaseapp.com",
  projectId: "ganesh-estate",
  storageBucket: "ganesh-estate.appspot.com",
  messagingSenderId: "797320741581",
  appId: "1:797320741581:web:10ac6230a203911aaa5f84"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);