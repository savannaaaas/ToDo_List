import React from "react";
import { useState } from "react";
import { Checkbox } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

import ClearIcon from "@mui/icons-material/Clear";
import { Button, Input } from "@mui/material";
import ModeIcon from "@mui/icons-material/Mode";
import SaveAltIcon from "@mui/icons-material/SaveAlt";

export const Task = React.memo(({ task }) => {
  // const { tasks, setTasks } = useContext(TaskContext);

  const [editTask, setEditTask] = useState(false);

  const [editTitleTask, setEditTitleTask] = useState(task.title);

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

  const handleNewTitleTask = (id, newTitle) => {
    setTasks((prevTask) =>
      prevTask.map((task) =>
        task.id === id ? { ...task, title: newTitle } : task
      )
    );
  };

  const handleEditTask = (id) => {
    if (task.id === id) {
      setEditTask(!editTask);
    }
    if (editTask) {
      handleNewTitleTask(task.id, editTitleTask);
    }
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
        {editTask ? (
          <Input
            value={editTitleTask}
            onChange={(e) => setEditTitleTask(e.target.value)}
          />
        ) : (
          task.title
        )}
      </TableCell>
      <TableCell align="center">
        <Button
          startIcon={editTask ? <SaveAltIcon /> : <ModeIcon />}
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
});
