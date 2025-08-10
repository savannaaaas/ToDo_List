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
import { Button, Checkbox, Typography } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export const ShowTasks = () => {
  const { tasks, setTasks } = useContext(TaskContext);
  const handleDeleteAllTask = () => {
    setTasks((prevTask) => prevTask.filter((task) => !task.isDone));
  };
  const uncompletedTask = tasks.filter((task) => !task.isDone).length;
  return (
    <>
      {" "}
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
      <Typography>Number of uncompleted tasks: {uncompletedTask}</Typography>
      <Button
        variant="contained"
        startIcon={<DeleteForeverIcon />}
        sx={{ backgroundColor: "#ffbeec" }}
        onClick={handleDeleteAllTask}
      >
        Delete All completed task
      </Button>
    </>
  );
};
