import { Button } from "@mui/material";
import { useState } from "react";

export const FilterTask = () => {
//   const [filterTask, setFilterTask] = useState("all");
  const handleFilterTask = () => {
    if()
  };
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "30px" }}>
      <Button
        variant="contained"
        sx={{ backgroundColor: "#f495d7ff" }}
        onClick={(e)=>handleFilterTask("all")}
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
