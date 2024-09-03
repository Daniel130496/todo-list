import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, toggleComplete, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTAsk={deleteTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
