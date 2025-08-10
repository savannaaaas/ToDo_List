import { Checkbox } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

// const columns = [
//   { field: "id", headerName: "ID", width: 70 },
//   { field: "title", headerName: "Title", width: 130 },
// ];
export const Task = ({ task }) => {
  const { tasks, setTasks } = useContext(TaskContext);
  //   const rows = [
  //     {
  //       id: task.id,
  //       title: task.title,
  //     },
  //   ];
  const handleChangeChecked = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  return (
    <TableRow
      key={task.id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell align="center">
        <Checkbox
          checked={task.isDone}
          onChange={() => handleChangeChecked(task.id)}
        />
      </TableCell>
      <TableCell
        align="center"
        sx={{ textDecoration: task.isDone ? "line-through" : "none" }}
      >
        {task.title}
      </TableCell>
      <TableCell align="center">{task.id}</TableCell>
    </TableRow>
  );
};
