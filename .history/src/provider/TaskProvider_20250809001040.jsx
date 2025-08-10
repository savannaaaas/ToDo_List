import { TaskContext } from "../context/TaskContext";
import { useState } from "react";
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    localStorage.getItem("tasks")
      ? 
      : [{ id: 1, title: "Anna", isDone: false }];
  });
  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
