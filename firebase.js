// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnNeig0emVV-WLcABWIKDQX2KwpV7fGzg",
  authDomain: "login-page-6d51a.firebaseapp.com",
  projectId: "login-page-6d51a",
  storageBucket: "login-page-6d51a.appspot.com",
  messagingSenderId: "221193584748",
  appId: "1:221193584748:web:f5ffc63c2338ce32ee9849",
  measurementId: "G-E7TM0S09T9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

