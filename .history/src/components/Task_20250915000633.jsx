import React from "react";
import { useState } from "react";
import { Checkbox } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import ClearIcon from "@mui/icons-material/Clear";
import { Button, Input } from "@mui/material";
import ModeIcon from "@mui/icons-material/Mode";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import { useDispatch, useSelector } from "react-redux";
import {
  changeChecked,
  deleteTask,
  editTasks,
  startEditTask,
} from "../redux/action";

export const Task = React.memo(({ task }) => {
  const dispatch = useDispatch();

  const { editTaskId, text } = useSelector();

  // const [editTask, setEditTask] = useState(false);

  // const [editTitleTask, setEditTitleTask] = useState(task.title);

  const handleChangeChecked = (id) => {
    dispatch(changeChecked(id));
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleNewTitleTask = (id, newTitle) => {
    dispatch(editTasks(id, newTitle));
  };

  const handleEditTask = (id) => {
    // if (task.id === id) {
    //   setEditTask(!editTask);
    // }
    if (editTaskId == id) {
      handleNewTitleTask(task.id, text);
    }
  };

  const handleStartEditTask = (id) => {
    dispatch(startEditTask(id));
  };

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
        {editTaskId === task.id ? (
          <Input
            value={text}
            onChange={(e) => handleEditTask(e.target.value)}
          />
        ) : (
          task.title
        )}
      </TableCell>
      <TableCell align="center">
        <Button
          startIcon={editTaskId === task.id ? <SaveAltIcon /> : <ModeIcon />}
          onClick={() => handleStartEditTask(task.id)}
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
});
