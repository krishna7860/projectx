import { combineReducers } from "redux";
import welcomeGuide from "./reducers/welcomeGuide";
import auth from "./reducers/auth";

export default combineReducers({
  welcomeGuide,
  auth,
});
