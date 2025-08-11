import { useState } from "react";
import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { ShowTasks } from "./components/ShowTasks";
import { FilterTask } from "./components/FiterTasks";
import "./index.css";

function App() {
  const [filterTask, setFilterTask] = useState("all");

  return (
    <div className="toDo-list">
      <Header />
      <AddTask />
      <FilterTask setFilterTask={setFilterTask} />
      <ShowTasks filterTask={filterTask} />
    </div>
  );
}

export default App;
