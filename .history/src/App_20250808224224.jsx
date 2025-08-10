import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import "./index.css";

function App() {
  return (
    <div className="toDo-list">
      <Header />
      <AddTask />
    </div>
  );
}

export default App;
