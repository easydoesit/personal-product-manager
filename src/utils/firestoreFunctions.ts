import {addDoc, collection, DocumentData, connectFirestoreEmulator} from "firebase/firestore";
import { CheckFirestoreInit } from "./firestoreInit";

const db = CheckFirestoreInit();

if (db && process.env.ENV === 'DEV') {
  connectFirestoreEmulator(db, '127.0.0.1', 8080);
} 

let functionDest:string;

if(process.env.ENV === 'DEV') { 
functionDest = import.meta.env.VITE_FUNCTION_END_POINT;
}

export async function CreateContact(contact:DocumentData):Promise<DocumentData>{
  if (!db) throw new Error("Firestore is not initialized");
  
  try {
    
    const docRef = await addDoc(collection(db, 'contacts'), contact);
    console.log(`Document created with ID: ${docRef.id}`);

    const response = await fetch(`${functionDest}/sendEMail`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact),
  });

  const result = await response.json();
  
  if(!response.ok) {
    const errorText = await response.text();
    throw new Error(`HTTP error! Status: ${response.status}, Body: ${errorText}`);
  }
  
  console.log("Email send successfully:", result);
  return result;

  } catch (error) {
    console.error("Error creating contact:", error);
    throw error;
  };
};