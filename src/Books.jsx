import { Grid, Paper, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

export default function Books({ handleEdit, deleteBook, books, uploadImage }) {
  const typoStyle = {
    pt: 2,
    display: "flex",
    justifyContent: "space-between",
  };
  /*  const [books, setBooks] = useState([
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
  }; */
  return (
    <>
      {books &&
        books.map((book) => {
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
                      onChange={(e) => uploadImage(e, book)}
                    ></input>
                    <AddPhotoAlternateIcon />
                  </IconButton>
                  <IconButton
                    color="primary"
                    variant="outlined"
                    onClick={() => deleteBook(book)}
                  >
                    <DeleteIcon />
                  </IconButton>
                  <IconButton
                    color="primary"
                    variant="outlined"
                    onClick={() => handleEdit(book)}
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
