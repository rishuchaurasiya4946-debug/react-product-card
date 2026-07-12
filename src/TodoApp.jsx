import { useState } from "react";

function TodoApp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div
      style={{
        width: "450px",
        margin: "40px auto",
        textAlign: "center",
      }}
    >
      <h1>To-Do App</h1>

      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{
          padding: "10px",
          width: "250px",
        }}
      />

      <button
        onClick={addTask}
        style={{
          marginLeft: "10px",
          padding: "10px 15px",
        }}
      >
        Add
      </button>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          marginTop: "20px",
        }}
      >
        {tasks.map((item, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              border: "1px solid #ccc",
              borderRadius: "5px",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            {item}

            <button
              onClick={() => deleteTask(index)}
              style={{
                backgroundColor: "red",
                color: "white",
                border: "none",
                padding: "6px 10px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;