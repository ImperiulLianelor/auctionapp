//firebaseConfig.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDu4-9RSTPHCCOKKfQwvhqgj0rorjB9a8c",
  authDomain: "auction-app-321b5.firebaseapp.com",
  projectId: "auction-app-321b5",
  storageBucket: "auction-app-321b5.appspot.com",
  messagingSenderId: "968872507550",
  appId: "1:968872507550:web:078198a7b66b2b3d7f638f",
  measurementId: "G-4G5TF9ZRC8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);
const auth = getAuth(app);
export { db, auth, firebaseConfig };