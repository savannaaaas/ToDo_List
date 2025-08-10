import { Button } from "@mui/material";

export const FilterTask = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "30px" }}>
      <Button variant="contained" sx={{ backgroundColor: "#f495d7ff" }}>
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
