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
  UPDATE_SELECTED_CATEGORIES,
} from "../../containers/WelcomeGuide/constant";

const initialState = {
  selectedState: "",
  selectedCity: "",
  states: [],
  cities: [],
  category: [],
  selectedCategory: [],
  showSignup: false,
  credentials: {
    username: "",
    password: "",
  },
  showWelcomeModal: !localStorage.getItem("showWelcomeDialog"),
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_STATES: {
      return {
        ...state,
        states: payload,
      };
    }
    case FETCH_CITIES: {
      return {
        ...state,
        cities: payload,
      };
    }
    case SET_CURRENT_STATE: {
      return {
        ...state,
        selectedState: payload,
      };
    }
    case SET_CURRENT_CITY: {
      return {
        ...state,
        selectedCity: payload,
      };
    }
    case SEARCH_CATEGORIES: {
      return {
        ...state,
        category: payload,
      };
    }
    case UPDATE_SELECTED_CATEGORIES: {
      return {
        ...state,
        selectedCategory: [...state.selectedCategory, payload],
      };
    }
    case REMOVE_CATEGORY: {
      return {
        ...state,
        selectedCategory: state.selectedCategory.filter(
          (category) => category.id !== payload.id
        ),
      };
    }
    case REMOVE_ALL_CATEGORY: {
      return {
        ...state,
        selectedCategory: [],
      };
    }
    case SHOW_SIGNUP_FORM: {
      return {
        ...state,
        showSignup: true,
      };
    }
    case SET_FORM_VALUES: {
      return {
        ...state,
        credentials: {
          ...payload,
        },
      };
    }
    case SET_SHOW_WELCOME_MODAL: {
      return {
        ...state,
        showWelcomeModal: false,
      };
    }
    default:
      return {
        ...state,
      };
  }
};
