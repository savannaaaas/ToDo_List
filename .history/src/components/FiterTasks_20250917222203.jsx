import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterNewTasks } from "../redux/slices/tasksSlice";
import { Button } from "@mui/material";

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
