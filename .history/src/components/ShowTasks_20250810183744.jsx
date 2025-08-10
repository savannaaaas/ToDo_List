import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { Task } from "./Task";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Checkbox } from "@mui/material";

export const ShowTasks = () => {
  const { tasks, setTasks } = useContext(TaskContext);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">iSDONE</TableCell>
            <TableCell align="center">TITLE</TableCell>

            <TableCell align="center">EDIT</TableCell>
            <TableCell align="center">DELETE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((task) => {
            return <Task task={task} key={task.id} />;
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
