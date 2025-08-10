import "./App.css";
import { useForm } from "react-hook-form";
import { schema } from "./schema/shema";
function App() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      task: "",
    },
    resolver: yup.resolver(schema),
  });
  return <></>;
}

export default App;
