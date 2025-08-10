import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import "./index.css";
import { ShowTasks } from "./components/ShowTasks";
import { FilterTask } from "./components/FiterTasks";
function App() {
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
