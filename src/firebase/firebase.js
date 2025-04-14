// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase , ref, get, child } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlu-uzqxDdu0RAHvEaqMGpUIen0_OcZD8",
  authDomain: "psychologists-services-5be01.firebaseapp.com",
  projectId: "psychologists-services-5be01",
  storageBucket: "psychologists-services-5be01.firebasestorage.app",
  messagingSenderId: "1023169517291",
  appId: "1:1023169517291:web:95eb26577d826d687e50ae",
  measurementId: "G-GTBM5M875Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
console.log(db)
export {ref, get, child}
