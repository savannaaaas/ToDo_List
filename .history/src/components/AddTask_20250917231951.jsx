import { Controller } from "react-hook-form";
import { useForm } from "react-hook-form";
import { schema } from "../schema/shema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { add, selectTasks } from "../redux/slices/tasksSlice";
import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export const AddTask = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const tasks = useSelector(selectTasks);

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
    dispatch(add(data));

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
