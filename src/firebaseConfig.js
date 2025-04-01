// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-4D_MfSQkcXZZb9Q5-CRCwkdk9PEFFTg",
  authDomain: "clothesapp-4fb61.firebaseapp.com",
  projectId: "clothesapp-4fb61",
  storageBucket: "clothesapp-4fb61.firebasestorage.app",
  messagingSenderId: "1027892217215",
  appId: "1:1027892217215:web:c469f859576d11a76d464a",
  measurementId: "G-J849W6248K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;