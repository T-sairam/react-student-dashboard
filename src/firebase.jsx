// Import the functions you need from the Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration (replace with your actual config)
const firebaseConfig = {
  apiKey: "AIzaSyAseKvzhz44QcfYto_qrhdlPiuHEP37njI",
  authDomain: "react-student-dashboard-ec5d6.firebaseapp.com",
  projectId: "react-student-dashboard-ec5d6",
  storageBucket: "react-student-dashboard-ec5d6.firebasestorage.app",
  messagingSenderId: "806237597474",
  appId: "1:806237597474:web:cfd9e0fdc856d109813f7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Log to check if Firebase initializes correctly
console.log("Firebase initialized:", app);

// Export Firebase Auth and Firestore instances
export const auth = getAuth(app);
export const db = getFirestore(app);

// Log Firestore instance to confirm it's working
console.log("Firestore initialized:", db);
