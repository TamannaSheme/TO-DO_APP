// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYN_0ldUK4MqaLVIdNJdLIUxov8WiGCC4",
  authDomain: "todo-d05ad.firebaseapp.com",
  projectId: "todo-d05ad",
  storageBucket: "todo-d05ad.appspot.com",
  messagingSenderId: "712924765265",
  appId: "1:712924765265:web:6ddcf43ecaa5f10628ac70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;