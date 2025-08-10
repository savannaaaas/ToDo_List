import { Controller } from "react-hook-form";

export const AddTask = ({ control }) => {
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
