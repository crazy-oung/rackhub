import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import loginReducer from "./modules/loginReducer";
const rootReducer = combineReducers({
  loginReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
