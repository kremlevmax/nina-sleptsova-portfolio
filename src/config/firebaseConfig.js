// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDYdzKnDo_8AbPPjCLX4z8KddkDJvrfpw",
  authDomain: "nina-portfolio-605ac.firebaseapp.com",
  projectId: "nina-portfolio-605ac",
  storageBucket: "nina-portfolio-605ac.appspot.com",
  messagingSenderId: "612176417590",
  appId: "1:612176417590:web:e4984cf7385ad86d63d997",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
