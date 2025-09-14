import { combineReducers, legacy_createStore as createStore } from "redux";

export const store = createStore(rootReducers);

const rootReducers = combineReducers({ tasks: reducer });
