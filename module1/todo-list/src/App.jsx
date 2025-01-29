import app from './App.jsx';
import { useState } from "react";

function App() {
    const [tasks, setTasks] = useState([
        { id: 0, task: "Eat breakfast", completed: true },
        { id: 1, task: "Brush teeth", completed: false },
        { id: 2, task: "Shower", completed: false }
    ]);

    const toggleTask = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    function deleteForm(arr, id) {
        return arr.filter(item => item.id !== id);
    }

    const handleDelete = (id) => {
        setTasks(deleteForm(tasks, id));
    }

    return (
        <>
            <header className="main-header">
                <h1>Todo list</h1>
            </header>
            <main>
                <form action=""
                      onSubmit={(e) => {
                          e.preventDefault();
                          const inputValue = document.querySelector('#task-input').value;
                          setTasks([...tasks, {
                              id:'',
                              task: inputValue,
                              completed: false
                          }])
                      }}>

                    <input type="text" id="task-input" name="task-input"/>
                    <button type="submit">Submit</button>
                </form>
                <ul className="list">
                    {tasks.map((item) => (
                        <li key={item.id}>
                            <span>{item.task}</span>
                            <input
                                type="checkbox"
                                checked={item.completed}
                                onChange={() => toggleTask(item.id)}
                            />
                            <button onClick={() => handleDelete(item.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </main>
        </>
    );
}

export default App;
