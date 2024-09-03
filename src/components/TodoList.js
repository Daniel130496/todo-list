import React, { useState } from "react";
import TaskList from "./TaskList";
import "./TodoList.css";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  const [taskText, setTaskText] = useState("");

  const addTask = () => {
    if (taskText && taskText.trim()) {
      setTasks([
        ...tasks,
        { id: Date.now(), text: taskText, completed: false },
      ]);
      setTaskText("");
    }
  };

  const toggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTAsk = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="container">
      <div className="sec-container">
        <h1>To-Do-List</h1>
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Add a new task"
        />

        <button onClick={addTask}>Add Task</button>
        <TaskList
          tasks={tasks}
          toggleComplete={toggleComplete}
          deleteTask={deleteTAsk}
        />
      </div>
    </div>
  );
};

export default TodoList;
