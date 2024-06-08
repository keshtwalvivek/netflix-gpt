// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPaGT8_jAbkx9GjUvnPZJBLGlgjM8yE8w",
  authDomain: "netflixgpt-463f7.firebaseapp.com",
  projectId: "netflixgpt-463f7",
  storageBucket: "netflixgpt-463f7.appspot.com",
  messagingSenderId: "384976597742",
  appId: "1:384976597742:web:ae2fbe841b5630688379ff",
  measurementId: "G-ZFJZZF4JYH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
