// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "yogi-estate.firebaseapp.com",
  projectId: "yogi-estate",
  storageBucket: "yogi-estate.appspot.com",
  messagingSenderId: "542485738466",
  appId: "1:542485738466:web:9eb04f4d03f5ebaf08ffbb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const BE_LINK ="https://yogi-estate-be.onrender.com";
