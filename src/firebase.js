
import * as firebase from "firebase"
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIObg_A9s9jJ_Z5jYdHShL6_YezpATEJg",
  authDomain: "react-firebase-crud-27655.firebaseapp.com",
  databaseURL: "https://react-firebase-crud-27655-default-rtdb.firebaseio.com",
  projectId: "react-firebase-crud-27655",
  storageBucket: "react-firebase-crud-27655.appspot.com",
  messagingSenderId: "245493655181",
  appId: "1:245493655181:web:17a5dcda0c964c6762a4c4"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)
export default app.database().ref()


