import "./App.css";
import { useForm } from "react-hook-form";
import { schema } from "./schema/shema";
import { yupResolver } from "@hookform/resolvers/yup";
function App() {
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
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
