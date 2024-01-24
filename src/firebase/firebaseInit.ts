// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzSbCtnfu2-_SyXZE2E65jHPmfPx2NCKY",
  authDomain: "bookshelf-2-0.firebaseapp.com",
  projectId: "bookshelf-2-0",
  storageBucket: "bookshelf-2-0.appspot.com",
  messagingSenderId: "428748829338",
  appId: "1:428748829338:web:40621d484c44a946a06523",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Auth
export const auth = getAuth(app);
// Initialize Storage
export const db = getFirestore(app);
// Initialize Storage
export const storage = getStorage(app);
