import React, { useState } from "react";
import "./App.css";
import Input from "./components/input/Input";
import TodoItem from "./components/TodoItem/TodoItem";

import { useSelector } from "react-redux";
import { selectTodoList } from "./features/todoSlice";
import PaginationComponent from "./components/Pagination/PaginationComponent";
import usePagination from "./components/Pagination/pagination";

function App() {
  const todoList = useSelector(selectTodoList);
  const obj = [...todoList];
  const sortArray = obj.sort((a, b) => (a.id < b.id ? 1 : -1));
  const [page, setPage] = useState(1);
  const amountPerPage = 8;
  const count = Math.ceil(todoList.length / amountPerPage);
  const _DATA = usePagination(sortArray, amountPerPage);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <div className="App">
      <div className="app_container">
        <div className="app_todoContainer">
          {todoList.length !== 0 ? (
            _DATA
              .currentData()
              .map((todo, key) => (
                <TodoItem
                  name={todo.item}
                  done={todo.done}
                  id={todo.id}
                  date={todo.date}
                  finish={todo.finishDate}
                  key={key}
                />
              ))
          ) : (
            <p className="empty">Sorry but list is empty...</p>
          )}
          {todoList.length > amountPerPage && (
            <PaginationComponent
              page={page}
              count={count}
              handleChange={handleChange}
            />
          )}
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
