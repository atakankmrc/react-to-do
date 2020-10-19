import React, { useState } from "react";
import "./Todo.css";
import TodoRow from "./TodoRow";

const Todo = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleSubmit() {
    if (text === "") return;
    setTodos([...todos, text]);
    setText("");
  }

  return (
    <div className="todo">
      <h1 className="todo__title">To Do App</h1>
      <div className="todo__form">
        <input
          className="todo__input"
          placeholder="Enter ToDo"
          type="text"
          onChange={handleChange}
          value={text}
        />
        <button className="todo__submit" onClick={handleSubmit}>
          +
        </button>
      </div>

      {todos.map((todo, index) => (
        <TodoRow text={todo} key={index} />
      ))}
    </div>
  );
};

export default Todo;
