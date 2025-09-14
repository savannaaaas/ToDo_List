import { combineReducers, legacy_createStore as createStore } from "redux";

export const store = createStore();

const rootReducers = combineReducers({ tasks: reducer });
