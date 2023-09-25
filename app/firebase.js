// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMaSf90S7y_h_vBbgVTQycWx2iavttGIw",
  authDomain: "login-post-firebase.firebaseapp.com",
  projectId: "login-post-firebase",
  storageBucket: "login-post-firebase.appspot.com",
  messagingSenderId: "632303228003",
  appId: "1:632303228003:web:db9af0a66e1b3836aa9456",
  measurementId: "G-3GN5W69JPP"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
