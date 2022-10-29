// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB5ZURanjIGEX6BWy8dCWJ63VtlispSoU4",
  authDomain: "ecommercereact-4b445.firebaseapp.com",
  projectId: "ecommercereact-4b445",
  storageBucket: "ecommercereact-4b445.appspot.com",
  messagingSenderId: "432827959589",
  appId: "1:432827959589:web:681491468729f9a9eef2cc"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

