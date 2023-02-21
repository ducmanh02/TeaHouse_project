import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  //Get from local storage
  const  storageTasks = localStorage.getItem("tasks");
  console.log(JSON.parse(storageTasks));

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState((() => {
    const storageTasks =JSON.parse(localStorage.getItem("tasks"));
    return storageTasks? storageTasks : [];
  }));

  const handleSubmit = () => {
    setTasks(prev => {
      const newTasks = [...prev,task]

      //Save to local storage
      const jsonTasks = JSON.stringify(newTasks);
      localStorage.setItem("tasks",jsonTasks);

      return newTasks;

    });
    setTask("");
  };

  return (
    <div className="App">
      <div className="add_task">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleSubmit}>ADD TASK</button>
      </div>
      <ul className="list_tasks">
        {tasks.map((task, id) => (
         
            <li key={id}>{task.name}</li>
 
        ))}
      </ul>
    </div>
  );
}

export default App;
