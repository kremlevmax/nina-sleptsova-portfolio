import { useState, useEffect } from "react";
import { firestore } from "../config/firebaseConfig";
import { collection, query, onSnapshot } from "firebase/firestore";

const useFirestore = () => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const q = query(collection(firestore, "projects"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const images = [];
      querySnapshot.forEach((doc) => {
        images.push({
          id: doc.id,
          desc: doc.data().desc,
          name: doc.data().name,
          photos: doc.data().photos,
        });
      });
      setDocs(images);
    });
    return () => unsubscribe();
  }, []);
  return { docs };
};

export default useFirestore;
