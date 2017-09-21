import {
  TOGGLE_AUTHORIZATION,
  ADD_TOKEN,
  REMOVE_TOKEN
} from "../actions/auth";

export const authorization = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_AUTHORIZATION:
      return !state;
    default:
      return state;
  }
};

export const token = (state = "", action) => {
  switch (action.type) {
    case ADD_TOKEN:
      return action.token;
    case REMOVE_TOKEN:
      return "";
    default:
      return state;
  }
}
