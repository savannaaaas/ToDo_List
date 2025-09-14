import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { TaskProvider } from "./provider/TaskProvider.jsx";
import App from "./App.jsx";
import "./index.css";
import { store } from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
