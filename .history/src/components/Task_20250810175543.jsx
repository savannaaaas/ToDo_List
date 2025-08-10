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
  const [checked, setChecked] = useState(task.isDone);

  //   const rows = [
  //     {
  //       id: task.id,
  //       title: task.title,
  //     },
  //   ];
  const handleChangeChecked = (id) => {
    setChecked(task.id === id ? !checked : checked);
  };
  return (
    <TableRow
      key={task.id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell align="center">
        <Checkbox
          checked={checked}
          onChange={() => handleChangeChecked(task.id)}
        />
      </TableCell>
      <TableCell
        align="center"
        sx={{ textDecoration: checked ? "line-through" : "none" }}
      >
        {task.title}
      </TableCell>
      <TableCell align="center">{task.id}</TableCell>
    </TableRow>
  );
};
