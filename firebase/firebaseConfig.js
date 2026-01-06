// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJkQw4hE3kPZCOHq7GKSWCnloTGyWTgNw",
  authDomain: "bros-7248c.firebaseapp.com",
  projectId: "bros-7248c",
  storageBucket: "bros-7248c.firebasestorage.app",
  messagingSenderId: "100000843220",
  appId: "1:100000843220:web:18b5738a3303d281468241"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)