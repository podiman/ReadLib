import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "../Button/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField/TextField";
import { BookInfo } from "../../actions/BookActionTypes";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import "./styles.scss";

interface Props {
  bookId: string;
  bookInfo?: BookInfo;
}

const MyRatingDialog: React.FC<Props> = ({ bookId, bookInfo }) => {
  const [open, setOpen] = useState(false);
  const imgLink = `https://books.google.com/books/content/images/frontcover/${bookId}?fife=w400-h600`;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div onClick={handleClickOpen}>
        <Button text="Open form dialog" />
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth="sm"
        fullWidth={true}
      >
        <DialogTitle id="form-dialog-title" className="form-body">
          <div className="form-header">
            <img className="bookcover" src={imgLink} alt="bookImage" />
            <div className="form-title">
              <h1>{bookInfo?.title}</h1>
              <h1>{bookInfo?.subtitle}</h1>
              <div className="authors">
                <span>by&nbsp;</span>
                {bookInfo?.authors.map((author) => {
                  return (
                    <p>
                      {author}
                      <span>,&nbsp;</span>
                    </p>
                  );
                })}
              </div>
            </div>
            <IconButton
              className="close-button"
              aria-label="close"
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent dividers>
          <form noValidate>
            <TextField
              margin="dense"
              id="name"
              className="user-review"
              label="What's your review about this book?"
              type="email"
              fullWidth
              multiline
              rows={7}
              color="primary"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <div onClick={handleClose}>
            <Button text="Cancel" />
          </div>
          <div onClick={handleClose}>
            <Button text="Subscribe" />
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MyRatingDialog;
