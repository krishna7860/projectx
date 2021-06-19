import { combineReducers } from "redux";
import welcomeGuide from "./reducers/welcomeGuide";
import category from "./reducers/category";
import auth from "./reducers/auth";

export default combineReducers({
  welcomeGuide,
  auth,
  category,
});
