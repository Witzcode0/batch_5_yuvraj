import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos, createTodo, toggleTodo, deleteTodo } from "./features/todos/todoSlice";

function App() {
  const dispatch = useDispatch();
  const { items: todos, loading, error } = useSelector((state) => state.todos);
  const [task, setTask] = useState("");

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  const handleAdd = () => {
    if (task.trim()) {
      dispatch(createTodo(task));
      setTask("");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>📝 Redux Thunk Todo App</h1>

      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={handleAdd}>Add</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => dispatch(toggleTodo(todo))}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

