import { TaskContext } from "../context/TaskContext";
import { useState } from "react";
export const TaskProvider = ({ children }) => {
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved
      ? JSON.parse(saved)
      : [{ id: 1, title: "Anna", isDone: false }];
  });
  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
