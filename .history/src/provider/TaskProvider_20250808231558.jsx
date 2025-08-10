import { TaskContext } from "../context/TaskContext";
import { useState } from "react";
export const TaskProvider = () => {
  const [tasks, setTasks] = useState(getTask);
  //   useEffect(() => {
  //     document.documentElement.dataset.theme = theme;
  //     localStorage.setItem("theme", theme);
  //   }, [theme]);
  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
