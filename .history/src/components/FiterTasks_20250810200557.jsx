import { Button } from "@mui/material";

export const FilterTask = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "30px" }}>
      <Button variant="contained">All</Button>
      <Button variant="contained">Active</Button>
      <Button>Completed</Button>
    </div>
  );
};
