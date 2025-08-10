import { useForm } from "react-hook-form";
import { schema } from "./schema/shema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Header } from "./components/Header";
import "./index.css";
import { AddTask } from "./components/AddTask";
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
    <div className="toDo-list">
      <Header />
      <AddTask />
    </div>
  );
}

export default App;
