import React, { useState } from "react";
import "./Todo.css";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const Todo = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState(["Delete This"]);

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleSubmit() {
    if (text === "") return;
    setTodos([...todos, text]);
    setText("");
  }

  const handleDelete = (index) => {
    const term = [...todos];
    term.splice(index, 1);
    setTodos(term);
  };

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
        <div className="row" key={index}>
          <h1 className="row__text">{todo}</h1>
          <IconButton
            aria-label="delete"
            className="row__delete"
            onClick={() => handleDelete(index)}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      ))}
    </div>
  );
};

export default Todo;
