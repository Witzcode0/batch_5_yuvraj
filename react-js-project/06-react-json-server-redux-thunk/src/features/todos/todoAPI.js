import axios from "axios";

const API_URL = "http://localhost:5000/todos";

// GET all todos
export const fetchTodos = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// ADD new todo
export const addTodoAPI = async (newTodo) => {
  const response = await axios.post(API_URL, newTodo);
  return response.data;
};

// TOGGLE todo completed
export const toggleTodoAPI = async (todo) => {
  const response = await axios.patch(`${API_URL}/${todo.id}`, {
    completed: !todo.completed,
  });
  return response.data;
};

// DELETE todo
export const deleteTodoAPI = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
};

