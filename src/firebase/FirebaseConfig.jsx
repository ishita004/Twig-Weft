// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChVoXaTrUw1yryYC5LA-CDxTb7k62_ov0",
  authDomain: "react-project-d9cf4.firebaseapp.com",
  projectId: "react-project-d9cf4",
  storageBucket: "react-project-d9cf4.appspot.com",
  messagingSenderId: "549843321209",
  appId: "1:549843321209:web:63463ebcd7e49dbaa92fa8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;