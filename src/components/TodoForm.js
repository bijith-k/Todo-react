import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (/^\s*\S+.*/.test(value)) {
      addTodo(value);
    }

    setValue("");
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        className="todo-input"
        placeholder="Enter the tasks"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        ADD
      </button>
    </form>
  );
};

export default TodoForm;
