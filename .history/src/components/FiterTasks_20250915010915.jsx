import React from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { filterNewTasks } from "../redux/action";

export const FilterTask = React.memo(() => {
  const { filterTask } = useSelector((store) => store.tasks);
  const dispatch = useDispatch();

  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "30px" }}>
      <Button
        variant="contained"
        sx={{
          backgroundColor: filterTask === "all" ? "#f495d7ff" : "pink",
          color: "white",
        }}
        onClick={() => dispatch(filterNewTasks("all"))}
      >
        All
      </Button>
      <Button
        variant="contained"
        sx={{
          backgroundColor: filterTask === "active" ? "#f495d7ff" : "pink",
          color: "white",
        }}
        onClick={() => dispatch(filterNewTasks("active"))}
      >
        Active
      </Button>
      <Button
        variant="contained"
        sx={{
          backgroundColor: filterTask === "completed" ? "#f495d7ff" : "pink",
          color: "white",
        }}
        onClick={() => dispatch(filterNewTasks("completed"))}
      >
        Completed
      </Button>
    </div>
  );
});
