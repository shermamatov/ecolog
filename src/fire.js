// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDkTUTV_Z0E8l0e_hYyJCbJawMG_So-au0",
    authDomain: "ecolog-io.firebaseapp.com",
    projectId: "ecolog-io",
    storageBucket: "ecolog-io.appspot.com",
    messagingSenderId: "540579885464",
    appId: "1:540579885464:web:385893784a918df34f7bed",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const fire = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage();
