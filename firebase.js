import { getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAQYUEqU_lV2-BG6Zer9f5ojbieYD7-QxY",
    authDomain: "hotel-app-e470e.firebaseapp.com",
    projectId: "hotel-app-e470e",
    storageBucket: "hotel-app-e470e.appspot.com",
    messagingSenderId: "785295341841",
    appId: "1:785295341841:web:e6c620e23887fad5f8b4b0"

};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export { auth, db };