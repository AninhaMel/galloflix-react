// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzEgC1-OD7XQ_AV_sq6A-gPBqQHN3FqNI",
  authDomain: "galloflix-94cb3.firebaseapp.com",
  projectId: "galloflix-94cb3",
  storageBucket: "galloflix-94cb3.appspot.com",
  messagingSenderId: "471511438708",
  appId: "1:471511438708:web:3aed01bd1a79da0728c821"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  auth = getAuth(app);