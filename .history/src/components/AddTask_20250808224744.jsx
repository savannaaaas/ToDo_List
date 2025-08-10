import { Controller } from "react-hook-form";
import { useForm } from "react-hook-form";
import { schema } from "../schema/shema";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@mui/material";

export const AddTask = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      task: "",
    },
    resolver: yupResolver(schema),
  });
  <>
    <Controller
      name="task"
      control={control}
      defaultValue=""
      render={({ field }) => {
        <TextField
          {...field}
          placeholder="Enter task"
          helperText={errors.task?.message}
          error={errors.task.message}
        />;
      }}
    />
  </>;
};
