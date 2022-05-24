export const validateUsername = (username) => {
  if (!username) return "Username is required";
  const validUsername = String(username)
    .toLowerCase()
    .match(/^[a-z0-9]{3,30}$/);
  if (!validUsername) return "Username invalid";
  return "";
};

export const validatePassword = (password) => {
  if (password.length < 8) return "At least 8 characters";
  return "";
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
