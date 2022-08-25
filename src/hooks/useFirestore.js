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
          description_eng: doc.data().description_eng,
          description_ru: doc.data().description_ru,
          name_eng: doc.data().name_eng,
          name_ru: doc.data().name_ru,
          name_skh: doc.data().name_skh,
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
