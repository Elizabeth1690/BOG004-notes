// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  deleteDoc,
  doc,
  updateDoc,
  getDoc,
} from "firebase/firestore";

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
  measurementId: "G-211TQR9PZ4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
//export default app ;

export const loginWithGoogle = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  return signInWithPopup(auth, provider);
};

export const addNotes = (title, description) => {
  addDoc(collection(db, "notes"), { title, description });
};

export const getNotes = async () => {
  const consult = await getDocs(query(collection(db, "notes")));
  return consult;
};

export const deleteNotes = async (id) => {
  await deleteDoc(doc(db, "notes", id));
};

export const updateNote = async (id, title, description) => {
  await updateDoc(doc(db, "notes", id), { title, description });
};

export const getNote = async (id) => {
  const consult = await getDoc(doc(db, "notes", id));
  return consult;
};
export { getAuth, signInWithPopup, GoogleAuthProvider };
