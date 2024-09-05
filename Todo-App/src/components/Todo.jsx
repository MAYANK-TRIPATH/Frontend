import React, { useState } from "react";

const TODO = () => {
const [tasks, setTasks] = useState([]);
const [newTask, setNewTask] = useState("");

const addTask = () => {
    if(newTask.trim()) {
        setTasks([...tasks, newTask ]);
        setNewTask("");
    }
}
const removeTask = (index) => {
    setTasks(tasks.filter((_,i) => i!== index));
};

return (
    <div>
        <h1>TO-DO-2</h1>
        <input type="text" value={newTask} 
        onChange={(e) => setNewTask(e.target.value)}>
        </input>
        <button onClick={addTask}>Add</button>
        <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>

        
    </div>
)

}

export default TODO;