export const TOGGLE_AUTHORIZATION = "TOGGLE_AUTHORIZATION";

export const ADD_TOKEN = "ADD_TOKEN";
export const REMOVE_TOKEN = "REMOVE_TOKEN";

export const toggleAuthorization = () => {
  return ({
    type: TOGGLE_AUTHORIZATION
  });
};

export const addToken = token => {
  return({
    type: ADD_TOKEN,
    token
  });
};

export const removeToken = () => {
  return({
    type: REMOVE_TOKEN
  });
};
