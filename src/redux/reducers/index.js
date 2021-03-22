import { combineReducers } from "redux";
import registerUserReducer from "./registrationReducer";
import loginReducer from "./loginReducer";
import logoutReducer from "./logoutReducer";

const allReducers = combineReducers({
  login: loginReducer,
  logout: logoutReducer,
  registerUser: registerUserReducer,
});

export default allReducers;
