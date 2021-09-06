import React, { useState, useRef } from "react";
import Button from "@material-ui/core/Button";
import "./Input.css";

import { saveTodo } from "../../features/todoSlice";
import { useDispatch } from "react-redux";
import PopOver from "../PopOver/PopOver";

const Input = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const buttonRef = useRef();

  const toggleOpen = () => {
    setOpen(!open);
  };

  const addTodo = () => {
    if (input.trim() !== "") {
      dispatch(
        saveTodo({
          item: input,
          done: false,
          date: new Date(Date.now()).toLocaleString(),
          finishDate: "",
          id: Date.now(),
        })
      );
      setInput("");
    } else {
      setOpen(true);
    }
  };

  return (
    <div className="input" ref={buttonRef}>
      <input
        type="text"
        placeholder="Whatcha Doin..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={addTodo} >
        Add!
      </Button>
      {open && (
        <PopOver
          open={open}
          toggleOpen={toggleOpen}
          inputEl={buttonRef.current}
        />
      )}
    </div>
  );
};

export default Input;
