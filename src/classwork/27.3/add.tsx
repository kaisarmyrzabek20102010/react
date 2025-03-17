import { useState } from "react";
export default function App() {
  const [tasks, setTasks] = useState([
    { text: "clean a room", completed: false },
    { text: "go to school", completed: false },
    { text: "do exercise", completed: false },
    { text: "Homework", completed: false },
    { text: "read book", completed: false },
  ]);

  const [filter, setFilter] = useState("all");

  const handleRemove = (index) => {
    setTasks(tasks.filter((num, i) => i !== index));
  };

  const handleToggleComplete = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true;
  });

  return (
    <div>
      <div>
        <button onClick={() => setFilter("all")}>Барлығы</button>
        <button onClick={() => setFilter("completed")}>Аяқталғандар</button>
        <button onClick={() => setFilter("incomplete")}>Аяқталмағандар</button>
      </div>
      <ul>
        {filteredTasks.map((task, index) => (
          <li
            key={index}
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.text}
            <button onClick={() => handleToggleComplete(index)}>
              {task.completed ? "Қайтару" : "Аяқтау"}
            </button>
            <button onClick={() => handleRemove(index)}>Өшіру</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
