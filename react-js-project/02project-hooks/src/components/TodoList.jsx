import React, { useState, useCallback } from "react";

// Task Component (Child)
const Task = React.memo(({ task, onDelete }) => {
  const handleDelete = () => {
    onDelete(task.id);  // Using onDelete callback to handle task deletion
  };

  return (
    <tr>
      <td>{task.id}</td>
      <td>{task.text}</td>
      <td>
        <button onClick={handleDelete}>Delete</button>  {/* Delete button */}
      </td>
    </tr>
  );
});

function TodoList() {
  const [tasks, setTasks] = useState([]);  // State to store tasks
  const [newTask, setNewTask] = useState("");  // State to store the new task input

  // Memoized delete function using useCallback to prevent unnecessary re-creations
  const deleteTask = useCallback((taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));  // Removes task from the list based on ID
  }, []);  // Empty dependency array ensures that deleteTask is only created once

  // Function to add new tasks
  const addTask = () => {
    if (newTask.trim() === "") return;  // Prevents adding empty tasks
    setTasks([...tasks, { id: Date.now(), text: newTask }]);  // Adds new task with a unique ID
    setNewTask("");  // Clears the input field after adding the task
  };

  return (
    <>
      <h2>Todo List</h2>

      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}  // Updates new task state as the user types
        placeholder="Enter new task"
      />
      <button onClick={addTask}>Add Task</button> 

      <table border={1}>
        <thead>
          <tr>
            <th scope="col">#ID</th>
            <th scope="col">Task</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <Task key={task.id} task={task} onDelete={deleteTask} />  // Passes deleteTask function as prop
            ))
          ) : (
            <tr>
              <td colSpan="3" style={{ textAlign: "center", fontWeight: "bold" }}>
                No tasks found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default TodoList;

