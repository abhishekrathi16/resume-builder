// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTtJQkoyIIGQahFPmVgrJ7Ewee6RcV-4M",
  authDomain: "resumebuilderproject-65ede.firebaseapp.com",
  projectId: "resumebuilderproject-65ede",
  storageBucket: "resumebuilderproject-65ede.appspot.com",
  messagingSenderId: "148229390227",
  appId: "1:148229390227:web:fa478c8f07b45427833266",
  measurementId: "G-F8VZJ79DDP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, app, db };
