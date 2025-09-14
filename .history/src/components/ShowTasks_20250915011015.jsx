import { useMemo } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { deleteTasks } from "../redux/action";

export const ShowTasks = () => {
  const dispatch = useDispatch();

  const { tasks, filterTask } = useSelector((store) => store.tasks);

  const handleDeleteAllTask = () => {
    dispatch(deleteTasks());
  };

  const filterTasks = useMemo(
    () =>
      tasks.filter((task) => {
        if (filterTask === "active") {
          return !task.isDone;
        }
        if (filterTask === "completed") {
          return task.isDone;
        }
        console.log(task);
        return task;
      }),
    [tasks, filterTask]
  );

  const uncompletedTask = tasks.filter((task) => !task.isDone).length;

  return (
    <div>
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
            {filterTasks
              .slice()
              .sort(
                (a, b) =>
                  new Date(b.date).getTime() - new Date(a.date).getTime()
              )
              .map((task) => {
                return <Task task={task} key={task.id} />;
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          margin: "50px",
        }}
      >
        <Typography sx={{ color: "white" }}>
          Number of uncompleted tasks: {uncompletedTask}
        </Typography>
        <Button
          variant="contained"
          startIcon={<DeleteForeverIcon />}
          sx={{ backgroundColor: "#ffbeec" }}
          onClick={handleDeleteAllTask}
        >
          Delete All completed task
        </Button>
      </div>
    </div>
  );
};
