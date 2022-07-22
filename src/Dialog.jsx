import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { FormControlLabel } from "@mui/material";
import { Checkbox } from "@mui/material";

export default function FormDialog({
  open,
  handleClose,
  handleChange,
  sendBook,
  saveEdit,
  isEdit,
  book,
}) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{isEdit ? "Edit Book" : "Add Book"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {isEdit ? "Change" : "Add"} a Book to the Bookshelf
        </DialogContentText>
        <TextField
          required
          autoFocus
          margin="dense"
          id="title"
          label="Book Title"
          type="text"
          fullWidth
          variant="standard"
          value={book.title}
          onChange={handleChange("title")}
        />
        <TextField
          required
          margin="dense"
          id="author"
          label="Author"
          type="text"
          fullWidth
          variant="standard"
          value={book.author}
          onChange={handleChange("author")}
        />
        <TextField
          required
          margin="dense"
          id="pages"
          label="Pages"
          type="number"
          fullWidth
          variant="standard"
          value={book.pages}
          onChange={handleChange("pages")}
        />
        {book.read ? (
          <FormControlLabel
            control={<Checkbox onChange={handleChange("read")} checked />}
            label="Read?"
          />
        ) : (
          <FormControlLabel
            control={<Checkbox onChange={handleChange("read")} />}
            label="Read?"
          />
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={isEdit ? saveEdit : sendBook}>
          {isEdit ? "Save" : "Add Book"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
