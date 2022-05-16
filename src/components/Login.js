import { useContext, useState } from "react";
import { LoginContext } from "../contexts/LoginContext";

import {
  createTokens,
  validateEmail,
  validatePassword,
} from "./services/LoginService";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });
  const { login, setLogin } = useContext(LoginContext);

  const errorEmail = validateEmail(values.email);
  const errorPassword = validatePassword(values.password);

  const handleOnBlur = (evt) => {
    setTouched({ ...touched, [evt.target.name]: true });
  };

  const handleChange = (evt) => {
    setValues({ ...values, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setTouched({ email: true, password: true });
    if (errorEmail || errorPassword) return;
    createTokens();
    setLogin(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        style={{ display: "block", margin: 20 }}
        value={values.email}
        onChange={handleChange}
        onBlur={handleOnBlur}
        placeholder="Email"
        name="email"
        type="text"
      />
      {touched.email && (
        <div style={{ color: "red", margin: 20 }}>{errorEmail}</div>
      )}
      <input
        style={{ display: "block", margin: 20 }}
        value={values.password}
        onChange={handleChange}
        onBlur={handleOnBlur}
        placeholder="Password"
        name="password"
        type="password"
      />
      {touched.password && (
        <div style={{ color: "red", margin: 20 }}>{errorPassword}</div>
      )}
      <input
        style={{ display: "block", margin: 20 }}
        type="submit"
        value="Submit"
      />
      {login && (
        <div style={{ color: "green", margin: 20 }}>"Login success"</div>
      )}
    </form>
  );
};

export default Login;
