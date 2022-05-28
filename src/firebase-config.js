// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLX1mnr3jxjXKrf2Piw8sy4R7j-pD_Xc8",
  authDomain: "tfc-gestion-torneos.firebaseapp.com",
  databaseURL: "https://tfc-gestion-torneos-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tfc-gestion-torneos",
  storageBucket: "tfc-gestion-torneos.appspot.com",
  messagingSenderId: "755679292748",
  appId: "1:755679292748:web:b3b344d609981a6422f3e9",
  measurementId: "G-RV5TL9C6NV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(auth);
//export const analytics = getAnalytics(app);
export const db = getFirestore(app)
