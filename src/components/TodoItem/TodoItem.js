import React, { useState, useRef } from "react";
import "./TodoItem.css";
import { useDispatch } from "react-redux";
import { setCheck, deleteTodo } from "../../features/todoSlice";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";
import ShowDate from "../Date/ShowDate";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import EditModal from "../Edit/EditModal";

const TodoItem = ({ name, done, id, date, finish }) => {
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  const dateRef = useRef();

  const openHandler = () => {
    setOpen(!open);
  };

  const dispatch = useDispatch();

  const handleCheck = (e) => {
    dispatch(setCheck(id));
  };

  const deleteHandler = () => {
    dispatch(deleteTodo(id));
  };

  const editHandler = () => {
    setEditOpen(!editOpen);
  };

  return (
    <div className="todoItem">
      <div className="isDone" onClick={handleCheck}>
        {done ? (
          <DoneIcon className="icon icon-done" />
        ) : (
          <ClearIcon className="icon icon-notDone" />
        )}
      </div>
      <p className={done ? "todoItem--done" : ""}>
        {name.length < 35 ? name : `${name.slice(0, 30)}...`}
      </p>
      <EditIcon className="icon icon-edit" onClick={editHandler} />
      <DeleteIcon className="icon icon-delete" onClick={deleteHandler} />
      <MoreVertIcon
        className="icon icon-menu"
        onClick={openHandler}
        ref={dateRef}
      />
      {open ? (
        <ShowDate
          open={open}
          date={date}
          done={done}
          openHandler={openHandler}
          anchorEl={dateRef.current}
          finish={finish}
        />
      ) : null}
      {editOpen ? (
        <EditModal
          open={editOpen}
          handleClose={editHandler}
          id={id}
          name={name}
        />
      ) : null}
    </div>
  );
};

export default TodoItem;
