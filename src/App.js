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

const auth = getAuth(fbApp);

function App() {
  const [open, setOpen] = useState(false);
  const [user] = useAuthState(auth);
  const [bookValues, setBookValues] = useState({
    title: "",
    author: "",
    pages: 0,
    read: false,
  });
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (prop) => (e) => {
    const checked = e.target.checked ? true : false;
    if (e.target.type !== "checkbox") {
      setBookValues({
        ...bookValues,
        [prop]: e.target.value,
      });
    } else {
      setBookValues({
        ...bookValues,
        [prop]: checked,
      });
    }
  };
  const sendBook = async () => {
    const { uid, photoURL } = getAuth().currentUser;
    const booksRef = collection(getFirestore(), "books");
    const docRef = await addDoc(booksRef, {
      title: bookValues.title,
      author: bookValues.author,
      pages: bookValues.pages,
      read: bookValues.read,
      createdAt: serverTimestamp(),
      uid,
      photoURL,
    });
    setBookValues({
      title: "",
      author: "",
      pages: 0,
      read: false,
    });
    setOpen(false);
  };

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
            {user && <Books />}
          </Grid>
        </Container>
      </main>
      <FormDialog
        open={open}
        handleClose={handleClose}
        handleChange={handleChange}
        sendBook={sendBook}
      />
    </>
  );
}

export default App;
