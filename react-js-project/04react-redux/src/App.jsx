import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "./features/todoSlice";
import "./App.css";

function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [task, setTask] = useState("");

  const handleAdd = () => {
    if (task.trim()) {
      dispatch(addTodo(task));
      setTask("");
    }
  };

  return (
    <div className="app-container">
      <div className="todo-card">
        <h1 className="title">📝 Redux Todo</h1>

        <div className="input-group">
          <input
            type="text"
            placeholder="Enter a new task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={handleAdd}>Add</button>
        </div>

        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id} className="todo-item">
              <span
                onClick={() => dispatch(toggleTodo(todo.id))}
                className={todo.completed ? "completed" : ""}
              >
                {todo.text}
              </span>
              <button
                className="delete-btn"
                onClick={() => dispatch(deleteTodo(todo.id))}
              >
                ✖
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
