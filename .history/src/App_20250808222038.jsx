import "./App.css";
import { useForm } from "react-hook-form";
function App() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      task: "",
    },
  });
  return <></>;
}

export default App;
