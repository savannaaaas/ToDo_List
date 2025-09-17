import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./slices/tasksSlice";

const saveTask = localStorage.getItem("tasks");

const preloadedState = {
  tasks: saveTask
    ? JSON.parse(saveTask)
    : [{ id: 1, title: "Anna", isDone: false }],
  editTaskId: null,
  text: "",
  filterTask: "all",
};

export const store = configureStore({
  reducer: { tasks: tasksSlice },
  preloadedState: preloadedState,
});
