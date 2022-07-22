import { useState, useEffect } from "react";
import {
  onSnapshot,
  collection,
  getFirestore,
  deleteDoc,
  doc,
} from "firebase/firestore";

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

  const deleteBook = async (id) => {
    await deleteDoc(doc(getFirestore(), "books", id));
  };
  return [books, deleteBook];
}
