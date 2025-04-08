import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-4D_MfSQkcXZZb9Q5-CRCwkdk9PEFFTg",
  authDomain: "clothesapp-4fb61.firebaseapp.com",
  projectId: "clothesapp-4fb61",
  storageBucket: "clothesapp-4fb61.firebasestorage.app",
  messagingSenderId: "1027892217215",
  appId: "1:1027892217215:web:c469f859576d11a76d464a",
  measurementId: "G-J849W6248K"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;