import {addDoc, collection, DocumentData} from "firebase/firestore";
import { CheckFirestoreInit } from "./firestoreInit";

const db = CheckFirestoreInit();

export async function CreateContact(contact:DocumentData){

  try {
    
    if(db) {
      await addDoc(collection(db, 'Contacts'), contact);
    };
  
  } catch (error) {
    console.error(error);
  };
};