// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFtqD8oWGn5nzxSw9m55W0e1oEWGn9iGQ",
  authDomain: "fir-vuejs-8939f.firebaseapp.com",
  projectId: "fir-vuejs-8939f",
  storageBucket: "fir-vuejs-8939f.appspot.com",
  messagingSenderId: "599659128232",
  appId: "1:599659128232:web:f697ea59711d25e03fe99d",
  measurementId: "G-DVP3PM4KWW"
};

initializeApp(firebaseConfig);
const db = getFirestore();

export default db;