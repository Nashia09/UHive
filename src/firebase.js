// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,  createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDkOmQpMRIfazpDj_-ukV3Uyp6i_ehzUk",
  authDomain: "work-a886e.firebaseapp.com",
  projectId: "work-a886e",
  storageBucket: "work-a886e.appspot.com",
  messagingSenderId: "973828203501",
  appId: "1:973828203501:web:4d1079b623f07b0e37bde4",
  measurementId: "G-8THG3CBD6F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app); 
// export const database = app.firestore()
export const auth = getAuth();
export const storage = getStorage(app);


export function signup(email, password){
      createUserWithEmailAndPassword(auth, email, password);

}

//Custom React hook

export function useAuth() {
    const [currentUser, setCurrentUser] = useState();

    

    useEffect(() => {
    
      return () => {
      const unsub =  onAuthStateChanged(auth, user =>  setCurrentUser(user));

      return unsub;
      }
    }, [])
    
    return currentUser;
  
}



// export const addChatInterest = async (interestUid) => {
//   const chats = firestore.collection("chats");
//   const match = (await chats
//       .where("participants", "array-contains", auth.currentUser.uid)
//       .get()).docs.find(doc => doc.data().participants.includes(interestUid));

//   if (match) {
//       const confirmedAt = firebase.firestore.FieldValue.serverTimestamp();
//       firestore.doc(`chats/${match.id}`).update({ ...match.data(), confirmed: true, confirmedAt });
//   } else {
//       const participants = [auth.currentUser.uid, interestUid];
//       chats.add({ participants, messages: [], confirmed: false });
//   }
// }


