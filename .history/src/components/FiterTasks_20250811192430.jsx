import React from "react";
import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";
import { Button } from "@mui/material";

export const FilterTask = React.memo(() => {
  const { filterTask, setFilterTask } = useContext(TaskContext);

  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "30px" }}>
      <Button
        variant={filterTask === "all" ? "contained" : "outlined"}
        sx={{ backgroundColor: "#f495d7ff", color: "white" }}
        onClick={() => setFilterTask("all")}
      >
        All
      </Button>
      <Button
        variant={filterTask === "all" ? "contained" : "outlined"}
        sx={{ backgroundColor: "#f495d7ff", color: "white" }}
        onClick={() => setFilterTask("active")}
      >
        Active
      </Button>
      <Button
        variant={filterTask === "all" ? "contained" : "outlined"}
        sx={{
          backgroundColor: filterTask === "all" ? "#f495d7ff" : "grey",
          color: "white",
        }}
        onClick={() => setFilterTask("completed")}
      >
        Completed
      </Button>
    </div>
  );
});
