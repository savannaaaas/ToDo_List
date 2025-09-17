import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reducer } from "./reducer";
const rootReducers = combineReducers({ tasks: reducer });

export const store = createStore(rootReducers);
