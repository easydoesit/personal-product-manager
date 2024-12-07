// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsDYRp9xYQLGi-mbXp8fJwXSqGq6v3nnE",
  authDomain: "personal-product-manager.firebaseapp.com",
  projectId: "personal-product-manager",
  storageBucket: "personal-product-manager.firebasestorage.app",
  messagingSenderId: "856838375720",
  appId: "1:856838375720:web:0d7e460684b85e6841681d",
  measurementId: "G-0FWYP7PHHZ"
};

// Initialize Firebase
export let firebaseApp;

if (!firebaseApp || (firebaseApp)?.apps?.length === undefined) {
  firebaseApp = initializeApp(firebaseConfig);
}

if (firebaseApp) {
  const analytics = getAnalytics(firebaseApp);
}