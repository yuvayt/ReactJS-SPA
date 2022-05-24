import axios from "axios";

export const createTokens = () => {
  axios({
    method: "GET",
    url: `https://60dff0ba6b689e001788c858.mockapi.io/tokens`,
  })
    .then(({ data }) => {
      setTokens(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const setTokens = (tokens) => {
  sessionStorage.setItem("tokens", JSON.stringify(tokens));
};

export const getTokens = () => {
  let tokens = sessionStorage.getItem("tokens");
  if (tokens != null) return JSON.parse(tokens);
  return null;
};

export const displayError = ({ touched, err }) => {
  if (!touched) return [false, ""];
  if (touched) {
    if (err) return [true, err];
    if (!err) return [false, err];
  }
};

// const [invalidUsername, textUsername] = getErrors({
//   touched: touched.username,
//   err: validateUsername(values.username),
// });

// const [invalidPassword, textPassword] = getErrors({
//   touched: touched.username,
//   err: validateUsername(values.password),
// });
