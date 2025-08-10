import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { ShowTasks } from "./components/ShowTasks";
import { FilterTask } from "./components/FiterTasks";
import "./index.css";

function App() {
  console.log("App");
  return (
    <div className="toDo-list">
      <Header />
      <AddTask />
      <FilterTask />
      <ShowTasks />
    </div>
  );
}

export default App;
