import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./slices/tasksSlice";
const getInitialTasks = () => {
  try {
    const savedTasks = localStorage.getItem("tasks");

    // Проверяем, что это валидная строка (не "undefined")
    if (savedTasks && savedTasks !== "undefined") {
      return JSON.parse(savedTasks);
    }
  } catch (error) {
    console.warn("Invalid tasks data in localStorage, using default");
  }

  return [{ id: 1, title: "Anna", isDone: false }];
};

const preloadedState = {
  tasks: {
    tasks: getInitialTasks(),
    editTaskId: null,
    text: "",
    filterTask: "all",
  },
};

export const store = configureStore({
  reducer: { tasks: tasksSlice },
  preloadedState,
});
