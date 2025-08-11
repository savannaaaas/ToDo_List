import React from "react";
import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";
import { Button } from "@mui/material";

export const FilterTask = React.memo(({ setFilterTask }) => {
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
});
