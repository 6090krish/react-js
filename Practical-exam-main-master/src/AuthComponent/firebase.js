import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA1cMze0KEZJ81ghh4tq-MEsfhLjaSUqYo",
  authDomain: "vaulted-acolyte-411611.firebaseapp.com",
  databaseURL: "https://vaulted-acolyte-411611-default-rtdb.firebaseio.com",
  projectId: "vaulted-acolyte-411611",
  storageBucket: "vaulted-acolyte-411611.appspot.com",
  messagingSenderId: "820077743864",
  appId: "1:820077743864:web:2b4ebffaca348b213a750d",
  measurementId: "G-XK09F7JPTL"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);