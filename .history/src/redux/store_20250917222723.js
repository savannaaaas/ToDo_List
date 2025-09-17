import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { tasksSlice } from "./slices/tasksSlice";

const saveTask = localStorage.getItem("tasks");

const preloadedState = {
  tasks: saveTask
    ? JSON.parse(saveTask)
    : [{ id: 1, title: "Anna", isDone: false }],
};

const rootReducers = combineReducers({ tasks: tasksSlice });

export const store = configureStore({
  reducer: rootReducers,
  preloadedState: preloadedState,
});
