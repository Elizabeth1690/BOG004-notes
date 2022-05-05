// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZ0N0g_rIGPhcSA4tiUwUfiHhLQ63wKm4",
  authDomain: "lab-notes-8c329.firebaseapp.com",
  projectId: "lab-notes-8c329",
  storageBucket: "lab-notes-8c329.appspot.com",
  messagingSenderId: "420112734743",
  appId: "1:420112734743:web:eabcbe8edcccb381059a52",
  measurementId: "G-211TQR9PZ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);