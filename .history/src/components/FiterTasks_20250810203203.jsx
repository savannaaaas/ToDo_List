import { Button } from "@mui/material";

import { TaskContext } from "../context/TaskContext";

export const FilterTask = () => {
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
