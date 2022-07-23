import { useState, useEffect } from "react";
import {
  onSnapshot,
  collection,
  getFirestore,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { getStorage, ref, deleteObject } from "firebase/storage";

export default function useBooks() {
  const [books, setBooks] = useState([
    { title: "loading ...", id: "initialId" },
  ]);
  useEffect(
    () =>
      onSnapshot(collection(getFirestore(), "books"), (snapshot) => {
        setBooks(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      }),
    []
  );

  const deleteBook = async (book) => {
    await deleteDoc(doc(getFirestore(), "books", book.id));
    if (book.imageURL) {
      let imageRef = ref(getStorage(), book.imageURL);
      deleteObject(imageRef);
    }
  };
  return [books, deleteBook];
}
