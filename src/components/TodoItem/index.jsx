import React from "react";

const TodoItem = (props) => {
  // console.log("TodoItem props:", props);
  // const handerClick = () => {
  //   console.log("TodoItem clicked:", props.name);
  // };
  return (
    <div
      className="todo-item"
      onClick={() => props.handleTodoItemClick(props.id)}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <input
          type="checkbox"
          checked={props.isCompleted}
          onClick={(e) => {
            e.stopPropagation();
          }}
          onChange={() => {
            props.handleCompletedCheckboxChange(props.id);
          }}
        />
        <p className="todo-item-text">{props.name}</p>
      </div>
      {props.isImportant && <span>⭐</span>}
    </div>
  );
};

export default TodoItem;