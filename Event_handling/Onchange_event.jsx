import React from 'react'
import { useState } from 'react';


function Onchange_event() {
    const [tasks, setTasks] = useState([
        { id: 1, text: 'Task 1', done: false },
        { id: 2, text: 'Task 2', done: false },
        { id: 3, text: 'Task 3', done: false },
    ]);

    const handleCheckboxChange = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, done: !task.done } : task
        ));
    };

    return (
        <div className="App mt-5">
            <h1>Event - handling</h1><br />
            <h1>Todo List</h1>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <input
                            type="checkbox"
                            checked={task.done}
                            onChange={() => handleCheckboxChange(task.id)}
                        />
                        {task.text}
                    </li>
                ))}
            </ul>
            <div>
                <h2>Status</h2>
                <p>Done: {tasks.filter(task => task.done).length}</p>
                <p>Remaining: {tasks.filter(task => !task.done).length}</p>
            </div>
        </div>
    )
}

export default Onchange_event
