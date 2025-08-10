import { Header } from "./components/Header";
import "./index.css";
import { AddTask } from "./components/AddTask";
function App() {
  return (
    <div className="toDo-list">
      <Header />
      <AddTask />
    </div>
  );
}

export default App;
