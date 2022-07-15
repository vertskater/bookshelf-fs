import { myData } from "./firebase/getData";
import {
  useCollectionData,
  useCollection,
} from "react-firebase-hooks/firestore";
import { Button, Grid, Paper, Typography } from "@mui/material";
import {
  doc,
  deleteDoc,
  getDoc,
  getFirestore,
  collection,
  snapshotChanges,
} from "firebase/firestore";

export default function Books() {
  const [books] = useCollectionData(myData, { idField: "id" });
  const [id] = useCollection(myData);
  const showBook = async (book) => {
    console.log(id);
  };
  return (
    <>
      {books &&
        books.map((book) => {
          return (
            <Grid key={book.pages} item xs={12} sm={6} md={4}>
              <Paper
                elevation={2}
                sx={{
                  padding: 2,
                }}
              >
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  Title: <span>{book.title}</span>
                </Typography>
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  Author: <span>{book.author}</span>
                </Typography>
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  Pages: <span>{book.pages}</span>
                </Typography>
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  Read: <span>{book.read ? "read" : "not read"}</span>
                </Typography>
              </Paper>
              <Button onClick={() => showBook(book)}>click me</Button>
            </Grid>
          );
        })}
    </>
  );
}
