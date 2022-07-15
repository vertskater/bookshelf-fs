import {
  query,
  collection,
  getFirestore,
  orderBy,
  limit,
} from "firebase/firestore";

export const myData = query(
  collection(getFirestore(), "books"),
  orderBy("createdAt"),
  limit(25)
);
