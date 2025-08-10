import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

// const columns = [
//   { field: "id", headerName: "ID", width: 70 },
//   { field: "title", headerName: "Title", width: 130 },
// ];
export const Task = ({ task }) => {
  //   const rows = [
  //     {
  //       id: task.id,
  //       title: task.title,
  //     },
  //   ];

  return (
    <TableRow
      key={task.id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell align="right">{task.title}</TableCell>
      <TableCell align="right">{task.id}</TableCell>
      <TableCell align="right">{task.isDone}</TableCell>
    </TableRow>
  );
};
