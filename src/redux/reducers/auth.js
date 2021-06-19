import {
  FETCH_CITIES,
  FETCH_STATES,
  REMOVE_ALL_CATEGORY,
  REMOVE_CATEGORY,
  SEARCH_CATEGORIES,
  SET_CURRENT_CITY,
  SET_CURRENT_STATE,
  SET_FORM_VALUES,
  SET_SHOW_WELCOME_MODAL,
  SHOW_SIGNUP_FORM,
  SIGNUP_SUCCESS,
  UPDATE_SELECTED_CATEGORIES,
  CATEGORY_LOADING_START,
  CATEGORY_LOADING_STOP,
} from "../../containers/WelcomeGuide/constant";

const initialState = {
  user: {},
  authToken: localStorage.getItem("authToken") || "",
  isAuth: false,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: payload.user,
      };
    default:
      return {
        ...state,
      };
  }
};
