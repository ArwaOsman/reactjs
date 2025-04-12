import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [desc, setDesc] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (!task.trim()) return;
    setTodos([...todos, { task, desc }]);
    setTask("");
    setDesc("");
  };

  const removeTask = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>New task:</h2>
      <input
        placeholder="Your task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <br />
      <textarea
        placeholder="Describe it"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <br />
      <button onClick={addTask}>Add</button>

      <h2>My todo list:</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <strong>{todo.task}</strong>: {todo.desc}{" "}
            <a href="#" onClick={() => removeTask(index)}>
              Done
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;