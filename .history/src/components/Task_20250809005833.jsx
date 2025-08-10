import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
const paginationModel = { page: 0, pageSize: 5 };
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "title", headerName: "Title", width: 130 },
];
export const Task = ({ task }) => {
  const rows = [
    {
      id: task.id,
      title: task.title,
    },
  ];

  return (
    <TableRow
      key={row.name}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {row.name}
      </TableCell>
      <TableCell align="right">{row.calories}</TableCell>
      <TableCell align="right">{row.fat}</TableCell>
      <TableCell align="right">{row.carbs}</TableCell>
      <TableCell align="right">{row.protein}</TableCell>
    </TableRow>
  );
};
