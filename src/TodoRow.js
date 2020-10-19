import React from "react";
import "./TodoRow.css";

const TodoRow = ({ text }) => {
  return (
    <div className="row">
      <h1 className="row__text">{text}</h1>
    </div>
  );
};

export default TodoRow;
