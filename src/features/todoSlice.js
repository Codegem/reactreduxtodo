import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [
    {
      item: "Write mail to Johnssssssssssssssssss Johnssdasdasdasdasdadasssdadasda",
      done: false,
      date: new Date(Date.now()).toLocaleString(),
      finishDate: "",
      id: Date.now(),
    },
    {
      item: "Take out the trash",
      done: false,
      date: new Date(Date.now()).toLocaleString(),
      finishDate: "",
      id: Date.now() + 666,
    },
    {
      item: "Buy milk.",
      done: false,
      date: new Date(Date.now()).toLocaleString(),
      finishDate: "",
      id: Date.now() + 555,
    },
    {
      item: "Exercise",
      done: false,
      date: new Date(Date.now()).toLocaleString(),
      finishDate: "",
      id: Date.now() + 334,
    },
    {
      item: "Sleep on the couch",
      done: false,
      date: new Date(Date.now()).toLocaleString(),
      finishDate: "",
      id: Date.now() + 112,
    },
    {
      item: "Play with Hamster",
      done: false,
      date: new Date(Date.now()).toLocaleString(),
      finishDate: "",
      id: Date.now() + 223,
    },
    {
      item: "Watch movie.",
      done: false,
      date: new Date(Date.now()).toLocaleString(),
      finishDate: "",
      id: Date.now() + 123,
    },
    {
      item: "Show a magic trick",
      done: false,
      date: new Date(Date.now()).toLocaleString(),
      finishDate: "",
      id: Date.now() + 822,
    },
    {
      item: "Do completely nothing.",
      done: true,
      date: new Date(Date.now()).toLocaleString(),
      finishDate: "",
      id: Date.now() + 402,
    },
    {
      item: "Act Normal",
      done: false,
      date: new Date(Date.now()).toLocaleString(),
      finishDate: "",
      id: Date.now() + 204,
    },
    {
      item: "Be normal?",
      done: false,
      date: new Date(Date.now()).toLocaleString(),
      finishDate: "",
      id: Date.now() + 332,
    },
  ],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    setCheck: (state, action) => {
      state.todoList.map((item) => {
        if (action.payload === item.id) {
          if (item.done === true) {
            item.done = false;
            item.finishDate = "";
          } else {
            item.done = true;
            item.finishDate = new Date(Date.now()).toLocaleString();
          }
        }
      });
    },
    updateTodo: (state = initialState, action) => {
      state.todoList.map((item) => {
        if (action.payload.id === item.id) {
          item.item = action.payload.item;
          item.date = action.payload.date;
        }
      });
    },
    deleteTodo: (state = initialState, action) => {
      return {
        todoList: [
          ...state.todoList.filter((comment) => comment.id !== action.payload),
        ],
      };
    },
  },
});

export const { saveTodo, setCheck, updateTodo, deleteTodo } = todoSlice.actions;

export const selectTodoList = (state) => state.todos.todoList;

export default todoSlice.reducer;
