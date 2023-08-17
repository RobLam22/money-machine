// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwNdSuZTAHkcBp_PbsHVRuJXE_WyeB3DI",
  authDomain: "allaiproj2.firebaseapp.com",
  projectId: "allaiproj2",
  storageBucket: "allaiproj2.appspot.com",
  messagingSenderId: "226422195081",
  appId: "1:226422195081:web:781faba4658611902b9758",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
