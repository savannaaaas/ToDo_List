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
  const [filterTask, setFilterTask] = useState("all");

  return (
    <TaskContext.Provider
      value={{ tasks, setTasks, filterTask, setFilterTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};
