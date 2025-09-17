import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./slices/tasksSlice";

const getInitialTasks = () => {};

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
