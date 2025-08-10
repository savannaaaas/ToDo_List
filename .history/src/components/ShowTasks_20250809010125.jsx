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

export const ShowTasks = () => {
  const { tasks, setTasks } = useContext(TaskContext);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((task) => {
            return (
              <ul key={task.id}>
                <Task task={task} />
              </ul>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
