import { header } from "./css/headerstyle";
import { Button, Dialog, Grid } from "@mui/material";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import {
  collection,
  getFirestore,
  setDoc,
  doc,
  serverTimestamp,
  addDoc,
} from "firebase/firestore";

import SignIn from "./firebase/SignIn";
import SignOut from "./firebase/SignOut";
import { fbApp } from "./firebase/firebase-project-config";
import FormDialog from "./Dialog";
import Books from "./Books";
import { Container } from "@mui/system";
import useData from "./firebase/utils";
import useBooks from "./firebase/useBooks";

const auth = getAuth(fbApp);

function App() {
  const [user] = useAuthState(auth);
  const [
    handleEdit,
    handleClickOpen,
    handleClose,
    handleChange,
    sendBook,
    saveEdit,
    open,
    isEdit,
    bookValues,
    uploadImage,
  ] = useData();
  const [books, deleteBook] = useBooks();
  return (
    <>
      <header className="App" style={header}>
        <span style={{ fontSize: "2em" }}> Bookshelf</span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "400px",
            height: "80%",
            justifyContent: "space-between",
          }}
        >
          <SignOut />
        </div>
        {user ? null : <SignIn />}
        {user && (
          <Button
            size="large"
            startIcon={<AutoStoriesIcon />}
            variant="outlined"
            onClick={handleClickOpen}
          >
            Add Book
          </Button>
        )}
      </header>
      <main style={{ paddingLeft: "5%", paddingRight: "5%" }}>
        <Container>
          <Grid
            container
            spacing={3}
            justifyContent="space-between"
            sx={{ display: "flex", flexWrap: "wrap", mt: 10, mb: 10 }}
          >
            {user && (
              <Books
                handleEdit={handleEdit}
                deleteBook={deleteBook}
                books={books}
                uploadImage={uploadImage}
              />
            )}
          </Grid>
        </Container>
      </main>
      <FormDialog
        open={open}
        handleClose={handleClose}
        handleChange={handleChange}
        sendBook={sendBook}
        isEdit={isEdit}
        saveEdit={saveEdit}
        book={bookValues}
      />
    </>
  );
}

export default App;
