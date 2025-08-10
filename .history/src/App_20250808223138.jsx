import { useForm } from "react-hook-form";
import { schema } from "./schema/shema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Header } from "./components/Header";
import "./index.css";
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
    </div>
  );
}

export default App;
