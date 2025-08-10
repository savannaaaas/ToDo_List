import "./App.css";
import { useForm } from "react-hook-form";
import { schema } from "./schema/shema";
import {yupRe}
function App() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      task: "",
    },
    resolver: yupResolver()
  });
  return <></>;
}

export default App;
