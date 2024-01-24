import { Grid, Paper, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import useBooks from "./useBooks";
import { TBook } from "./useBooks";
import { ChangeEvent } from "react";
import { auth } from "./firebase/firebaseInit";

const typoStyle = {
  pt: 2,
  display: "flex",
  justifyContent: "space-between",
};

interface Props {
  formOpen: (book: TBook) => void;
}
export default function BookCard({ formOpen }: Props) {
  const [books, , deleteBook, addImage] = useBooks();
  return (
    <>
      {books &&
        (books as TBook[])
          .filter((book) => book.uid === auth.currentUser?.uid)
          .map((book) => {
            return (
              <Grid key={book.id} item xs={12} sm={6} md={4}>
                <Paper
                  elevation={2}
                  sx={{
                    padding: 2,
                  }}
                >
                  {book.imageURL && (
                    <img
                      src={book.imageURL}
                      alt={book.title}
                      style={{ maxWidth: "100%" }}
                    />
                  )}
                  <Typography variant="h5" component="h3" sx={typoStyle}>
                    Title: <span>{book.title}</span>
                  </Typography>
                  <Typography variant="h5" component="h3" sx={typoStyle}>
                    Author: <span>{book.author}</span>
                  </Typography>
                  <Typography variant="h5" component="h3" sx={typoStyle}>
                    Pages: <span>{book.pages}</span>
                  </Typography>
                  <Typography variant="h5" component="h3" sx={typoStyle}>
                    Read: <span>{book.read ? "read" : "not read"}</span>
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      marginTop: 30,
                      borderTop: ".5px solid #333",
                    }}
                  >
                    <IconButton color="primary" component="label">
                      <input
                        type="file"
                        accept="image/*"
                        hidden
                        onChange={(e) =>
                          (
                            addImage as (
                              e: ChangeEvent<HTMLInputElement>,
                              book: TBook
                            ) => void
                          )(e, book)
                        }
                      ></input>
                      <AddPhotoAlternateIcon />
                    </IconButton>
                    <IconButton
                      color="primary"
                      component="button"
                      onClick={() =>
                        (deleteBook as (book: TBook) => void)(book)
                      }
                    >
                      <DeleteIcon />
                    </IconButton>
                    <IconButton
                      color="primary"
                      component="button"
                      onClick={() => formOpen(book)}
                    >
                      <EditIcon />
                    </IconButton>
                  </div>
                </Paper>
              </Grid>
            );
          })}
    </>
  );
}
