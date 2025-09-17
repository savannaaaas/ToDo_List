import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reducer } from "./reducerTasks";

const saveTask = localStorage.getItem("tasks");

const preloadedState = {
  tasks: saveTask
    ? JSON.parse(saveTask)
    : [{ id: 1, title: "Anna", isDone: false }],
};

const rootReducers = combineReducers({ tasks: reducer });

export const store = configureStore(rootReducers, preloadedState);
