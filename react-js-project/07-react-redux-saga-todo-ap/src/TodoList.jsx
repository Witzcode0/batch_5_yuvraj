import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodosRequest } from "./todoActions";

function TodoList() {
  const dispatch = useDispatch();
  const { todos, loading } = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchTodosRequest());
  }, [dispatch]);

  if (loading) return <h2>Loading...</h2>;

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.title} - {todo.completed ? "✅" : "❌"}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
