import React from "react";

export const LoginContext = React.createContext({
  login: false,
  setLogin: () => {},
});
