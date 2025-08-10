import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export const ShowTasks = () => {
  const { tasks, setTasks } = useContext(TaskContext);
  return (
    <>
      {tasks.map((item) => {
        return <ul></ul>;
      })}
    </>
  );
};
