import {addDoc, collection, DocumentData, connectFirestoreEmulator} from "firebase/firestore";
import { CheckFirestoreInit } from "./firestoreInit";

const db = CheckFirestoreInit();

if (db && process.env.ENV === 'DEV') {
  connectFirestoreEmulator(db, '127.0.0.1', 8080);
} 


export async function CreateContact(contact:DocumentData){

  try {
    
    if(db) {
      await addDoc(collection(db, 'Contacts'), contact);
    };
  
  } catch (error) {
    console.error(error);
  };
};