import React, { useState, useRef } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem/index.jsx";
import Sidebar from "./components/Sidebar/index.jsx";
import FilterPanel from "./components/FilterPanel/index.jsx";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, name: "Buy groceries", isImportant: true, isCompleted: false },
    { id: 2, name: "Walk the dog", isImportant: false, isCompleted: true },
    { id: 3, name: "Read a book", isImportant: false, isCompleted: false },
  ]);

  const [selectedFilter, setSelectedFilter] = useState("all");
  
  const [activeTodo, setActiveTodo] = useState();

  const [showSidebar, setShowSidebar] = useState(false);

  const activeTodoData = todoList.find((todo) => todo.id === activeTodo);

  const handleCompletedCheckboxChange = (id) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodoList(newTodoList);
  };

  // console.log(todoList);
  const toggleSidebar = (id) => {
    setShowSidebar(true);
    setActiveTodo(id);
  };

  const handleTodoItemChange = (newTodo) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === newTodo.id) {
        return newTodo;
      }
      return todo;
    });
    setTodoList(newTodoList);
  };

  const todos = todoList.map((todo, index) => (
    <TodoItem
      id={todo.id}
      key={todo.id}
      name={todo.name}
      isImportant={todo.isImportant}
      isCompleted={todo.isCompleted}
      handleCompletedCheckboxChange={handleCompletedCheckboxChange}
      handleTodoItemClick={toggleSidebar}
    />
  ));
  const inputRef = useRef();
  // console.log({ inputRef });
  return (
    <div className="container">
      <FilterPanel
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <div className="main-content">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search..."
          name="add-new-text"
          className="task-input"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const newTodo = {
                id: Date.now(),
                name: e.target.value,
                isImportant: false,
                isCompleted: false,
              };
              console.log("Adding new todo:", newTodo);
              setTodoList([...todoList, newTodo]);
              inputRef.current.value = "";
            }
          }}
        />
        <div>{todos}</div>
        {showSidebar && (
          <Sidebar
            TodoItem={activeTodoData}
            handleTodoItemChange={handleTodoItemChange}
            key={activeTodoData.id}
            setShow={setShowSidebar}
          />
        )}
      </div>
    </div>
  );
}

export default App;
