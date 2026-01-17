import React, { useCallback, useState } from 'react'

// Task Component (Child)
const Task = React.memo(({ task, onDelete }) => {
  const handleDelete = () => {
    onDelete(task.id); 
  };

  return (
    <tr>
      <td>{task.id}</td>
      <td>{task.text}</td>
      <td>
        <button onClick={handleDelete}>Delete</button>  
      </td>
    </tr>
  );
});

// parent component
function Hook07useCallback() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const deleteTask = useCallback(
        (taskId) => {
            setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
        }, []
    )

    const addTask = () => {
        if ( newTask.trim === ""){
            return
        }else{
            console.log(newTask);
            setTasks([...tasks, {id:Date.now(), text:newTask}]);
            setNewTask("")
        }
    };
    return (
        <>
            <div>Hook07useCallback</div>
            <h1>Task list</h1>
            <input type="text" placeholder='Enter task detail' onChange={(e) => setNewTask(e.target.value)} value={newTask} />
            <button onClick={addTask}>Add Task</button>

            <table border={1}>
                <thead>
                    <th>#ID</th>
                    <th>Taks</th>
                    <th>Action</th>
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
    )
}

export default Hook07useCallback