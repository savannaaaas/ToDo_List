import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reducer } from "./reducer";

const saveTask = localStorage.getItem("tasks");

const rootReducers = combineReducers({ tasks: reducer });

export const store = configureStore(rootReducers);
