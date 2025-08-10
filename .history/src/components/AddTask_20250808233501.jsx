import { Controller } from "react-hook-form";
import { useForm } from "react-hook-form";
import { schema } from "../schema/shema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField } from "@mui/material";

export const AddTask = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      task: "",
    },
    resolver: yupResolver(schema),
    mode: "onTouched",
  });
  const handleInputSubmit = (data) => {
    console.log(data);
    const task = {
      id: crypto.randomUUID(),
      title: data.title,
      isDone: false,
    };
    localStorage.setItem("tasks", task);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(handleInputSubmit)} className="form">
      <Controller
        name="task"
        control={control}
        defaultValue=""
        render={({ field }) => {
          return (
            <TextField
              {...field}
              placeholder="Enter task"
              helperText={errors.task?.message}
              error={errors.task}
              sx={{ color: "#ffbeec" }}
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
