import { TaskContext } from "../context/TaskContext";
import { useState, useEffect } from "react";
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved
      ? JSON.parse(saved)
      : [{ id: 1, title: "Anna", isDone: false }];
  });
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
