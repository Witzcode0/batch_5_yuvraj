import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTodos, addTodoAPI, toggleTodoAPI, deleteTodoAPI } from "./todoAPI";

// Thunks (async actions)
export const getTodos = createAsyncThunk("todos/getTodos", async () => {
  return await fetchTodos();
});

export const createTodo = createAsyncThunk("todos/createTodo", async (text) => {
  const newTodo = { text, completed: false };
  return await addTodoAPI(newTodo);
});

export const toggleTodo = createAsyncThunk("todos/toggleTodo", async (todo) => {
  return await toggleTodoAPI(todo);
});

export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (id) => {
  return await deleteTodoAPI(id);
});

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      // Fetch todos
      .addCase(getTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(getTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Add todo
      .addCase(createTodo.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })

      // Toggle todo
      .addCase(toggleTodo.fulfilled, (state, action) => {
        const index = state.items.findIndex((t) => t.id === action.payload.id);
        state.items[index] = action.payload;
      })

      // Delete todo
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.items = state.items.filter((t) => t.id !== action.payload);
      });
  },
});

export default todoSlice.reducer;

