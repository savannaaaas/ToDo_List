import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import "./index.css";
import { ShowTasks } from "./components/ShowTasks";

function App() {
  return (
    <div className="toDo-list">
      <Header />
      <AddTask />
      <ShowTasks />
    </div>
  );
}

export default App;
