import React, { useState } from "react";
import "./index.css"; // Assuming you have some styles for the sidebar

const Sidebar = (props) => {
  const data = props.TodoItem || {};
  const [name, setName] = useState(data.name || "");
  const [isImportant, setIsImportant] = useState(data.isImportant || false);
  const [isCompleted, setIsCompleted] = useState(data.isCompleted || false);
  console.log(data);
  const hadleSave = () => {
    const newTodo = {
      ...data,
      name,
      isImportant,
      isCompleted,
    };
    props.handleTodoItemChange(newTodo);
    props.setShow(false);
  };
  return (
    <div className="sidebar">
      <form className="sb-form">
        <div className="sb-form-field">
          <label htmlFor="sb-name">Todo name</label>
          <input
            id="sb-name"
            type="text"
            placeholder="Enter todo name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="sb-form-field">
          <label htmlFor="sb-important">Important</label>
          <input
            id="sb-important"
            type="checkbox"
            checked={isImportant}
            onChange={() => {
              setIsImportant(!isImportant);
            }}
          />
        </div>
        <div className="sb-form-field">
          <label htmlFor="sb-completed">Completed</label>
          <input
            id="sb-completed"
            type="checkbox"
            checked={isCompleted}
            onChange={() => {
              setIsCompleted(!isCompleted);
            }}
          />
        </div>
      </form>
      <div className="sb-footer">
        <button onClick={() => props.setShow(false)}>Cancel</button>
        <button onClick={hadleSave}>Save</button>
      </div>
    </div>
  );
};

export default Sidebar;
