import { combineReducers, legacy_createStore as createStore } from "redux";

const rootReducers = combineReducers({ tasks: reducer });

export const store = createStore(rootReducers);
