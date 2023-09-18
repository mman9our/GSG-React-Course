import "./App.css";
import React from "react";

const App = () => {
  return (
    <div className="todo-container">
      <h1>
        <span className="second-title">Todo List App</span>
      </h1>
      <form>
        <input
          className="add-task"
          type="text"
          placeholder="Add new task ..."
        />
        <button type="submit" className="add-button">
          Add
        </button>
      </form>

      <div className="todo">
        <div className="todo-text">
          <input className="checkbox" type="checkbox" id="isCompleted" />
        </div>
        <div>Learn useEffect Hook</div>

        <div className="todo-actions">
          <button className="submit-edits">Edit</button>
          <button className="submit-edits">Delete</button>
        </div>
      </div>
    </div>
  );
};
export default App;
