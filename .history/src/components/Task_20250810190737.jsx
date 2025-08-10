import { useState } from "react";
import { Checkbox } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import ClearIcon from "@mui/icons-material/Clear";
import { Button } from "@mui/material";
import ModeIcon from "@mui/icons-material/Mode";
export const Task = ({ task }) => {
  const [editTask, setEditTask] = useState(false);
  const { tasks, setTasks } = useContext(TaskContext);
  const handleChangeChecked = (id) => {
    setTasks((prevTask) =>
      prevTask.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };
  const handleDeleteTask = (id) => {
    setTasks((prevTask) => prevTask.filter((task) => task.id !== id));
  };
  const handleEditTask = (id) => {};
  return (
    <TableRow
      key={task.id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell align="center">
        <Checkbox
          checked={task.isDone ?? false}
          onChange={() => handleChangeChecked(task.id)}
        />
      </TableCell>
      <TableCell
        align="center"
        sx={{ textDecoration: task.isDone ? "line-through" : "none" }}
      >
        {editTask ? <Input /> : task.title}
      </TableCell>
      <TableCell align="center">
        <Button
          startIcon={<ModeIcon />}
          onClick={() => handleEditTask(task.id)}
        />
      </TableCell>
      <TableCell align="center">
        <Button
          startIcon={<ClearIcon />}
          onClick={() => handleDeleteTask(task.id)}
        />
      </TableCell>
    </TableRow>
  );
};
