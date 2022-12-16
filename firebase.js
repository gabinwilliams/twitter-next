// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "twitter-next-app-3b3ef.firebaseapp.com",
    projectId: "twitter-next-app-3b3ef",
    storageBucket: "twitter-next-app-3b3ef.appspot.com",
    messagingSenderId: "1088855532678",
    appId: "1:1088855532678:web:8c081a0650481f9c3edd07",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };
