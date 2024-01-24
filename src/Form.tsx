import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

//import { useState } from "react";
import useBooks, { TBook } from "./useBooks";

interface Props {
  open: boolean;
  book: TBook | null;
  handleClose: () => void;
  handleChange: (event: any) => void;
}

export default function Form({ open, book, handleClose, handleChange }: Props) {
  const [, addBook, , , editBook] = useBooks();
  //const [formData, setFormData] = useState(book ?? {});
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{book?.createdAt ? "Edit Book" : "Add Book"}</DialogTitle>
      <DialogContent>
        <DialogContentText>Add a Book to the Bookshelf</DialogContentText>
        <TextField
          required
          autoFocus
          margin="dense"
          id="title"
          label="Book Title"
          type="text"
          fullWidth
          variant="standard"
          value={book?.title}
          onChange={(e) => handleChange(e)}
        />
        <TextField
          required
          margin="dense"
          id="author"
          label="Author"
          type="text"
          fullWidth
          variant="standard"
          value={book?.author}
          onChange={(e) => handleChange(e)}
        />
        <TextField
          required
          margin="dense"
          id="pages"
          label="Pages"
          type="number"
          fullWidth
          variant="standard"
          value={book?.pages}
          onChange={(e) => handleChange(e)}
        />

        <FormControlLabel
          control={
            <Checkbox
              id="read"
              checked={book?.read}
              onChange={(e) => handleChange(e)}
            />
          }
          label="Read?"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          onClick={() => {
            if (book?.createdAt) {
              (editBook as (book: TBook) => void)(book as TBook);
            } else {
              (addBook as (book: TBook) => Promise<void>)(
                book as unknown as TBook
              );
            }
            handleClose();
          }}
        >
          {book?.createdAt ? "Save Changes" : "Add Book"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
