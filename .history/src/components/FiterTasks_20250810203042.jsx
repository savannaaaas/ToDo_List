import { Button } from "@mui/material";
import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

export const FilterTask = () => {
  const { tasks, setTasks } = useContext(TaskContext);
  const [filterTask, setFilterTask] = useState("all");
  const filterTasks = tasks.filter((task)=>{if (filter === "active") {
      return tasks.filter((task) => !task.isDone);
    }
    if (filter === "completed") {
      return tasks.filter((task) => task.isDone);
    }
    return tasks;})
    
  };
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
