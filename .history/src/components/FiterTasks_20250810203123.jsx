import { Button } from "@mui/material";
import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

export const FilterTask = () => {
  const { tasks, setTasks } = useContext(TaskContext);
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
    <div style={{ display: "flex", flexDirection: "row", gap: "30px" }}>
      <Button
        variant="contained"
        sx={{ backgroundColor: "#f495d7ff" }}
        onClick={() => setFilterTask("all")}
      >
        All
      </Button>
      <Button
        variant="contained"
        sx={{ backgroundColor: "#f495d7ff" }}
        onClick={() => setFilterTask("active")}
      >
        Active
      </Button>
      <Button
        variant="contained"
        sx={{ backgroundColor: "#f495d7ff" }}
        onClick={() => setFilterTask("completed")}
      >
        Completed
      </Button>
    </div>
  );
};
