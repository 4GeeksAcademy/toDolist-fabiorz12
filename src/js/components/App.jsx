import React, { useState } from "react";
import "../components/App.css";


function App() {
    const [task, setTask] = useState([
        { id: 1, text: "Buy some groceries" },
        { id: 2, text: "Go to the gym " },
        { id: 3, text: "Make the bed" },
    ]);

    const [newTask, setNewTask] = useState("");
    const addTask = () => {
        if (newTask.trim() !== "") {
            const newTaskObj = {
                id: Math.random(),
                text: newTask,
            };
            setTask([...task, newTaskObj]);
            setNewTask("");
        }
    }

    const deleteTask = (id) => {
        const updatedTasks = task.filter((task) => task.id !== id);
        setTask(updatedTasks);
    }

    return (
        <>
            <div className="todo-container">
                <h2>Task Manager</h2>
                <div className="todo-input">
                    <input 
                    type="text" 
                    placeholder="Add a new task" 
                    value={newTask} 
                    onChange={(e) => setNewTask(e.target.value)} 
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            addTask();
                        }
                    }} 
                    />
                    <button onClick={addTask} className="btn btn-primary">Add</button>
                </div>
                {task.length === 0 && <p>No hay tareas añadir tareas</p>}
                <ul>
                    {task.map((task) => (
                        <li key={task.id}>
                            <span>{task.text}</span>
                            <button onClick={() => deleteTask(task.id)} className="delete-btn btn btn-danger">X</button>
                        </li>

                    ))}
                </ul>

            </div>
        </>
    );


}

export default App;
