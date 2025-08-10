import { Checkbox } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";

// const columns = [
//   { field: "id", headerName: "ID", width: 70 },
//   { field: "title", headerName: "Title", width: 130 },
// ];
export const Task = ({ task }) => {
  const [checked, setChecked]   = useState(false);
  const {}
  //   const rows = [
  //     {
  //       id: task.id,
  //       title: task.title,
  //     },
  //   ];
  const handleChangeChecked = () => {
    setChecked(()=>);
  };
  return (
    <TableRow
      key={task.id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell align="center">
        <Checkbox checked={checked} onChange={handleChangeChecked} />
      </TableCell>
      <TableCell align="center">{task.title}</TableCell>
      <TableCell align="center">{task.id}</TableCell>
    </TableRow>
  );
};
