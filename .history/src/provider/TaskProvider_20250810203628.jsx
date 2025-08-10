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
  const filterTasks = tasks.filter((task) => {
    if (filterTask === "active") {
      return !task.isDone;
    }
    if (filterTask === "completed") {
      return task.isDone;
    }
    return task;
  });
  return (
    <TaskContext.Provider
      value={{ tasks, setTasks, filterTask, setFilterTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};
