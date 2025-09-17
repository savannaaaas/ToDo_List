import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeChecked,
  deleteTask,
  editTasks,
  startEditTasks,
  saveTask,
} from "../redux/action";
import { Checkbox } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import ClearIcon from "@mui/icons-material/Clear";
import { Button, Input } from "@mui/material";
import ModeIcon from "@mui/icons-material/Mode";
import SaveAltIcon from "@mui/icons-material/SaveAlt";

export const Task = React.memo(({ task }) => {
  const dispatch = useDispatch();

  const { editTaskId, text } = useSelector((store) => store.tasks);
  //не нужен useCallback так как функция используется только в этом компоненте

  const handleChangeChecked = (id) => {
    dispatch(changeChecked(id));
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleNewTitleTask = (newTitle) => {
    dispatch(editTasks(newTitle));
  };

  const handleStartEditTask = (id, title) => {
    dispatch(startEditTasks(id, title));
  };

  const handleSaveTask = () => {
    dispatch(saveTask());
  };

  return (
    <TableRow
      key={task.id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell align="center">
        <Checkbox
          checked={task.isDone ?? false}
          onChange={handleChangeChecked.bind(null, task.id)} //Создает новую функцию при каждом рендере () => handleChangeChecked(task.id), bind обеспечивает с стабильную ссылку на основную функцию
        />
      </TableCell>
      <TableCell
        align="center"
        sx={{ textDecoration: task.isDone ? "line-through" : "none" }}
      >
        {editTaskId === task.id ? (
          <Input
            value={text}
            onChange={(e) => handleNewTitleTask(e.target.value)}
          />
        ) : (
          task.title
        )}
      </TableCell>
      <TableCell align="center">
        <Button
          startIcon={editTaskId === task.id ? <SaveAltIcon /> : <ModeIcon />}
          onClick={() =>
            editTaskId === task.id
              ? handleSaveTask()
              : handleStartEditTask(task.id, task.title)
          }
        />
      </TableCell>
      <TableCell align="center">
        <Button
          startIcon={<ClearIcon />}
          onClick={handleDeleteTask.bind(null, task.id)}
        />
      </TableCell>
    </TableRow>
  );
});
