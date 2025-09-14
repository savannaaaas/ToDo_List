import { TaskContext } from "../context/TaskContext";
import { useState } from "react";
export const TaskProvider = ({ children }) => {
  const [filterTask, setFilterTask] = useState("all");

  return (
    <TaskContext.Provider value={{ filterTask, setFilterTask }}>
      {children}
    </TaskContext.Provider>
  );
};
