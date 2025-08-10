import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { Task } from "./Task";
export const ShowTasks = () => {
  const { tasks, setTasks } = useContext(TaskContext);
  return (
    <>
      {tasks.map((task) => {
        return (
          <ul key={task.id}>
            <Task />
          </ul>
        );
      })}
    </>
  );
};
