export const isLoggedIn = () => {
  const tokens = getTokens();
  if (!tokens) return false;
  if (tokens.token) return true;
  return false;
};

export const setTokens = (tokens) => {
  sessionStorage.setItem("tokens", JSON.stringify(tokens));
};

export const getTokens = () => {
  let tokens = sessionStorage.getItem("tokens");
  if (tokens != null) return JSON.parse(tokens);
  return null;
};

export const validateEmail = (email) => {
  if (!email) return "Email is required";
  const validEmail = String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  if (!validEmail) return "Email invalid";
  return "";
};

export const validatePassword = (password) => {
  if (password.length < 8) return "At least 8 characters";
  return "";
};
