const TOKEN_NAME = "RASPSERVER_TOKEN";

export const storeToken = token => {
  sessionStorage.setItem(TOKEN_NAME, token);
};

export const disperseToken = () => {
  sessionStorage.removeItem(TOKEN_NAME);
};

export const getToken = () => {
  return sessionStorage.getItem(TOKEN_NAME);
};

export const checkToken = () => {
  return !!sessionStorage.getItem(TOKEN_NAME);
};