import { useState, useEffect } from "react";
import db from "../firebase/config"; 
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";

const useFirestore = (imgList) => {

 const [docs, setDocs] = useState([])
    
  useEffect(() => {
    const q = query(collection(db, imgList), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const documents = [];
      querySnapshot.forEach((doc) => {
          documents.push({...doc.data(), id: doc.id});
      });
      setDocs(documents)
    });

    return () => unsubscribe();
  },[imgList])

     return { docs }
 }

 export default useFirestore