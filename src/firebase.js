// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';  
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFirb5Oz_lFojJlUn37t-O-bccjccmxnw",
  authDomain: "ustaad-4cbb1.firebaseapp.com",
  projectId: "ustaad-4cbb1",
  storageBucket: "ustaad-4cbb1.appspot.com",
  messagingSenderId: "382159535325",
  appId: "1:382159535325:web:363cef3cce5cc078506f34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};