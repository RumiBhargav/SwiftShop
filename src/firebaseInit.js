// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBixBGSctoutBBW4FBsHYSUy_AeM19ZikQ",
  authDomain: "ecommerce-application-48a95.firebaseapp.com",
  projectId: "ecommerce-application-48a95",
  storageBucket: "ecommerce-application-48a95.firebasestorage.app",
  messagingSenderId: "513812620824",
  appId: "1:513812620824:web:93b18a0fbd062d1d11c56d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const auth=getAuth(app);