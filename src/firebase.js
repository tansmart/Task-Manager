// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCuy4mOxZz6lhm0qn_I6oc_pl3JGBzv4xQ",
  authDomain: "todo-f0359.firebaseapp.com",
  projectId: "todo-f0359",
  storageBucket: "todo-f0359.appspot.com",
  messagingSenderId: "498995617255",
  appId: "1:498995617255:web:c96befc1baca9041bc7142",
  measurementId: "G-188D2X7C4T",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export { db, firebase };
