import { createStore } from "redux";
import loginReducer from "./reducers/commonReducers";

function configureStore(state = { loggedin: false }) {
  return createStore(loginReducer, state);
}

export default configureStore;
