import { Controller } from "react-hook-form";
import { useForm } from "react-hook-form";
import { schema } from "../schema/shema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField } from "@mui/material";
import { useContext, useEffect } from "react";
import { TaskContext } from "../context/TaskContext";

export const AddTask = () => {
  const { tasks, setTasks } = useContext(TaskContext);
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
    console.log(data);
    const task = {
      id: crypto.randomUUID(),
      title: data.title,
      isDone: data.isDone,
      date: new Date(),
    };
    const updateTask = [...tasks, task];
    setTasks(updateTask);
    localStorage.setItem("tasks", JSON.stringify(updateTask));
    reset();
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
