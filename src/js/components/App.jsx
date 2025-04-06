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

    return (
        <>
            <div className="todo-container">
                <h2>Task Manager</h2>
                <div className="todo-input">
                    <input type="text" placeholder="Add a new task" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
                    <button onClick={addTask} className="btn btn-primary">Add</button>
                </div>
                <ul>
                    {task.map((task) => (
                        <li key={task.id}>
                            <span>{task.text}</span>
                        </li>

                    ))}
                </ul>

            </div>
        </>
    );


}

export default App;
