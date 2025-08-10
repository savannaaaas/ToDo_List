import { Controller } from "react-hook-form";
import { useForm } from "react-hook-form";
import {}
import { yupResolver } from "@hookform/resolvers/yup";

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
    <Controller />
  </>;
};
