import { TaskContext } from "../context/TaskContext";
import { useState } from "react";
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved
      ? JSON.parse(saved)
      : [{ id: 1, title: "Anna", isDone: false }];
  });

  return (
    <TaskContext.Provider
      value={{ tasks, setTasks, filterTask, setFilterTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};
