// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVB-qvJ9YtEX0WOWZMwtedGAAzXR2xA2I",
  authDomain: "laboratorio-creativo.firebaseapp.com",
  projectId: "laboratorio-creativo",
  storageBucket: "laboratorio-creativo.appspot.com",
  messagingSenderId: "940564887937",
  appId: "1:940564887937:web:6a85417b57f4fe787b9080"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)


export default db