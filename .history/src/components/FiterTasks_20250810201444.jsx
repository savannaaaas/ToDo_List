import { Button } from "@mui/material";
import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

export const FilterTask = () => {
    const {tasks, setTasks} = useContext(TaskContext)
//   const [filterTask, setFilterTask] = useState("all");
  const handleFilterTask = (filter) => {
    if (filter==="all"){
        return setTasks.
    }
    return tasks
  };
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "30px" }}>
      <Button
        variant="contained"
        sx={{ backgroundColor: "#f495d7ff" }}
        onClick={(e)=> handleFilterTask("all")}
      >
        All
      </Button>
      <Button variant="contained" sx={{ backgroundColor: "#f495d7ff" }}>
        Active
      </Button>
      <Button variant="contained" sx={{ backgroundColor: "#f495d7ff" }}>
        Completed
      </Button>
    </div>
  );
};
