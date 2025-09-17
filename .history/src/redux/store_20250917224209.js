import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./slices/tasksSlice";

const getInitialTasks = () => {
  const saveTask = localStorage.getItem("tasks")
  saveTask
      ? JSON.parse(saveTask)
      : [{ id: 1, title: "Anna", isDone: false }],
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
