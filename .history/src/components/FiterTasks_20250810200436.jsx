import { Button } from "@mui/material";

export const FilterTask = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "30px" }}>
      <Button>All</Button>
      <Button>Completed</Button>
      <Button>Active</Button>
    </div>
  );
};
