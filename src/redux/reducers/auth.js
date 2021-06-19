import { SIGNUP_SUCCESS } from "../../containers/WelcomeGuide/constant";

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
