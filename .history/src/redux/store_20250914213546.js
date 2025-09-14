import { combineReducers, legacy_createStore as createStore } from "redux";
import { reducer } from "./reducer";
const rootReducers = combineReducers({ tasks: reducer });

export const store = createStore(rootReducers);
