import React from "react";
import PropTypes from "prop-types";
import "./index.css";
import "../../App.css"; // Importing App.css to apply styles
const FILTER_ITEMS = [
  {
    id: "all",
    label: "All",
    icon: "../../../public/inbox.png",
  },
  {
    id: "important",
    label: "Important",
    icon: "../../../public/flag.png",
  },
  {
    id: "completed",
    label: "Completed",
    icon: "../../../public/check.png",
  },
  {
    id: "deleted",
    label: "Deleted",
    icon: "../../../public/delete.png",
  },
];
const FilterPanel = ({ selectedFilter, setSelectedFilter, todoList }) => {
  const countByFiltertType = todoList.reduce(
    (acc, cur) => {
      let newAcc = { ...acc };
      if (cur.isDeleted) {
        return { ...newAcc, deleted: newAcc.deleted + 1 };
      }
      if (cur.isCompleted) {
        return { ...newAcc, completed: newAcc.completed + 1 };
      }
      if (cur.isImportant) {
        return { ...newAcc, important: newAcc.important + 1 };
      }
      return newAcc;
    },
    { all: todoList.length, important: 0, completed: 0, deleted: 0 }
  );
  console.log(countByFiltertType);

  return (
    <div className="filter-pannel">
      <input
        name="search-todo"
        type="text"
        placeholder="Search todo..."
        className="search-todo"
      />
      <div className="filter-container">
        {FILTER_ITEMS.map((item) => (
          <div
            key={item.id}
            className={`filter-item ${
              selectedFilter === item.id ? "selected" : ""
            }`}
            onClick={() => setSelectedFilter(item.id)}
          >
            <div className="filter-name">
              <img src={item.icon} alt={item.label} />
              <div>{item.label}</div>
            </div>
            <p>{countByFiltertType[item.id]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

FilterPanel.propTypes = {
  selectedFilter: PropTypes.string,
  setSelectedFilter: PropTypes.func,
  todoList: PropTypes.array,
};

export default FilterPanel;
