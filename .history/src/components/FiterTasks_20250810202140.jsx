import { Button } from "@mui/material";
import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

export const FilterTask = () => {
  const { tasks, setTasks } = useContext(TaskContext);
  //   const [filterTask, setFilterTask] = useState("all");
  const handleFilterTask = (filter) => {
    if (filter === "active") {
      return tasks.filter((task) => !task.isDone);
    }
    if (filter === "completed") {
      return tasks.filter((task) => task.isDone);
    }
    return tasks;
  };
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "30px" }}>
      <Button
        variant="contained"
        sx={{ backgroundColor: "#f495d7ff" }}
        onClick={()=> handleFilterTask("all")}
      >
        All
      </Button>
      <Button
        variant="contained"
        sx={{ backgroundColor: "#f495d7ff" }}
        onClick={}
      >
        Active
      </Button>
      <Button variant="contained" sx={{ backgroundColor: "#f495d7ff" }}>
        Completed
      </Button>
    </div>
  );
};
