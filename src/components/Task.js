import React from "react";

const Task = ({ task, toggleComplete, deleteTAsk }) => {
  return (
    <li className={task.completed ? "completed" : ""}>
      <span onClick={() => toggleComplete(task.id)}>{task.text}</span>
      <button onClick={() => deleteTAsk(task.id)}>Delete</button>
    </li>
  );
};

export default Task;
