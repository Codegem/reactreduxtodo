import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { updateTodo } from "../../features/todoSlice";
import { useDispatch } from "react-redux";

const EditModal = ({ open, handleClose, id, name }) => {
  const [newValue, setnewValue] = useState("");
  const dispatch = useDispatch();

  const handleSave = () => {
    if (newValue !== "" && newValue !== name) {
      dispatch(
        updateTodo({
          id,
          item: newValue,
          date: new Date(Date.now()).toLocaleString(),
        })
      );
      handleClose();
    } else {
      alert("Change value or press cancel :)");
    }
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth={true}
      >
        <DialogTitle id="form-dialog-title">Edit Todo.</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="text"
            label="Edit"
            type="text"
            defaultValue={name}
            onChange={(e) => setnewValue(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
          <Button onClick={handleClose} color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditModal;
