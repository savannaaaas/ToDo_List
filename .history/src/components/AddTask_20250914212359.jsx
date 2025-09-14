import { Controller } from "react-hook-form";
import { useForm } from "react-hook-form";
import { schema } from "../schema/shema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { store } from "../redux/store";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useSelector } from "react-redux";

export const AddTask = () => {
  // const { tasks, setTasks } = useContext(TaskContext);

  const [open, setOpen] = useState(false);

  const { tasks } = useSelector((store) => store.tasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      title: "",
    },
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const handleInputSubmit = (data) => {
    const task = {
      id: crypto.randomUUID(),
      title: data.title,
      isDone: data.isDone,
      date: new Date(),
    };

    const updateTask = [...tasks, task];

    setTasks(updateTask);

    setOpen(true);

    reset();
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <form onSubmit={handleSubmit(handleInputSubmit)} className="form">
      <Controller
        name="title"
        control={control}
        defaultValue=""
        render={({ field }) => {
          return (
            <TextField
              {...field}
              placeholder="Enter task"
              helperText={errors.title?.message}
              error={!!errors.title}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#ffbeec",
                    color: "white",
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "#aaa",
                    opacity: 1,
                  },
                  "& .MuiInputBase-input": {
                    color: "#aaa",
                    opacity: 1,
                  },
                  "&:hover fieldset": {
                    borderColor: "#ff8fd8",
                    color: "white",
                  },
                },
                marginBottom: 2,
              }}
              color="secondary"
            />
          );
        }}
      />
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Task added!
        </Alert>
      </Snackbar>
      <Button
        variant="contained"
        sx={{ backgroundColor: "#ffbeec" }}
        type="submit"
      >
        Add
      </Button>
    </form>
  );
};
