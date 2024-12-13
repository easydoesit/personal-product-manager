import { FirebaseApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDsDYRp9xYQLGi-mbXp8fJwXSqGq6v3nnE",
  authDomain: "personal-product-manager.firebaseapp.com",
  projectId: "personal-product-manager",
  storageBucket: "personal-product-manager.firebasestorage.app",
  messagingSenderId: "856838375720",
  appId: "1:856838375720:web:0d7e460684b85e6841681d",
  measurementId: "G-0FWYP7PHHZ"
};

//Initialize Firebase
export let firebaseApp:FirebaseApp | undefined;
// Check if firebaseApp is not initialized
if (!firebaseApp) {
  firebaseApp = initializeApp(firebaseConfig);
}

export const firebaseAuth = getAuth();

//const analytics = getAnalytics(app);