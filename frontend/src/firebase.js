// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APP,
  authDomain: "mern-estate-alim.firebaseapp.com",
  projectId: "mern-estate-alim",
  storageBucket: "mern-estate-alim.appspot.com",
  messagingSenderId: "623606648316",
  appId: "1:623606648316:web:26805a55bce9ec0498f679",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
