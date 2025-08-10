import { Button } from "@mui/material";

import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

export const FilterTask = () => {
  const { setFilterTask } = useContext(TaskContext);
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
