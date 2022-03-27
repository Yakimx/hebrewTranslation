import { createStore, combineReducers } from "redux";
import { fieldReducer } from "./fieldReducer";
import { buttonReducder } from "./buttonReducer";

const rootReducer = combineReducers({
  entryField: fieldReducer,
  button: buttonReducder,
});

export const store = createStore(rootReducer);
