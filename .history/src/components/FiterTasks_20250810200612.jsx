import { Button } from "@mui/material";

export const FilterTask = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "30px" }}>
      <Button variant="contained" color="">
        All
      </Button>
      <Button variant="contained">Active</Button>
      <Button variant="contained">Completed</Button>
    </div>
  );
};
